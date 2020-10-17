import { Test, TestingModule } from '@nestjs/testing';
import { VsfProductsService } from './vsf-products.service';

describe('VsfProductsService', () => {
  let service: VsfProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VsfProductsService],
    }).compile();

    service = module.get<VsfProductsService>(VsfProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
