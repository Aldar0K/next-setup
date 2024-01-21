'use client';

import IconClose from '@/shared/assets/icons/close.svg';
import { classNames } from '@/shared/lib';
import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import cls from './Modal.module.scss';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  className?: string;
};

export const Modal: FC<ModalProps> = props => {
  const { children, isOpen, onClose, title, description, className } = props;

  return (
    <Transition as={Fragment} appear show={isOpen}>
      <Dialog
        as='div'
        onClose={onClose}
        className={classNames(cls.container, {}, [])}
        data-testid='Modal'
      >
        <Transition.Child
          as={Fragment}
          enter={cls.enter}
          enterFrom={cls.enterFrom}
          enterTo={cls.enterTo}
          leave={cls.leave}
          leaveFrom={cls.leaveFrom}
          leaveTo={cls.leaveTo}
        >
          <div className={cls.backdrop} aria-hidden='true' />
        </Transition.Child>

        <div className={cls['panel-wrapper']}>
          <div className={cls['panel-container']}>
            <Transition.Child
              as={Fragment}
              enter={cls.enter}
              enterFrom={cls.enterFrom}
              enterTo={cls.enterTo}
              leave={cls.leave}
              leaveFrom={cls.leaveFrom}
              leaveTo={cls.leaveTo}
            >
              <Dialog.Panel className={classNames(cls.panel, {}, [className])}>
                {title && (
                  <Dialog.Title as='h3' title={title} className={cls.title}>
                    {title}
                  </Dialog.Title>
                )}

                {description && (
                  <Dialog.Description title={description} className={cls.description}>
                    {description}
                  </Dialog.Description>
                )}

                {children}

                <button onClick={onClose} className={cls['button-close']}>
                  <IconClose className={cls['icon-close']} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
