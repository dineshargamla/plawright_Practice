import { test, expect } from '@playwright/test';
exports.GitHubUIAPI = class GitHubUIAPI {
  constructor(page) {
    this.page = page;
  }
  launchingGitHubUIAPIWebsite = async (page, baseURL) => {
    await page.goto(baseURL);
  };
};
