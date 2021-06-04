import validation, { Values } from '../validation';

describe('auction/validation', () => {
  test('should validate object', async () => {
    const values: Values = {
      name: 'name',
      description: 'description',
      startPrice: 0.01,
      category: 'art',
    };

    const result = await validation(values);
    expect(result).toBeUndefined();
  });

  test('should validate object and return errors', async () => {
    const values: Values = {
      name: '',
      description: '',
      startPrice: 0,
      category: 'art',
    };

    expect(await validation(values)).toStrictEqual({
      name: 'Name must be at least 2 characters',
      description: 'Description must be at least 2 characters',
      startPrice: 'Start price must be greater than or equal to 0.01',
    });
  });
});
