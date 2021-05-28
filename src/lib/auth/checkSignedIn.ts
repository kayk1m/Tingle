import { getTokens } from '@lib/token';

export async function checkSignedIn(): Promise<boolean> {
  try {
    await getTokens();

    return true;
  } catch {
    return false;
  }
}
