import { Controller, Get, Param } from '@nestjs/common';
import { ProductsV2Service } from './products-2.service';

@Controller('products-v2')
export class ProductsV2Controller {

  constructor(private productsService: ProductsV2Service) { }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':code')
  getProduct(@Param() params) {
    return this.productsService.getProducts().find(p => p.code == params.code);
  }

}
