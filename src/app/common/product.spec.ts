import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('1',12345,'Nike Sport shoe','Men','description',654,'imgUrl',true,100,new Date(),new Date(),'black','casual')).toBeTruthy();
  });
});
