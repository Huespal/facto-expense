import { getTenantId } from '@/app/actions';
import { APIUrl } from '@/core/constants';

type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

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

  const data = await fetch(`${APIUrl}${url}`, {
    headers,
    method,
    body: JSON.stringify(body)
  });

  try {
    const response = await data.json();
    if (!!response.error) return { error: response };
    return isSSR ? { data: response } : response;
  } catch (error) {
    return { error };
  }
}