import { Module } from '@nestjs/common';
import { CreateProductController } from './products/create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './products/create-product.service';
import { ProductsRepository } from './products/products.repository';
import { CreateModelController } from './models/create-model.controller';
import { DeleteModelController } from './models/delete-model.controller';
import { DeleteProductController } from './products/delete-product.controller';
import { EditModelController } from './models/edit-model.controller';
import { EditProductController } from './products/edit-product.controller';
import { FetchRecentModelsController } from './models/fetch-recent-models.controller';
import { FetchRecentProductsController } from './products/fetch-recent-products.controller';
import { GetProductByIdController } from './products/get-product-by-id.controller';
import { GetModelByIdController } from './models/get-model-by-id.controller';
import { UpdateAvailableProductController } from './products/update-available-product.controller';
import { CreateModelService } from './models/create-model.service';
import { DeleteModelService } from './models/delete-model.service';
import { DeleteProductService } from './products/delete-product.service';
import { EditModelService } from './models/edit-model.service';
import { EditProductService } from './products/edit-product.service';
import { FetchRecentModelsService } from './models/fetch-recent-models.service';
import { FetchRecentProductsService } from './products/fetch-recent-products.service';
import { GetProductByIdService } from './products/get-product-by-id.service';
import { GetModelByIdService } from './models/get-model-by-id.service';
import { UpdateAvailableProductService } from './products/update-available-product.service';
import { ModelsRepository } from './models/models.repository';
import { CreateUserController } from './users/create-users.controller';
import { CreateUserService } from './users/create-users.service';
import { UsersRepository } from './users/users.repository';
import { CreateOrUpdateProfileController } from './profiles/create-profile.controller'; 
import { CreateOrUpdateProfileService } from './profiles/create-profile.service';
import { ProfilesRepository } from './profiles/profile.repository';
import { DeleteUserController } from './users/delete-users.controller'; 
import { EditUserController } from './users/edit-users.controller';
import { EditProfileController } from './profiles/edit-profile.controller'; 
import { EditUserService } from './users/edit-users.service';
import { EditProfileService } from './profiles/edit-profile.service'; 
import { DeleteUserService } from './users/delete-users.service'; 
import { GetUserByIdController } from './users/get-users-by-id.controller';
import { GetUserByIdService } from './users/get-users-by-id.service';
import { GetProfileByIdService } from './profiles/get-profiles-by-id.service'; 
import { GetProfileByIdController } from './profiles/get-profiles-by-id.controller'; 
import { FetchRecentUsersController } from './users/fetch-recent-users.controller';
import { FetchRecentUsersService } from './users/fetch-recent-users.service';
import { FetchProfilesController } from './profiles/fetch-recent-profiles.controller';
import { FetchProfilesService } from './profiles/fetch-recent-profiles.service'; 
import { CreateOrderController } from './orders/create-orders.controller';
import { CreateOrderService } from './orders/create-orders.service'; 
import { OrdersRepository } from './orders/orders.repository';
import { GetOrderByIdController } from './orders/get-orders.controller'; 
import { GetOrderByIdService } from './orders/get-orders.service'; 
import { FetchOrdersByUserController } from './orders/fetch-orders.controller'; 
import { FetchOrdersByUserService } from './orders/fetch-orders.service'; 

@Module({
  imports: [],
  controllers: [CreateUserController , GetOrderByIdController , FetchOrdersByUserController ,CreateOrderController ,FetchProfilesController ,CreateOrUpdateProfileController ,CreateProductController, CreateModelController, FetchRecentUsersController ,DeleteUserController,EditUserController, EditProfileController , DeleteModelController, DeleteProductController, EditModelController, EditProductController, FetchRecentModelsController, FetchRecentProductsController, GetProductByIdController, GetUserByIdController ,GetModelByIdController, GetProfileByIdController, UpdateAvailableProductController],
  providers: [PrismaService, CreateOrUpdateProfileService , GetOrderByIdService , FetchOrdersByUserService ,CreateOrderService,CreateUserService , FetchProfilesService ,CreateProductService, EditUserService , EditProfileService , FetchRecentUsersService ,DeleteUserService, CreateModelService, DeleteModelService, DeleteProductService, EditModelService, EditProductService, FetchRecentModelsService, FetchRecentProductsService, GetProductByIdService, GetModelByIdService, GetUserByIdService , GetProfileByIdService ,UpdateAvailableProductService, ProductsRepository, ModelsRepository, UsersRepository, OrdersRepository ,ProfilesRepository],
})
export class AppModule {}
