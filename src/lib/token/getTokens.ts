import { getSecureValue } from '@utils/keycahin';

// types
import { Tokens } from 'types/auth';

const getTokens: () => Promise<Tokens> = async () => {
  const accessToken = await getSecureValue('@accessToken');
  const refreshToken = await getSecureValue('@refreshToken');

  if (!accessToken || !refreshToken) {
    throw new Error('No stored tokens.');
  }

  return { accessToken, refreshToken };
};

export default getTokens;
