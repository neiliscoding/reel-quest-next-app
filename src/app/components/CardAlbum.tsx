import type { FC } from 'react';

interface CardAlbumProps {
    results: Array<CardItem>;
}

interface CardItem {
    original_title: string;
}

const CardAlbum: FC<CardAlbumProps> = ({results}) => {
        return (  <main>
                        <div className="bg-light album py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {results.map((result) => (

                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={225}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      Thumbnail
                    </svg>
                    <div className="card-body">
                      <h4>{result.original_title}</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          2023
                          <i className="far fa-calendar-alt ms-xl-1" />
                        </small>
                        <small className="text-muted">
                          4685
                          <i className="far fa-heart text-secondary ms-xl-1" />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

            ))}
              </div>
            </div>
          </div>
          </main>);
}
export default CardAlbum;