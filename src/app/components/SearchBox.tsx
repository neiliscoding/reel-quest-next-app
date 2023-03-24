"use client"

import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

interface SearchBoxProps {}

const SearchBox: FC<SearchBoxProps> = ({}) => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    // console.log(search);
  }
    return ( 
    <form onSubmit={handleSubmit}>
    <div className="input-group">
    <input
    onChange={(e) => setSearch(e.target.value)}
    value={search}
      className="form-control"
      type="text"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2"
    />
    <button
      className="btn btn-outline-secondary text-bg-secondary"
      type="submit"
      id="button-addon2"
    >
      <i className="fas fa-search" />
    </button>
  </div>
  </form>);
}
export default SearchBox;