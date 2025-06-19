import { Controller, Get } from "@nestjs/common";
import { FetchRecentUsersService } from "./fetch-recent-users.service";

@Controller('/users')
export class FetchRecentUsersController {
  constructor(private fetchRecentUsers: FetchRecentUsersService) {}

  @Get()
  async handle() {
    const users = await this.fetchRecentUsers.execute();

    return {
      users
    };
  }
}
