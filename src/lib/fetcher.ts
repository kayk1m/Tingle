import { getTokens, renewToken } from '@lib/token';

export async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  const resJson = await response.json();

  if (!response.ok) {
    throw resJson as ErrorJSON;
  }

  return resJson;
}

export async function fetcherWithToken<T>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  try {
    // Retreive tokens from keychain storage.
    const { accessToken: storedAccessToken, refreshToken } = await getTokens();

    // Renew accessToken before fetching an authorized request.
    const accessToken = await renewToken(storedAccessToken, refreshToken);

    // fetch with Authorization header (which is accessToken).
    return await fetcher<T>(url, {
      ...init,
      headers: {
        Authorization: accessToken,
        ...init?.headers,
      },
    });
  } catch (err) {
    throw new Error(err.message);
  }
}
