import View from './View.js';

class ResultsView extends View {
	_parentElement = document.querySelector('.results');
	_errorMessgae = 'No anime found for your query! Please try again!';
	_message = '';

	_generateMarkup() {
		console.log(this._data);
		return this._data.map(this._generateMarkupPreview).join('');
	}

	_generateMarkupPreview(result) {
		return `
    	<li class="preview">
						<a class="preview__link preview__link--active" href="${result.id}"></a>
						<figure class="preview__fig">
							<img class="fig" src="${result.image}" />
						</figure>
						<div>
							<h4 class="txt-description">${result.title}</h4>
						</div>
					</li>
    `;
	}
}
export default new ResultsView();
