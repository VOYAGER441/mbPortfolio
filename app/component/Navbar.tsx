/* eslint-disable @next/next/no-img-element */
// components/Navbar.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-sm   ${styles.NavBar}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./favicon.ico"
              alt="icon"
              width={100}
              height={100}
              style={{ filter: "invert(100%) brightness(2)" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item `}>
                <a
                  className={`nav-link ${styles.a}`}
                  aria-current="page"
                  href="/Portfolio"
                >
                  Home
                </a>
              </li>
              <li className={`nav-item `}>
                <a
                  className={`nav-link ${styles.a}`}
                  href="https://bitbybits.netlify.app/"
                >
                  Blog
                </a>
              </li>
              <li className={`nav-item `}>
                <a className={`nav-link ${styles.a}`} href="#">
                  Coding
                </a>
              </li>
              <li className={`nav-item `}>
                <a className={`nav-link ${styles.a}`} href="#">
                  Skills
                </a>
              </li>
              <li className={`nav-item `}>
                <a className={`nav-link ${styles.a}`} href="#">
                  Gallery
                </a>
              </li>
              <li className={`nav-item `}>
                <a className={`nav-link ${styles.a}`} href="#">
                  Extras
                </a>
              </li>
              <li className={`nav-item `}>
                <a className={`nav-link ${styles.a}`} href="#">
                  Contact
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
