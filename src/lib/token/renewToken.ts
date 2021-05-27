import { API_URL } from '@defines/index';
import { fetcher } from '@lib/fetcher';
import saveToken from './saveToken';

// types
import { Tokens } from 'types/auth';

const renewToken: (
  accessToken: string,
  refreshToken: string,
) => Promise<string> = async (accessToken, refreshToken) => {
  const { accessToken: newAccessToken } = await fetcher<Tokens>(
    `${API_URL}/auth`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ refreshToken }),
    },
  );

  await saveToken(newAccessToken);

  return newAccessToken as string;
};

export default renewToken;
