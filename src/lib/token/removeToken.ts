import { removeSecureValue } from '@utils/keycahin';

const removeToken = async () => {
  await removeSecureValue('@accessToken');
  await removeSecureValue('@refreshToken');
};

export default removeToken;
