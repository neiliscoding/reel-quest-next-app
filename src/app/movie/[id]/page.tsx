// import type { FC } from 'react';

const API_KEY = process.env.API_KEY;

interface pageProps {
  params: {
    id: string,
  }
  searchParams: {};
}

function ratingToPercentage(rating: number): string {
  const maxRating = 10;
  const percentage = (rating / maxRating) * 100;
  return percentage.toFixed(1);
}


export default async function MoviePage(params: pageProps) {
  console.log(params);

  const movieId = params.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  console.log(url);
  let movie;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await res.json();

  console.log('result ' + result);


  return (<main>
    <div className="bg-light py-5">
      <div className="container">
        <div className="card">
          <img className="img-fluid rounded-top" src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt='backdrop' />
          <div className="card-img-overlay">
            <h5 className="card-title text-light">{result.original_title}</h5>
            <p className="card-text text-light">
              {ratingToPercentage(result.vote_average)}
              <i className="far fa-percent ms-xl-1" />
            </p>
          </div>
          <div className="card-body">
            <p className="card-text">{result.overview}</p>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <small className="text-muted">
              {result.release_date || result.first_air_date}
              <i className="far fa-calendar-alt ms-xl-1" />
            </small>
            <small className="text-muted">
              {result.vote_count}
              <i className="far fa-eye ms-xl-1" />
            </small>
            <small className="text-muted">
              {ratingToPercentage(result.vote_average)}
              <i className="far fa-percent ms-xl-1" />
            </small>
          </div>
        </div>
      </div>
    </div>
  </main>);

}