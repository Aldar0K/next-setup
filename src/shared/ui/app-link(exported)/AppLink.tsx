import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type AppLinkProps = LinkProps & {
  className?: string;
  activeClassName?: string;
};

export const AppLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<AppLinkProps>) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL((props.as || props.href) as string, location.href).pathname;

      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname ? `${className} ${activeClassName}` : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [asPath, isReady, props.as, props.href, activeClassName, className, computedClassName]);

  return (
    <Link className={twMerge(computedClassName)} {...props}>
      {children}
    </Link>
  );
};
