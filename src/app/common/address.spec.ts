import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address(
      '1','2','3','4','5'
    )).toBeTruthy();
  });
});
