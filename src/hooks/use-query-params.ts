'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useQueryParams = <T = {}>() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = Object.fromEntries(searchParams.entries()) as Partial<T>;

  const setQueryParams = useCallback(
    (queryParams: Partial<T>) => {
      const urlSearchParams = new URLSearchParams(
        Array.from(searchParams.entries())
      );
      Object.entries(queryParams).forEach(([key, value]) => {
        urlSearchParams.set(key, value as string);
      });

      const searchParamsStringified = urlSearchParams.toString();
      const query = searchParamsStringified
        ? `?${searchParamsStringified}`
        : '';

      router.push(`${pathname}${query}`);
    },
    [pathname, router, searchParams]
  );

  return { queryParams, setQueryParams };
};
