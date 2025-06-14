import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

export interface Profile {
  id: string;
  avatarUrl: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
}

interface GetProfileByIdServiceRequest {
  id: string;
}

interface GetProfileByIdServiceResponse {
  profile: Profile;
}

@Injectable()
export class GetProfileByIdService {
  constructor(private prisma: PrismaService) {}

  async execute({
    id,
  }: GetProfileByIdServiceRequest): Promise<GetProfileByIdServiceResponse> {
    const profile = await this.prisma.profile.findUnique({
      where: { id },
    });

    if (!profile) {
      throw new Error("Profile not found");
    }

    return {
      profile: {
        id: profile.id,
        avatarUrl: profile.avatarUrl,
        userId: profile.userId,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      },
    };
  }
}
