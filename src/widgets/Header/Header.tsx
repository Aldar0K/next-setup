'use client';

import { getUserAuthData, userSlice } from '@/entities/user';
import { ThemeSwitcher } from '@/features/switch-theme';
import { LoginModal } from '@/features/user/login-by-username';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button, ButtonThemes } from '@/shared/ui';
import Link from 'next/link';
import { FC, useState } from 'react';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useAppSelector(getUserAuthData);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleLogout = () => {
    dispatch(userSlice.actions.logout());
  };

  return (
    <>
      <header className='w-full flex justify-between items-center'>
        <nav className='flex gap-2'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </nav>

        {authData ? (
          <Button theme={ButtonThemes.OUTLINE} onClick={handleLogout}>
            Выйти
          </Button>
        ) : (
          <Button theme={ButtonThemes.OUTLINE} onClick={openAuthModal}>
            Войти
          </Button>
        )}

        <ThemeSwitcher />
      </header>

      <LoginModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
};
