import { deepStrictEqual } from 'assert';

describe('Basic test', () => {
  it('should assert that 0 is not deeply equal to 1', () => {
    deepStrictEqual(0 !== 1, true);
  });
});
