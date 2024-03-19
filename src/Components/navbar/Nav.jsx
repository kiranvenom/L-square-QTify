import Logo from '../logo/Logo';
import FeedBack from '../feedback/FeedBack';
import Search from '../search/Search';

const Nav = () => {
	return (
		<nav className='flex justify-between pl-6 pr-6 items-center py-2 greenB'>
			<Logo />
			<Search />
			<FeedBack />
		</nav>
	);
};

export default Nav;
