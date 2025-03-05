'use client'

import { deleteAccessToken } from '@/app/actions';
import Button from '@/components/Button';
import { HeaderStyled } from '@/components/Header/styles';
import TenantSelect from '@/components/TenantSelect';
import { tenants } from '@/core/constants';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  tenantId?: string;
  isAuthorized: boolean;
}

const Header = ({ tenantId, isAuthorized }: HeaderProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const tenant = tenants.find(tenant => tenant.id === tenantId);

  const logout = () => {
    deleteAccessToken();
    queryClient.removeQueries();
    router.push('/login');
  }

  return (
    <HeaderStyled>
      <h4><Link href="/">Facto Expense - {tenant?.name}</Link></h4>
      {isAuthorized && <Button onClick={logout}>Log out</Button>}
      {!isAuthorized && <TenantSelect initialValue={tenantId} />}
    </HeaderStyled>
  );
}

export default Header;