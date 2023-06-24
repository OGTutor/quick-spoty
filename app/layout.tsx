import { Figtree } from 'next/font/google';

import Sidebar from '@/components/Sidebar';

import './globals.css';
import ModalProvider from '@/providers/ModalProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import UserProvider from '@/providers/UserProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
	title: 'Quick Spoty',
	description: 'Listen to music!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar>{children}</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
