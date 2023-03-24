/* import type { FC } from 'react';

interface pageProps {}

const searchPage: FC<pageProps> = ({}) => {
    return (<div>searchPage</div>);
}
export default searchPage; */

import CardAlbum from "@/app/components/CardAlbum";



export default async function SearchPage({params}) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1&`);
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  // console.log(data.results);
  const results = data.results;

  return (
    <div>
      {
        results && results.length === 0 && (
          <h1>
            No results found
          </h1>
        )
      }
      <CardAlbum results={results} />
    </div>
  );
}