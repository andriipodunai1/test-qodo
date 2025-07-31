const { expect } = require('@playwright/test');

class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = 'https://playwright.dev/';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async expectTitle() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }
}

module.exports = { HomePage };
