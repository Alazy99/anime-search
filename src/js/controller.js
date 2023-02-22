import * as model from './model.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

const controlSearchResults = async function () {
	try {
		const query = searchView.getQuery();
		if (!query) return;

		await model.loadAnimeResults(query);

		console.log(model.state.search.results);
		resultsView.render(model.state.search.results);
	} catch (err) {
		console.error(err);
	}
};

const controlPagination = function () {
	resultsView.render(model.getSearchResultsPage());
};

const init = function () {
	searchView.addHandlerSearch(controlSearchResults);
};
init();
