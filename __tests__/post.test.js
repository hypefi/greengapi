import handler from '../pages/api/create_user';
import { createRequest, createResponse } from 'node-mocks-http';

describe('/api/create_user', () => {
  test('accept POST request and send a message with the specified first Name and last Name in uppercase', async () => {
    var req = createRequest({
        method: 'POST',
        url: '/api/create_user',
        body: {
        "firstName": "john", "lastName":"boukharta"
      },
    });

    var res = createResponse();

   

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toEqual(
        "\"JOHN BOUKHARTA\""
    );
        

  });
});