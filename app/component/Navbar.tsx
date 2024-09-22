/* eslint-disable @next/next/no-img-element */
// components/Navbar.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
    <nav className={`navbar navbar-expand-sm  bg-light ${styles.NavBar}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="./favicon.ico" alt="icon" width={100} height={100} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className={`nav-item ${styles.a}`}>
            <a className={`nav-link`} aria-current="page" href="/">Home</a>
          </li>
          <li className={`nav-item ${styles.a}`}>
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className={`nav-item ${styles.a}`}>
            <a className="nav-link" href="#">Coding</a>
          </li>
          <li className={`nav-item ${styles.a}`}>
            <a className="nav-link" href="#">Skills</a>
          </li>
          <li className={`nav-item ${styles.a}`}>
            <a className="nav-link" href="#">Gallery</a>
          </li>
          <li className={`nav-item ${styles.a}`}>
            <a className="nav-link" href="#">Extras</a>
          </li>
          <li className={`nav-item ${styles.a}`}>
            <a className="nav-link" href="#">Contact</a>
          </li>
          

        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  </>
  );
};

export default Navbar;
