const searchForm = document.querySelector('#search-form');
const movie = document.querySelector('#movies');

function apiSearch(event) {
      event.preventDefault();
      const searchText = document.querySelector('.form-control').value;
      const server = 'https://api.themoviedb.org/3/search/multi?api_key=ead41c3eaac089640f31601bd088ab4e&language=ru&query=' + searchText;
      requestApi(server);
}