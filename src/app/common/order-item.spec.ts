import { OrderItem } from './order-item';

describe('OrderItem', () => {
  it('should create an instance', () => {
    expect(new OrderItem('imgUrl',3000,1,'12345')).toBeTruthy();
  });
});
