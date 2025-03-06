'use server'

import { accessTokenName, tenantName } from '@/core/constants';
import { cookies } from 'next/headers';

// Server action to get the logged user access token from the cookies.
export async function getAccessToken() {
  return (await cookies()).get(accessTokenName);
}

// Server action to set the logged user access token as a cookie.
export async function setAccessToken(token: string) {
  (await cookies()).set(accessTokenName, token);
}

// Server action to remove the logged user access token cookie.
export async function deleteAccessToken() {
  (await cookies()).delete(accessTokenName);
}

// Server action to get the tenant id from the cookies.
export async function getTenantId() {
  return (await cookies()).get(tenantName);
}

// Server action to set the tenant id as a cookies.
export async function setTenantId(tenantId: string) {
  (await cookies()).set(tenantName, tenantId);
}