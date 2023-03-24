import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';

interface CardAlbumProps {
    results: Array<Movie>;
}

interface Movie {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
}

const CardAlbum: FC<CardAlbumProps> = ({ results }) => {
    console.log(results);

    return (<main>
        <div className="bg-light album py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {results.map((result) => (

                            (result.backdrop_path || result.poster_path) && (
                                <div className="col">

                                    <div className="card shadow-sm">
                                        <img src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt='backdrop' width="100%" height="225" />

                                        {/* <Link href={`/movie/${result.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt='backdrop' width="100%" height="225" />
                                </Link> */}
                                        <div className="card-body">
                                            <h5>{result.original_title || result.title || result.name}</h5>
                                            <p className="card-text text-truncate fs-6">
                                                {result.overview}
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">
                                                    {result.release_date || result.first_air_date}
                                                    <i className="far fa-calendar-alt ms-xl-1" />
                                                </small>
                                                <small className="text-muted">
                                                    {result.popularity}
                                                    <i className="far fa-heart text-secondary ms-xl-1" />
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )


                    ))}
                </div>
            </div>
        </div>
    </main>);
}
export default CardAlbum;