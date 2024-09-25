
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; // Import the CSS module
import "./globals.css"; // Adjust the path as per your project structure
import "bootstrap/dist/css/bootstrap.min.css";


const HomePage: React.FC = () => {
  return (
    <div className={styles.body}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="#">
            <div
              className={styles.logo}
              style={{
                marginBottom: "-30px",
                marginTop: "-50px",
                // margin: "0px",
                // padding: "0px"
              }}
            >
              <Image src="/assets/mb.png" alt="Logo" width={200} height={200} />
            </div>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/Portfolio" data-text="Home" className={styles.a}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/Blog" data-text="Blogs" className={styles.a}>
            Blogs
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#" data-text="Coding" className={styles.a}>
            Coding
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#" data-text="Skills" className={styles.a}>
            Skills
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#" data-text="Gallery" className={styles.a}>
            Gallery
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#" data-text="Extras" className={styles.a}>
            Extras
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#" data-text="Contact" className={styles.a}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
