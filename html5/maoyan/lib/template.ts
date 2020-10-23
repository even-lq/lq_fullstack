interface SimpleMovies {
  url: string;
  grade: string;
  name: string;
}
interface MovieList {
  url: string;
  title: string;
  view_type: string;
  detail_pubilc: string;
  detail_grade: string;
  cast: string;
  cinema_show: string;
  btn: string;

  type: number;
  wanted_people: number;
  wanted_decs: string;
}

type HotMovies = (hotMovie: SimpleMovies) => string;
type MovieSituation = (movieItem: MovieList) => string;
const getMovieSimpleTemplate: HotMovies = (hotMovie) =>`
  <div class="movie-simple__item">
    <img class="movie-simple__pic" alt="我和我的家乡 宁浩"
      src="${hotMovie.url}">
    <span class="wish-bg"></span>
    <span class="score">${hotMovie.grade}</span>
    <p class="movie-simple__label">${hotMovie.name}</p>
  </div>
`
const getMovieListTemplate: MovieSituation = (movieItem) => 
    `<div class="movie-list__item">
        <img src="${movieItem.url}" alt="" class="movie-pic">
        <div class="movie-list__info">
          <div class="title">
            <p>${movieItem.title}</p>
            <img class="img" src="${movieItem.view_type}" alt="">
          </div>

          <div class="detail">
            <div class="detail-info">
              <p>${movieItem.detail_pubilc}<span>${movieItem.detail_grade}</span></p>
              <p>${movieItem.cast}</p>
              <p>${movieItem.cinema_show}</p>
            </div>
            <div class="detail-pre">
              <p><span>${movieItem.wanted_people}</span>${movieItem.wanted_decs}</p>
              <p>${movieItem.cast}</p>
              <p>${movieItem.cinema_show}</p>
            </div>
            <div class="btn">${movieItem.btn}</div>
          </div>
        </div>
      </div>`

console.log();

    

