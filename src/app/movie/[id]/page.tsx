import type { FC } from 'react';

const API_KEY = process.env.API_KEY;

interface pageProps {
  params: {
    id: string,
  }
  searchParams: {};
}

const page: FC<pageProps> = (params) => {
  console.log(params);
  
  const movieId = params.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  console.log(url);
  let movie

  fetch(url)
    .then(response => response.json())
    .then(data => {
      movie = data;
      console.log(movie);
      return (<div>{movie}</div>);
    })
    .catch(error => {
      console.error(error);
      return (<div>error</div>);
    });
  
    return (<div>nothing</div>);
  // return (<div>{
  //     movie? ( <div>{movie}</div>) : (<div>Loading...</div>)
  //   }</div>);
}
export default page;