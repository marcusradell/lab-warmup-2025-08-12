import { deepStrictEqual } from 'assert';
import { test } from 'node:test';

test('should assert that 0 is not deeply equal to 1', () => {
  deepStrictEqual(0 !== 1, true);
});
