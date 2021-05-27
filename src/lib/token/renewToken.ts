import { API_URL } from '@defines/index';
import saveToken from './saveToken';

const renewToken = async (accessToken: string, refreshToken: string) => {
  const { accessToken: newAccessToken, error } = await fetch(
    `${API_URL}/auth`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refreshToken }),
    },
  ).then(res => res.json());

  if (error) {
    // TODO: handle error.
    throw new Error(error.message);
  }

  await saveToken(newAccessToken);

  return newAccessToken as string;
};

export default renewToken;
