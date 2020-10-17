import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagesController } from './pages/pages.controller';
import { ProductsV2Service } from './products-v2/products-2.service';
import { ProductsV2Controller } from './products-v2/products-v2.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { VsfProductsController } from './vsf-products/vsf-products.controller';
import { VsfProductsService } from './vsf-products/vsf-products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, ProductsV2Controller, VsfProductsController, PagesController],
  providers: [AppService, ProductsService, ProductsV2Service, VsfProductsService],
})
export class AppModule { }
