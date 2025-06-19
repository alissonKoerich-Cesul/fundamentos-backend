import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { UsersRepository } from "src/users/users.repository"; 
import { ProductsRepository } from "src/products/products.repository"; 
import { Prisma } from "@prisma/client";

interface CreateOrderRequest {
  userId: string;
  orderItems: {
    productId: string;
    quantity: number;
  }[];
}

@Injectable()
export class CreateOrderService {
  constructor(
    private ordersRepository: OrdersRepository,
    private usersRepository: UsersRepository,
    private productsRepository: ProductsRepository,
  ) {}

  async execute({ userId, orderItems }: CreateOrderRequest): Promise<void> {
    
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new NotFoundException("User not found.");
    }

    let total = 0;
    const itemsData: Prisma.OrderItemCreateWithoutOrderInput[] = [];

    for (const item of orderItems) {
      const product = await this.productsRepository.findById(item.productId);
      if (!product) {
        throw new NotFoundException(`Product not found for item: ${item.productId}.`);
      }

      if (product.inStock < item.quantity) {
        throw new BadRequestException(`Insufficient stock for product: ${item.productId}.`);
      }

      total += product.price * item.quantity;

     itemsData.push({
      quantity: item.quantity,
      product: {
        connect: {
      id: item.productId
    }
  }
});

   
    await this.ordersRepository.createWithItems({
      user: { connect: { id: userId } },
      total,
      orderItems: {
        create: itemsData,
      },
    });

   
        for (const item of orderItems) {
      const product = await this.productsRepository.findById(item.productId);
      if (product && product.id) {
        const newInStock = product.inStock - item.quantity;
        await this.productsRepository.updateInStock(product.id, newInStock);
      }
    }
  }
  }
}
