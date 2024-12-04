import { signIn as amplifySignIn, signUp as amplifySignUp, confirmSignUp as amplifyConfirmSignUp, signOut as amplifySignOut, getCurrentUser as amplifyGetCurrentUser } from 'aws-amplify/auth';

export const signIn = async (username: string, password: string) => {
  try {
    const { isSignedIn, nextStep } = await amplifySignIn({ username, password });
    return { isSignedIn, nextStep };
  } catch (error) {
    throw error;
  }
};

export const signUp = async (username: string, password: string, email: string) => {
  try {
    const { isSignUpComplete, userId, nextStep } = await amplifySignUp({
      username,
      password,
      options: {
        userAttributes: {
          email
        }
      }
    });
    return { isSignUpComplete, userId, nextStep };
  } catch (error) {
    throw error;
  }
};

export const confirmSignUp = async (username: string, code: string) => {
  try {
    const { isSignUpComplete } = await amplifyConfirmSignUp({
      username,
      confirmationCode: code
    });
    return isSignUpComplete;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await amplifySignOut();
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await amplifyGetCurrentUser();
    return user;
  } catch (error) {
    throw error;
  }
};