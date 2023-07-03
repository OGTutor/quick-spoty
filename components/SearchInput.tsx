'use client';

import { useRouter } from 'next/navigation';
import queryString from 'query-string';
import { FC, useEffect, useState } from 'react';

import useDebounce from '@/hooks/useDebounce';

import Input from './Input';

const SearchInput: FC = () => {
	const router = useRouter();
	const [value, setValue] = useState<string>('');
	const debouncedValue = useDebounce<string>(value, 500);

	useEffect(() => {
		const query = {
			title: debouncedValue,
		};

		const url = queryString.stringifyUrl({
			url: '/search',
			query: query,
		});

		router.push(url);
	}, [router, debouncedValue]);

	return (
		<Input
			placeholder="What do you want to listen to?"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export default SearchInput;
