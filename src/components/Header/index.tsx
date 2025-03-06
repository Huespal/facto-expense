'use client'

import { deleteAccessToken } from '@/app/actions';
import { HeaderStyled } from '@/components/Header/styles';
import Button from '@/components/shared/Button';
import TenantSelect from '@/components/TenantSelect';
import { tenants } from '@/core/constants';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  isAuthorized: boolean;
  tenantId?: string;
  username?: string;
}

// The component to display a page header.
// It renders different components depending on authentication.
// - User authenticated: Displays username and log out button.
// - User not authenticated: Displays the tenant selector.
const Header = ({ isAuthorized, tenantId, username = '' }: HeaderProps) => {
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
      {isAuthorized && (
        <div>
          {`${username} `}
          <Button onClick={logout}>Log out</Button>
        </div>
      )}
      {!isAuthorized && <TenantSelect initialValue={tenantId} />}
    </HeaderStyled>
  );
}

export default Header;