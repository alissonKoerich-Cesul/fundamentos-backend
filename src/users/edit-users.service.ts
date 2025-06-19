import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

interface EditUserServiceRequest {
  id: string;
  email: string;
}

@Injectable()
export class EditUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ id, email }: EditUserServiceRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    user.email = email;

    await this.usersRepository.update(user);
  }
}
