import { Injectable } from '@nestjs/common';
import { Product } from '@spartacus/core/src/model/product.model';
import { PRODUCT_DATA } from '../data/product.data';

@Injectable()
export class ProductsService {
  getProducts() {
    return this.addProperty(this.denormalize(PRODUCT_DATA));
  }

  private denormalize(products) {
    return products.map((product: Product) => {
      const newProduct: any = { ...product };
      newProduct.sku = 'sku:' + product.code;
      delete newProduct.code;
      newProduct.abstract = product.summary;
      delete newProduct.description;
      delete newProduct.summary;
      delete newProduct.configurable;
      delete newProduct.multidimensional;
      return newProduct;
    });
  }

  private addProperty(products) {
    return products.map(product => ({
      ...product,
      color: this.getProductColor(product),
    }));
  }

  private getProductColor(product: Product): string {
    const hashCode = this.weakHash(product.name);
    return '#' + Math.floor(Number(`0.${hashCode}`) * 16777215).toString(16);
  }

  private weakHash(source: string): number {
    return source
      .split('')
      .map(char => char.charCodeAt(0))
      .reduce((acc, curr) => acc + curr);
  }
}
