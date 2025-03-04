import { Tenant } from '@/domain/tenant/types';

// The API Url should be received from a environment variable or similar.
export const APIUrl = 'http://localhost:4000/';

export const accessTokenName = 'facto-expense-access-token';
export const tenantName = 'facto-expense-tenant';

// Tenants list may not be available for everyone.
// I decided to define a hardcoded list to allow a faster development. 
export const tenants: Tenant[] = [
  {
    id: '1',
    name: 'Agència de viatges l\'espardenya',
    logo: 'https://picsum.photos/id/17/250/200' 
  },
  {
    id: '2',
    name: 'Rodamons',
    logo: 'https://picsum.photos/id/15/250/200'
  },
  {
    id: '3',
    name: 'Centre excursionista',
    logo: 'https://picsum.photos/id/28/250/200'
  }
];