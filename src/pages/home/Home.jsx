import Nav from '../../Components/navbar/Nav';
import Hero from '../../Components/hero/Hero';
import Section from '../../Components/section/Section';
import api from '../../api/api';

const Home = () => {
	return (
		<>
			<Nav />
			<Hero />
			<Section title='Top Albums' route={api.topAlbums} />
		</>
	);
};

export default Home;
