'use server'

import { accessTokenName, tenantName } from '@/core/constants';
import { cookies } from 'next/headers';

export async function getAccessToken() {
  return (await cookies()).get(accessTokenName);
}

export async function setAccessToken(token: string) {
  (await cookies()).set(accessTokenName, token);
}

export async function deleteAccessToken() {
  (await cookies()).delete(accessTokenName);
}


export async function getTenantId() {
  return (await cookies()).get(tenantName);
}

export async function setTenantId(tenantId: string) {
  (await cookies()).set(tenantName, tenantId);
}