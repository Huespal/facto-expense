import { getAccessToken } from '@/app/actions';
import { api } from '@/core/api';
import { parseToken } from '@/core/helpers';

// The method to request the logged user data from the API in server side.
// Logged user id is obtained from the access token cookie.
export const getUserMe = async () => {
  const token = (await getAccessToken())?.value;
  if (token) {
    const userId = parseToken(token);
    return await api(`user/${userId}`, 'GET', undefined, true);
  }
  return { data: undefined };
}