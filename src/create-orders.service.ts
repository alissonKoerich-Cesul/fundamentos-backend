import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { Prisma } from "@prisma/client";

interface OrderItem {
  productId: string;
  quantity: number;
}

interface CreateOrderServiceRequest {
  userId: string;
  orderItems: OrderItem[];
}

@Injectable()
export class CreateOrderService {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({ userId, orderItems }: CreateOrderServiceRequest): Promise<void> {
    const total = orderItems.reduce((sum, item) => {
      return sum + item.quantity * 1;
    }, 0);

    const orderData: Prisma.OrderUncheckedCreateInput = {
      userId,
      total,
      orderItems: {
        create: orderItems.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      },
    };

    await this.ordersRepository.create(orderData);
  }
}
