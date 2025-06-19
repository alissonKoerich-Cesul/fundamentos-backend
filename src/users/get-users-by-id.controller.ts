import { Controller, Get, Param } from "@nestjs/common";
import { GetUserByIdService } from "./get-users-by-id.service";


@Controller('/users/:id')
export class GetUserByIdController {
  constructor(private getUserById: GetUserByIdService) {}

  @Get()
  async handle(@Param("id") id: string) {
    const user = await this.getUserById.execute({ id });

    return {
      user,
    };
  }
}
