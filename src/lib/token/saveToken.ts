import { setSecureValue } from '@utils/keycahin';

const saveToken = async (accessToken: string, refreshToken?: string) => {
  await setSecureValue('@accessToken', accessToken);

  if (refreshToken) {
    await setSecureValue('@refreshToken', refreshToken);
  }
};

export default saveToken;
