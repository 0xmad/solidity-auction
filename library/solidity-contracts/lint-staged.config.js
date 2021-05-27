module.exports = {
  '*.{ts,js,json,sol}': ["pretty-quick --pattern '**/*.*(js|tx|sol)' --staged"],
  '**/*.{ts,js,json}': 'pnpm run lint:js:fix',
};
