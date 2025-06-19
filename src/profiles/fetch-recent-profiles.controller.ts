import { Controller, Get } from "@nestjs/common";
import { FetchProfilesService } from "./fetch-recent-profiles.service";


@Controller('/profiles')
export class FetchProfilesController {
  constructor(private fetchProfilesService: FetchProfilesService) {}

  @Get()
  async handle() {
    const { profiles } = await this.fetchProfilesService.execute();
    return { profiles };
  }
}
