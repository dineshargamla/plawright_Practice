import { test, expect } from '@playwright/test';
const { githubUIAPIPage } = require('../pages/githubUIAPI');
test('validating Github UI and API', async ({ page }) => {
  await launchingGitHubUIAPIWebsite(page, process.env.GIT_HUB_UI_API_URL);
});
