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

  const data = await res.json();
  
  console.log('data ' + data);


/*   fetch(url)
    .then(response => response.json())
    .then(data => {
      movie = data;
      console.log(movie);
      // return (<div>{movie}</div>);
    })
    .catch(error => {
      console.error(error);
      // return (<div>error</div>);
    });
   */

          return (<div>
            <h2>{data.original_title}</h2><h3>{data.overview}</h3></div>);

    // return (<div>nothing</div>);
  // return (<div>{
  //     movie? ( <div>{movie}</div>) : (<div>Loading...</div>)
  //   }</div>);
}
// export default page;