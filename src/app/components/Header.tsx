import type { FC } from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';



interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
        return (  <header>
            <nav className="navbar navbar-dark navbar-expand-md bg-primary shadow-sm">
              <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center gap-1" href="/">
                  <i className="fas fa-film" />
                  <strong>ReelQuest</strong>
                </Link>
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
                    <MenuItem title={'Trending'} path={'/trending'} />
                    <MenuItem title={'Top Rated'} path={'/top-rated'} />
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
          </header>);
}
export default Header;