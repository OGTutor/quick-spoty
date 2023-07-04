'use client';

import { FC } from 'react';
import { Song } from 'types';

import LikeButton from '@/components/LikeButton';
import MediaItem from '@/components/MediaItem';

interface SearchContentProps {
	songs: Song[];
}

const SearchContent: FC<SearchContentProps> = ({ songs }) => {
	if (songs.length === 0) {
		return (
			<div className="flex flex-col gap-y-2">
				<h1 className="px-6 text-white text-3xl font-semibold">
					No Results
				</h1>
				<div className="w-full px-6 text-neutral-400">
					Try a new search.
				</div>
			</div>
		);
	}

	return (
		<div
			className="flex flex-col gap-y-2
			w-full px-6"
		>
			{songs.map((song) => (
				<div
					key={song.id}
					className="flex items-center 
					gap-x-4 w-full"
				>
					<div className="flex-1">
						<MediaItem onClick={() => {}} data={song} />
					</div>
					<LikeButton songId={song.id} />
				</div>
			))}
		</div>
	);
};

export default SearchContent;
