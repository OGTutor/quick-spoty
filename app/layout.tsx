import { Figtree } from 'next/font/google';

import Sidebar from '@/components/Sidebar';

import './globals.css';
import getSongsByUserId from '@/actions/getSongsByUserId';
import ModalProvider from '@/providers/ModalProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import UserProvider from '@/providers/UserProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
	title: 'Quick Spoty',
	description: 'Listen to music!',
};

export const revalidate = 0;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const userSongs = await getSongsByUserId();

	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar songs={userSongs}>{children}</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
