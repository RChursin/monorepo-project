import { test, expect } from '@playwright/test';

// Add a simple log to test version bump
test('basic test', async ({ page }) => {
  console.log('Testing Lerna version');
  await page.goto('https://example.com');
  expect(page.url()).toBe('https://example.com');
});
