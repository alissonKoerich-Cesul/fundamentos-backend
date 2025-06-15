import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";
import { CreateOrderService } from "./create-orders.service";


const createOrderSchema = z.object({
  userId: z.string().uuid(),
  orderItems: z.array(z.object({
    productId: z.string().uuid(),
    quantity: z.number().min(1),
  }))
});

const bodyValidationPipe = new ZodValidationPipe(createOrderSchema);
type CreateOrderBody = z.infer<typeof createOrderSchema>;

@Controller("/orders")
export class CreateOrderController {
  constructor(private createOrder: CreateOrderService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: CreateOrderBody) {
    const { userId, orderItems } = body;

    await this.createOrder.execute({ userId, orderItems });
  }
}
