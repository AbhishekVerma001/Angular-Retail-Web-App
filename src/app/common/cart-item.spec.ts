import { CartItem } from './cart-item';
import { Product } from './product';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem(new Product('1',12345,'Nike Sport shoe','Men','description',654,'imgUrl',true,100,new Date(),new Date(),'black','casual'))).toBeTruthy();
  });
});
