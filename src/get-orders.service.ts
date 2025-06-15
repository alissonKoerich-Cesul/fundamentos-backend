import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";

interface OrderItem {
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date | null;
}

interface Order {
  id: string;
  userId: string;
  total: number;
  createdAt: Date;
  updatedAt: Date | null;
  orderItems: OrderItem[];
}

interface GetOrderByIdServiceRequest {
  id: string;
}

interface GetOrderByIdServiceResponse {
  order: Order;
}

@Injectable()
export class GetOrderByIdService {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({ id }: { id: string }) {
    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new Error("Order not found");
    }

    const orderItems = order.orderItems.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));

    return {
      order: {
        id: order.id,
        userId: order.userId,
        total: order.total,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        orderItems,
      }
    };
  }
}
