import { getTokens, renewToken } from '@lib/token';

/**
 * @deprecated use useAuth instead
 */
export async function checkSignedIn(): Promise<boolean> {
  try {
    const { accessToken, refreshToken } = await getTokens();
    await renewToken(accessToken, refreshToken);

    return true;
  } catch {
    return false;
  }
}
