import { Controller, Get, Param } from "@nestjs/common";
import { FetchOrdersByUserService } from "./fetch-orders.service";


@Controller("/users/:userId/orders")
export class FetchOrdersByUserController {
  constructor(private fetchOrdersByUser: FetchOrdersByUserService) {}

  @Get()
  async handle(@Param("userId") userId: string) {
    const orders = await this.fetchOrdersByUser.execute(userId);

    return orders;
  }
}
