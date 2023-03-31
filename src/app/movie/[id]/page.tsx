// import type { FC } from 'react';

const API_KEY = process.env.API_KEY;

interface pageProps {
  params: {
    id: string,
  }
  searchParams: {};
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
        <h2>{result.original_title}</h2>
        <h6>{result.overview}</h6>
        <img className="img-fluid rounded"  src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt='backdrop'  />
        </div></div></main>);

}