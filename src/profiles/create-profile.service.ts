import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersRepository } from "src/users/users.repository"; 
import { ProfilesRepository } from "src/profiles/profile.repository"; 

interface CreateOrUpdateProfileRequest {
  userId: string;
  avatarUrl?: string;
}

@Injectable()
export class CreateOrUpdateProfileService {
  constructor(
    private usersRepository: UsersRepository,
    private profilesRepository: ProfilesRepository
  ) {}

  async execute({ userId, avatarUrl }: CreateOrUpdateProfileRequest): Promise<void> {
   
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new NotFoundException("User not found.");
    }

    
    const existingProfile = await this.profilesRepository.findByUserId(userId);

    if (existingProfile) {
    
      throw new BadRequestException("User already has a profile.");
    }

    await this.profilesRepository.create({
      userId,
      avatarUrl
    });
  }
}
