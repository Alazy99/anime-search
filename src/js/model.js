import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
	search: {
		query: '',
		results: [],
		pages: {},
	},
};

export const loadAnimeResults = async function (query) {
	try {
		state.search.query = query;

		const data = await getJSON(`${API_URL}?q=${query}/sfw`);
		console.log(data);

		state.search.results = data.data.map((ani) => {
			return {
				id: ani.mal_id,
				image: ani.images.jpg.image_url,
				title: ani.title,
			};
		});
		console.log(state.search.results);
	} catch (err) {
		console.error(`${err}🚨`);
	}
};

export const getSearchResultsPage = async function (query) {
	try {
		state.search.query = query;
		const data = await getJSON(`${API_URL}?q=${query}/sfw`);

		state.search.pages = data.pagination;
		console.log(state.search.pages);
	} catch (err) {
		console.error(err);
	}
};
getSearchResultsPage();
