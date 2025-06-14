import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";
import { z } from "zod";
import { CreateUserService } from "./create-users.service";


const createUserBodySchema = z.object({
  email: z.string().email(),
});

const bodyValidationPipe = new ZodValidationPipe(createUserBodySchema);

type CreateUserBodySchema = z.infer<typeof createUserBodySchema>;

@Controller('/users')
export class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: CreateUserBodySchema) {
    const { email } = body;

    await this.createUser.execute({
      email,
    });
  }
}
