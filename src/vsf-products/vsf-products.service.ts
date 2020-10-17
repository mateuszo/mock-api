import { Injectable } from '@nestjs/common';
import { VSF_PRODUCT_DATA } from './vsf-product.data';

@Injectable()
export class VsfProductsService {

  getProducts() {
    return VSF_PRODUCT_DATA;
  }
}
