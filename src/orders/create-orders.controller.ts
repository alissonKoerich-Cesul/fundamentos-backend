import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { CreateOrderService } from "./create-orders.service"; 

const createOrderSchema = z.object({
  userId: z.string().uuid(),
  orderItems: z.array(
    z.object({
      productId: z.string().uuid(),
      quantity: z.number().min(1),
    })
  ).min(1),
});

type CreateOrderBody = z.infer<typeof createOrderSchema>;
const bodyValidationPipe = new ZodValidationPipe(createOrderSchema);

@Controller("/orders")
export class CreateOrderController {
  constructor(private createOrderService: CreateOrderService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: CreateOrderBody) {
    await this.createOrderService.execute(body);
  }
}
