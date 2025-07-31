const base = require('@playwright/test');
const { HomePage } = require('../pageObjects/HomePage');

// HomePage fixture
const test = base.test.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

module.exports = { test };
