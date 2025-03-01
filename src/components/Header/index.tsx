'use client'

import { deleteAccessToken } from '@/app/actions';
import Button from '@/components/Button';
import { HeaderStyled } from '@/components/Header/styles';
import TenantSelect from '@/components/TenantSelect';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  tenantId?: string;
  isAuthorized: boolean;
}

const Header = ({ tenantId, isAuthorized }: HeaderProps) => {
  const router = useRouter();

  const logout = () => {
    deleteAccessToken();
    router.push('/login');
  }

  return (
    <HeaderStyled>
      <h4><Link href="/">Facto Expense</Link></h4>
      {isAuthorized && <Button onClick={logout}>Log out</Button>}
      {!isAuthorized && <TenantSelect initialValue={tenantId} />}
    </HeaderStyled>
  );
}

export default Header;