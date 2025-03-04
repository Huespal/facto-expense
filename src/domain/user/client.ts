import { setAccessToken } from '@/app/actions';
import { api } from '@/core/api';
import { Credentials } from '@/domain/user/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

// The hook to request API to login a user.
// It receives a token and saves it as a browser cookie.
// Then redirects to the applicaion's home.
export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (body: Credentials) =>
      api<Credentials>('login', 'POST', body),
    onSuccess: async data => {
      if (data?.token) {
        await setAccessToken(data.token);
        router.push('/');
      }
    }
  })
}