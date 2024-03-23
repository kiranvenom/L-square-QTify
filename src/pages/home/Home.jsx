import Nav from '../../Components/navbar/Nav';
import Hero from '../../Components/hero/Hero';
import Section from '../../Components/section/Section';
import Faq from '../../Components/faq/Faq';
import api from '../../api/api';

const Home = () => {
	return (
		<>
			<Nav />
			<Hero />
			<Section title='Top Albums' route={api.topAlbums} />
			<Section title='New Albums' route={api.newAlbums} />
			<Section title='Songs' route={api.songs} type={true} />
			<Faq />
		</>
	);
};

export default Home;
