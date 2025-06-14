import { Module } from '@nestjs/common';
import { CreateProductController } from './create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './create-product.service';
import { ProductsRepository } from './products.repository';
import { CreateModelController } from './create-model.controller';
import { DeleteModelController } from './delete-model.controller';
import { DeleteProductController } from './delete-product.controller';
import { EditModelController } from './edit-model.controller';
import { EditProductController } from './edit-product.controller';
import { FetchRecentModelsController } from './fetch-recent-models.controller';
import { FetchRecentProductsController } from './fetch-recent-products.controller';
import { GetProductByIdController } from './get-product-by-id.controller';
import { GetModelByIdController } from './get-model-by-id.controller';
import { UpdateAvailableProductController } from './update-available-product.controller';
import { CreateModelService } from './create-model.service';
import { DeleteModelService } from './delete-model.service';
import { DeleteProductService } from './delete-product.service';
import { EditModelService } from './edit-model.service';
import { EditProductService } from './edit-product.service';
import { FetchRecentModelsService } from './fetch-recent-models.service';
import { FetchRecentProductsService } from './fetch-recent-products.service';
import { GetProductByIdService } from './get-product-by-id.service';
import { GetModelByIdService } from './get-model-by-id.service';
import { UpdateAvailableProductService } from './update-available-product.service';
import { ModelsRepository } from './models.repository';
import { CreateUserController } from './create-users.controller';
import { CreateUserService } from './create-users.service';
import { UsersRepository } from './users.repository';
import { CreateProfileController } from './create-profile.controller';
import { CreateProfileService } from './create-profile.service';
import { ProfilesRepository } from './profile.repository';
import { DeleteUserController } from './delete-users.controller';
import { EditUserController } from './edit-users.controller';
import { EditProfileController } from './edit-profile.controller';
import { EditUserService } from './edit-users.service';
import { EditProfileService } from './edit-profile.service';
import { DeleteUserService } from './delete-users.service';
import { GetUserByIdController } from './get-users-by-id.controller';
import { GetUserByIdService } from './get-users-by-id.service';
import { GetProfileByIdService } from './get-profiles-by-id.service';
import { GetProfileByIdController } from './get-profiles-by-id.controller';
import { FetchRecentUsersController } from './fetch-recent-users.controller';
import { FetchRecentUsersService } from './fetch-recent-users.service';
import { FetchProfilesController } from './fetch-recent-profiles.controller';
import { FetchProfilesService } from './fetch-recent-profiles.service';

@Module({
  imports: [],
  controllers: [CreateUserController ,FetchProfilesController ,CreateProfileController ,CreateProductController, CreateModelController, FetchRecentUsersController ,DeleteUserController,EditUserController, EditProfileController , DeleteModelController, DeleteProductController, EditModelController, EditProductController, FetchRecentModelsController, FetchRecentProductsController, GetProductByIdController, GetUserByIdController ,GetModelByIdController, GetProfileByIdController, UpdateAvailableProductController],
  providers: [PrismaService, CreateProfileService , CreateUserService , FetchProfilesService ,CreateProductService, EditUserService , EditProfileService , FetchRecentUsersService ,DeleteUserService, CreateModelService, DeleteModelService, DeleteProductService, EditModelService, EditProductService, FetchRecentModelsService, FetchRecentProductsService, GetProductByIdService, GetModelByIdService, GetUserByIdService , GetProfileByIdService ,UpdateAvailableProductService, ProductsRepository, ModelsRepository, UsersRepository, ProfilesRepository],
})
export class AppModule {}
