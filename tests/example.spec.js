const { expect } = require('@playwright/test');
const { test } = require('../fixtures/homePageFixture');

// @smoke
test('Home page has correct title', async ({ homePage }) => {
  await homePage.goto();
  await homePage.expectTitle();
});

// @tag:ignore
// This test will be skipped
test.skip('This test is ignored by @tag:ignore', async ({ homePage }) => {
  // This test will not run
  await homePage.goto();
});
