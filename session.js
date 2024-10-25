const { Page } = require('@playwright/test');
const fs = require('fs');

const storageFileLocation = 'tests/state/';

function useSession(test, filePath) {
  if (
    !filePath.startsWith(storageFileLocation) ||
    filePath.includes('..') ||
    filePath.includes(':')
  ) {
    throw new Error(
      'Session storage files must be placed in the standard storage file location.'
    );
  }
  test.use({ storageState: filePath });
}

// Log-in to WebCP and store the session cookie out for re-use.
async function saveSession(page, filePath) {
  await page.context().storageState({ path: filePath });
}

function clearSession(filePath) {
  if (
    filePath.startsWith(storageFileLocation) &&
    !filePath.includes('..') &&
    !filePath.includes(':')
  ) {
    fs.unlinkSync(filePath);
  }
}

module.exports = {
  useSession,
  saveSession,
  clearSession,
};
