import './Nav.css';
import { IoIosSearch } from 'react-icons/io';

const Nav = () => {
	return (
		<nav className='flex justify-between pl-6 pr-6 items-center py-2 greenB'>
			<div className='w-[60px]'>
				<img src='./src/Components/assets/images/logo.png' alt='' />
			</div>
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
			<button className='blackB greenT px-4 py-1 rounded-md font-semibold'>
				Give Feedback
			</button>
		</nav>
	);
};

export default Nav;
