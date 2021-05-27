#!/usr/bin/env node

import { runCoverage } from '@openzeppelin/test-environment';

async function main() {
  await runCoverage(
    ['mocks'],
    'pnpm run build',
    './node_modules/mocha/bin/_mocha --exit --recursive "test/**/*.ts"'.split(
      ' ',
    ),
  );
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
