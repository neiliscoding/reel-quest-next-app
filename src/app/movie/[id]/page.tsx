import type { FC } from 'react';

interface pageProps {
  id: string;
}

const page: FC<pageProps> = (params) => {
  const movieId = params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api-key=${process.env.API_KEY}&language=en-US`;
  let movie;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      movie = data;
    })
    .catch(error => {
      console.error(error);
    });
  return (<div>
    <h2>Movie</h2>
  </div>);
}
export default page;