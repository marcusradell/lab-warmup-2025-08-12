import { test } from 'node:test';
import assert from 'node:assert';

// Import the function to test
import Anthropic from '@anthropic-ai/sdk';

test('Anthropic SDK is properly imported', () => {
  assert.strictEqual(typeof Anthropic, 'function');
});

test('Environment variables are accessible', () => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  assert.ok(apiKey, 'ANTHROPIC_API_KEY should be defined in environment variables');
});
