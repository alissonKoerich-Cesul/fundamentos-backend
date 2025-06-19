import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service"; 

interface EditProfileServiceRequest {
  id: string;
  avatarUrl?: string | null;
}

@Injectable()
export class EditProfileService {
  constructor(private prisma: PrismaService) {}

  async execute({
    id,
    avatarUrl,
  }: EditProfileServiceRequest): Promise<void> {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id,
      },
    });

    if (!profile) {
      throw new Error("Profile not found");
    }

    await this.prisma.profile.update({
      where: {
        id,
      },
      data: {
        avatarUrl,
      },
    });
  }
}
