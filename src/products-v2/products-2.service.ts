import { Injectable } from '@nestjs/common';
import { Product } from '@spartacus/core/src/model/product.model';
import { PRODUCT_DATA } from 'src/data/product.data';

@Injectable()
export class ProductsV2Service {
  getProducts() {
    return this.addProperty(this.denormalize(PRODUCT_DATA));
  }

  private denormalize(products) {
    return products.map((product: Product) => {
      const newProduct: any = { ...product };
      newProduct.price = {
        currency: product.price.currencyIso,
        unitaryPrice: product.price.value,
      };
      newProduct.title = product.name;
      delete newProduct.name;
      return newProduct;
    });
  }

  private addProperty(products) {
    return products.map(product => ({
      ...product,
      tags: this.generateTags(product),
    }));
  }

  private generateTags(product: Product): string[] {
    const availableTags = [
      '#new',
      '#old',
      '#limited_offer',
      '#last_items',
      '#nofilter',
      '#spartacus',
      '#divante',
      '#training',
      '#best',
      '#angular',
    ];

    const lastTwoDigits = (Number(product.code) % 100).toString();
    return [availableTags[lastTwoDigits[0]], availableTags[lastTwoDigits[1]]];
  }
}
