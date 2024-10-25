const { test, expect } = require('@playwright/test');

var userID;
test.only('Get user', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('Create user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Dinesh',
      Job: 'QA',
    },
    headers: { Accept: 'application/json' },
  });

  console.log(await response.json());
  expect(response.status()).toBe(201);
  const res = await response.json;
  userID = res.id;
});

test('Update user', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/' + userID, {
    data: {
      name: 'Dinesh',
      Job: 'Engineer',
    },
    headers: { Accept: 'application/json' },
  });

  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test('Delete user', async ({ request }) => {
  const response = await request.delete(
    'https://reqres.in/api/users/' + userID
  );
  expect(response.status()).toBe(204);
  let tableData = page.$$('//tobody/tr');
  for (let i = 0; i < tableData.lenght; i++) {
    expect(page.locator(`//tobody/tr/td[${i}]`)).toHaveText(
      `res.data[${i}].lease.property.property_name`
    );
  }
});
