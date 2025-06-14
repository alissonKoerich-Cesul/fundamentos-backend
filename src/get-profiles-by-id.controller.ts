import { Controller, Get, Param } from "@nestjs/common";
import { GetProfileByIdService } from "./get-profiles-by-id.service";


@Controller('/profiles/:id')
export class GetProfileByIdController {
  constructor(private getProfileById: GetProfileByIdService) {}

  @Get()
  async handle(@Param("id") id: string) {
    const { profile } = await this.getProfileById.execute({ id });

    return profile;
  }
}
