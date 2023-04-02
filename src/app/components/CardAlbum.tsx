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

function ratingToPercentage(rating: number): string {
    const maxRating = 10;
    const percentage = (rating / maxRating) * 100;
    return percentage.toFixed(1);
}

const CardAlbum: FC<CardAlbumProps> = ({ results }) => {
    // console.log(results);

    return (<main>
        <div className="bg-light py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {results.map((result) => (

                        (result.backdrop_path || result.poster_path) && (
                            <div key={result.id}  className="col">

                                <div className="card shadow-sm">

                                    <Link href={`/movie/${result.id}`} className='stretched-link'>
                                        <Image className='img-fluid rounded-top' src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt='backdrop' width={420} height={214} />
                                        {/* <img
                                            className='img-fluid rounded-top'
                                            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                                            alt='backdrop' /> */}
                                    </Link>
                                    <div className="card-body">
                                        <h5>{result.original_title || result.title || result.name}</h5>
                                        <p className="card-text text-truncate fs-6">
                                            {result.overview}
                                        </p>

                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <small className="text-muted">
                                            {result.release_date || result.first_air_date}
                                            <i className="far fa-calendar-alt ms-xl-1" />
                                        </small>
                                        <small className="text-muted">
                                            {ratingToPercentage(result.vote_average)}
                                            <i className="far fa-percent ms-xl-1" />
                                        </small>
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