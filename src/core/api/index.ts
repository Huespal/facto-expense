import { deleteAccessToken, getAccessToken, getTenantId } from '@/app/actions';
import { APIUrl } from '@/core/constants';

type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

const isPublicEndpoint = (url: string) => url === 'login';

export const logout = async () => {
  deleteAccessToken();
  window.location.replace(`${window.location.origin}/login`);
};

const throwError = (error: unknown) => {
  throw new Error(JSON.stringify(error));
}

// Shared helper to connect to api.
// Configures fetch, requests data and performs basic error handling.
export const api = async <T,>(
  url: string, method: HTTPMethod, body?: T, isSSR = false
) => {
  const tenantId = (await getTenantId())?.value ?? '';

  const headers: [string, string][] = [
    ['x-tenant-id', tenantId],
    ['accept', 'application/json'],
    ['content-type', 'application/json']
  ];

  if (!isPublicEndpoint(url)) {
    const token = (await getAccessToken())?.value ?? '';
    headers.push(['authorization', `Bearer ${token}`]);
  }

  const data = await fetch(`${APIUrl}${url}`, {
    headers,
    method,
    body: JSON.stringify(body)
  });
  const isUnauthorized = data?.status === 401;

  try {
    const response = await data.json();

    if (isUnauthorized && !isPublicEndpoint(url)) {
      if (isSSR) {
        return { data: undefined, error: response.error };
      } else {
        await logout();
      }
    } else if (!!response.error) {
      throwError(response.error);
    } else {
      return isSSR ? { data: response } : response;
    }
  } catch (error) {
    throwError(error);
  }
}