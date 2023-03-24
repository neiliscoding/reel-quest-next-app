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

const API_KEY = process.env.API_KEY;

interface HomeProps {
  searchParams?: {
    genre?: string;
  };
}

export default async function Home({searchParams = {}}: HomeProps) {
  const genre = searchParams.genre || 'fetchTrending';
  // const res = await fetch( `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
  const res = await fetch( `https://api.themoviedb.org/3/${genre === 
  'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}`,
  {next: {revalidate: 10000}});

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  

  console.log(data.results);

  // data.results.shift(); // for whatever reason, the first result is empty

  return (
<>
<CardAlbum results={data.results} />
  <footer className="text-muted py-5">
    <div className="container">
      <p className="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
      <p className="mb-1">That's all folks!</p>
    </div>
  </footer>
</>
  )
}
