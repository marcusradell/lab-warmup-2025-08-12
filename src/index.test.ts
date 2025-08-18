import { deepStrictEqual } from 'assert';
import { test, describe } from 'node:test';

describe('Basic test', () => {
  test('should assert that 0 is not deeply equal to 1', () => {
    deepStrictEqual(0 !== 1, true);
  });
});
