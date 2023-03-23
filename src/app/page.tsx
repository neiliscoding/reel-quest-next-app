import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
  <header>
    <nav className="navbar navbar-dark navbar-expand-md bg-primary shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-1" href="#">
          <i className="fas fa-film" />
          <strong>ReelQuest</strong>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Top Rated
              </a>
            </li>
          </ul>
          <div className="ms-auto">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary text-bg-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div className="bg-light album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
                <h4>Movie Title</h4>
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
                <h4>Movie Title</h4>
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
                    <i className="far fa-heart ms-xl-1" />
                  </small>
                </div>
              </div>
            </div>
          </div>
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
                <h4>Movie Title</h4>
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
                    <i className="far fa-heart ms-xl-1" />
                  </small>
                </div>
              </div>
            </div>
          </div>
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
                <h4>Movie Title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      Hide
                    </button>
                  </div>
                  <small className="text-muted">
                    4685
                    <i className="far fa-heart ms-xl-1" />
                  </small>
                </div>
              </div>
            </div>
          </div>
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
                <h4>Movie Title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
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
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
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
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
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
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
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
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
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
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
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
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
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
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
