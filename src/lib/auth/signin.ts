import { API_URL } from '@defines/index';
import { fetcher } from '@lib/fetcher';
import { saveToken } from '@lib/token';
import { Tokens } from 'types/auth';

interface SigninProps {
  email: string;
  password: string;
}

export async function signin({ email, password }: SigninProps): Promise<void> {
  try {
    // TODO: Needs more validations for email and password? 🤔
    if (!email) {
      throw new Error('Missing email address.');
    }
    if (!password) {
      throw new Error('Missing password.');
    }

    const { accessToken, refreshToken } = await fetcher<Tokens>(
      `${API_URL}/auth`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    await saveToken(accessToken, refreshToken);
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[signin.ts]', err);
    }
    throw new Error(`Signin failed. error: ${err.message}`);
  }
}
