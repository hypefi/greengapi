// __tests__/api.test.js
//  Remember to keep your `*.test.js` files out of your `/pages` directory!
import { createMocks } from 'node-mocks-http';
import greetingHandler from '../pages/api/greeting/[first_name]';

describe('/api/[first_name]', () => {
  test('returns a message with the specified first Name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        first_name: 'John',
      },
    });

    await greetingHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        "first_name": "Hello John !"
      }),
    );
  });
});
