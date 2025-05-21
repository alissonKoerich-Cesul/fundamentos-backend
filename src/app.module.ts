import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateProductController } from './create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './create.product.service';
import { ProductsRepository } from './products.repository';


@Module({
  imports: [],
  controllers: [CreateProductController],
  providers: [PrismaService, CreateProductService, ProductsRepository],
})
export class AppModule {}
