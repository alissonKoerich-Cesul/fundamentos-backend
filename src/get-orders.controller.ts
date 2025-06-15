import { Controller, Get, Param } from "@nestjs/common";
import { GetOrderByIdService } from "./get-orders.service";


@Controller("/orders/:id")
export class GetOrderByIdController {
  constructor(private getOrderById: GetOrderByIdService) {}

  @Get()
  async handle(@Param("id") id: string) {
    const { order } = await this.getOrderById.execute({ id });

    return { order };
  }
}
