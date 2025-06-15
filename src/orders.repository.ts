import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Order, Prisma } from "@prisma/client";

@Injectable()
export class OrdersRepository {
  constructor(private prisma: PrismaService) {}

 async findById(id: string) {
  return await this.prisma.order.findUnique({
    where: { id },
    include: {
      orderItems: true,
    },
  });
}

  async create(data: Prisma.OrderUncheckedCreateInput): Promise<void> {
    await this.prisma.order.create({
      data,
    });
  }
  async findManyByUserId(userId: string) {
  return await this.prisma.order.findMany({
    where: { userId },
    include: {
      orderItems: {
        include: {
          product: true, 
        },
      },
    },
  });
}

}
