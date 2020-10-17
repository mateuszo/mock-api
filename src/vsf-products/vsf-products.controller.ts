import { Controller, Get, Param } from '@nestjs/common';
import { VsfProductsService } from './vsf-products.service';

@Controller('vsf-products')
export class VsfProductsController {

  constructor(private productsService: VsfProductsService) { }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':sku')
  getProduct(@Param() params) {
    return this.productsService.getProducts().data.products.items.find((product) => product.sku === params.sku);
  }
}
