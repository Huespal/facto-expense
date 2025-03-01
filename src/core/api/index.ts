import { getTenantId } from '@/app/actions';
import { APIUrl } from '@/core/constants';

type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export const api = async <T,>(url: string, method: HTTPMethod, body?: T) => {
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
    return response.error ? { error: response } : { data: response };
  } catch (error) {
    return { error };
  }
}