interface Themes<T> {
  defaultTheme?: T;
  theme?: T;
}

export const mergeTheme = <T>(
  key: keyof T,
  { theme, defaultTheme }: Themes<T>,
): Record<string, unknown> => ({
  ...(defaultTheme?.[key] ?? {}),
  ...(theme?.[key] ?? {}),
});

export default {};
