'use client';

import { FC, useEffect, useState } from 'react';
import { ProductWithPrice } from 'types';

import AuthModal from '@/components/AuthModal';
import SubscribeModal from '@/components/SubscribeModal';
import UploadModal from '@/components/UploadModal';

interface ModalProviderProps {
	products: ProductWithPrice[];
}

const ModalProvider: FC<ModalProviderProps> = ({ products }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<AuthModal />
			<SubscribeModal products={products} />
			<UploadModal />
		</>
	);
};

export default ModalProvider;
