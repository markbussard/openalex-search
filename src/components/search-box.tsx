'use client';
import { useQueryParams } from '@/hooks';
import { TextInput } from './text-input';
import { SearchQueryParams } from '@/types';
import { useCallback } from 'react';

export const SearchBox = () => {
  const { queryParams, setQueryParams } = useQueryParams<SearchQueryParams>();

  const handleSubmit = useCallback(
    (value: string) => {
      setQueryParams({ q: value });
    },
    [setQueryParams]
  );

  return (
    <TextInput
      key={queryParams.q}
      defaultValue={queryParams.q}
      placeholder="Search by keyword"
      className="max-w-3xl w-9/12 mb-8"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSubmit(e.currentTarget.value);
        }
      }}
    />
  );
};
