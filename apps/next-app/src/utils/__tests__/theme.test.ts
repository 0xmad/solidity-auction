import { mergeTheme } from '..';

describe('utils/theme', () => {
  const theme = {
    key: { color: 'white' },
  };

  const defaultTheme = {
    key: { color: 'black' },
  };

  test('should merge themes', () => {
    expect(mergeTheme('key', { theme, defaultTheme })).toStrictEqual({
      color: 'white',
    });
  });

  test('should merge themes without target theme', () => {
    expect(mergeTheme('key', { defaultTheme })).toStrictEqual({
      color: 'black',
    });
  });

  test('should merge themes without default theme', () => {
    expect(mergeTheme('key', { theme })).toStrictEqual({
      color: 'white',
    });
  });
});
