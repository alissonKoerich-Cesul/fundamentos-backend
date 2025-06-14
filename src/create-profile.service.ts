import { Injectable } from "@nestjs/common";
import { ProfilesRepository } from "./profile.repository";

interface CreateProfileServiceRequest {
  userId: string;
  avatarUrl?: string | null;
}

@Injectable()
export class CreateProfileService {
  constructor(private profilesRepository: ProfilesRepository) {}

  async execute({
    userId,
    avatarUrl,
  }: CreateProfileServiceRequest): Promise<void> {
    await this.profilesRepository.create({
      userId,
      avatarUrl: avatarUrl ?? null,
    });
  }
}
