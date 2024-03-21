import axios from 'axios';

const allRoutes = {
	topAlbums: 'https://qtify-backend-labs.crio.do/albums/top',
	newAlbums: 'https://qtify-backend-labs.crio.do/albums/new',
	songs: 'https://qtify-backend-labs.crio.do/songs',
	genres: 'https://qtify-backend-labs.crio.do/genres',
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
