import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) { }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':code')
  getProduct(@Param() params) {
    return this.productsService.getProducts().find(p => p.sku == params.code);
  }

}
