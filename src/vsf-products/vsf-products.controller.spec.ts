import { Test, TestingModule } from '@nestjs/testing';
import { VsfProductsController } from './vsf-products.controller';

describe('VsfProductsController', () => {
  let controller: VsfProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VsfProductsController],
    }).compile();

    controller = module.get<VsfProductsController>(VsfProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
