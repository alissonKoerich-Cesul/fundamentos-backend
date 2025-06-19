import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe"; 
import { CreateOrUpdateProfileService } from "./create-profile.service"; 

const createProfileSchema = z.object({
  userId: z.string().uuid(),
  avatarUrl: z.string().url().optional(),
});

type CreateProfileBody = z.infer<typeof createProfileSchema>;
const bodyValidationPipe = new ZodValidationPipe(createProfileSchema);

@Controller("/profiles")
export class CreateOrUpdateProfileController {
  constructor(private createOrUpdateProfile: CreateOrUpdateProfileService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: CreateProfileBody) {
    const { userId, avatarUrl } = body;

    await this.createOrUpdateProfile.execute({ userId, avatarUrl });
  }
}
