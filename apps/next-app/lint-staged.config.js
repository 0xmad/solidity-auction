module.exports = {
  '*.{ts,js,tsx,jsx,json}': [
    "pretty-quick --pattern '**/*.*(js|tx|jsx|tsx|json)' --staged",
  ],
  '**/*.{ts,js,tsx,jsx,json}': 'pnpm run lint:js:fix',
};
