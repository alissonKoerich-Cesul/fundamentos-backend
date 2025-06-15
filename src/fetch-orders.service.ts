import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";

@Injectable()
export class FetchOrdersByUserService {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute(userId: string) {
    const orders = await this.ordersRepository.findManyByUserId(userId);

    const formattedOrders = orders.map(order => ({
      id: order.id,
      total: order.total,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      orderItems: order.orderItems.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        product: {
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
        }
      }))
    }));

    return {
      orders: formattedOrders,
    };
  }
}
