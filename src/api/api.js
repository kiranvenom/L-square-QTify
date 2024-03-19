import axios from 'axios';

const allRoutes = {
	topAlbums: 'https://qtify-backend-labs.crio.do/albums/top',
};

export async function getData(route) {
	try {
		let { data } = await axios.get(route);
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

export default allRoutes;
