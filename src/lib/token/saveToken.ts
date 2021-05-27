import { setSecureValue } from '@utils/keycahin';

const saveToken: (aceessToken: string, refreshToken?: string) => Promise<void> =
  async (accessToken, refreshToken) => {
    await setSecureValue('@accessToken', accessToken);

    if (refreshToken) {
      await setSecureValue('@refreshToken', refreshToken);
    }
  };

export default saveToken;
