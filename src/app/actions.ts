'use server'

import { accessTokenName } from '@/core/constants';
import { cookies } from 'next/headers';

export async function getAccessToken() {
  (await cookies()).get(accessTokenName);
}

export async function setAccessToken(token: string) {
  (await cookies()).set(accessTokenName, token);
}

export async function deleteAccessToken() {
  (await cookies()).delete(accessTokenName);
}