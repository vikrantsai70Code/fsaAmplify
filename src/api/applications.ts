const API_URL = 'http://localhost:5000/api';


export const createApplication = async (applicationData: any) => {
  const response = await fetch(`${API_URL}/applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(applicationData),
  });
  return response.json();
};


export const getApplications = async () => {
  const response = await fetch(`${API_URL}/applications`);
  return response.json();
};

export const updateApplication = async (id: string, updates: any) => {
  const response = await fetch(`${API_URL}/applications/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  return response.json();
};