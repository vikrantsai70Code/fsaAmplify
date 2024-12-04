import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      region: import.meta.env.VITE_AWS_REGION,
      userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_AWS_USER_POOL_WEB_CLIENT_ID,
    }
  },
  API: {
    REST: {
      fafsaAPI: {
        endpoint: import.meta.env.VITE_API_ENDPOINT,
        region: import.meta.env.VITE_AWS_REGION,
      }
    }
  }
});