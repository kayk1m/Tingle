import Keychain from 'react-native-keychain';

export const setSecureValue: (key: string, value: string) => Promise<boolean> =
  async (key, value) => {
    const result = await Keychain.setGenericPassword(key, value, {
      service: key,
    });

    return Boolean(result);
  };

export const getSecureValue: (key: string) => Promise<string | false> =
  async key => {
    const result = await Keychain.getGenericPassword({ service: key });

    return result ? result.password : false;
  };

export const removeSecureValue: (key: string) => Promise<boolean> = key => {
  return Keychain.resetGenericPassword({ service: key });
};
