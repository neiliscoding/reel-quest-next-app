// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'
// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
import 'src/app/assets/bootstrap/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/regular.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

import CardAlbum from './components/CardAlbum'

export const dynamic = "force-dynamic"; // this is the fix for deployment with next 13 beta

const API_KEY = process.env.API_KEY;

interface HomeProps {
  searchParams?: {
    genre?: string;
  };
}

export default async function Home({ searchParams = {} }: HomeProps) {
  const genre = searchParams.genre || 'fetchTrending';
  // const res = await fetch( `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
  const queryString = `https://api.themoviedb.org/3/${genre ===
    'top-rated' ? 'movie/top_rated' : 'trending/movie/week'}?api_key=${API_KEY}`

  const res = await fetch(queryString,
    { next: { revalidate: 10000 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  // const results = data.results.slice(0, 18);
  const results = (genre === 'top-rated' || genre === 'trending'
    ? data.results.slice(0, 18) : data.results);


  // console.log(data.results);

  // data.results.shift(); // for whatever reason, the first result is empty

  return (
    <>
      <CardAlbum results={results} />
      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">Built with Nextjs 13 and Bootstrap 5 by <a href='https://neil.bss.design/'>Neil</a></p>
        </div>
      </footer>
    </>
  )
}
