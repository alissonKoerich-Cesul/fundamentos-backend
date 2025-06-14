import { Body, Controller, HttpCode, Param, Put } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";
import { EditUserService } from "./edit-users.service";


const editUserBodySchema = z.object({
  email: z.string().email(),
});

const bodyValidationPipe = new ZodValidationPipe(editUserBodySchema);

type EditUserBodySchema = z.infer<typeof editUserBodySchema>;

@Controller('/users/:id')
export class EditUserController {
  constructor(private editUser: EditUserService) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe) body: EditUserBodySchema,
    @Param("id") id: string,
  ) {
    const { email } = body;

    await this.editUser.execute({
      id,
      email,
    });
  }
}
