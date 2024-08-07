// netlify/functions/webhook.js
exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    const params = event.queryStringParameters;
    const VERIFY_TOKEN = 'IGQWRPSExmQkpjQ0ViS0VpUU9zU3phekhxM3JrUE14MnpPSUR5cU12MDBQc2wtWnhEREFLZAUhqVzV3SEhMT0tBMEF2akZAzcHk3T0lJbEZAWM3VMa3hybHVoMGkxSm5yek0zM3RLWjQzMkxoZAXpsdlZAJYlNLS2N0bkEZD';

    if (params['hub.verify_token'] === VERIFY_TOKEN) {
      return {
        statusCode: 200,
        body: params['hub.challenge'],
      };
    } else {
      return {
        statusCode: 403,
        body: 'Verification token mismatch',
      };
    }
  } else if (event.httpMethod === 'POST') {
    const data = JSON.parse(event.body);
    console.log('Webhook received:', data);
    // Process the incoming webhook data

    return {
      statusCode: 200,
      body: 'OK',
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};
