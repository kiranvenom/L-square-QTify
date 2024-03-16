import { IoIosSearch } from 'react-icons/io';

const Search = () => {
	return (
		<div className='flex items-center'>
			<input
				className='w-[40vw] border border-black p-2 rounded-tl-lg rounded-bl-lg border-r-none'
				type='text'
				name='search'
				id='search'
				placeholder='search a album of your choice'
			/>
			<IoIosSearch
				size={41}
				className='whiteB p-2 border border-[black] rounded-tr-lg rounded-br-lg border-r-none w-[60px]'
			/>
		</div>
	);
};

export default Search;
