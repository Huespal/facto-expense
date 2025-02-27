'use client'

import { deleteAccessToken } from '@/app/actions';
import Button from '@/components/Button';
import { HeaderStyled } from '@/components/Header/styles';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  isAuthorized: boolean;
}

const Header = ({ isAuthorized }: HeaderProps) => {
  const router = useRouter();

  console.log('isAuthorized: ', isAuthorized);

  const logout = () => {
    deleteAccessToken();
    router.push('/login');
  }

  return (
    <HeaderStyled>
      <h4>Facto Expense</h4>
      {isAuthorized && <Button onClick={logout}>Log out</Button>}
    </HeaderStyled>
  );
}

export default Header;