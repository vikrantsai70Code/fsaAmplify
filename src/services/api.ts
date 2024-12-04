import { post, get, put } from 'aws-amplify/api';
import type { FAFSAApplication } from '../types/fafsa';

export const createApplication = async (application: FAFSAApplication) => {
  try {
    const response = await post({
      apiName: 'fafsaAPI',
      path: '/applications',
      options: {
        body: application
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getApplications = async () => {
  try {
    const response = await get({
      apiName: 'fafsaAPI',
      path: '/applications'
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateApplication = async (id: string, updates: Partial<FAFSAApplication>) => {
  try {
    const response = await put({
      apiName: 'fafsaAPI',
      path: `/applications/${id}`,
      options: {
        body: updates
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};