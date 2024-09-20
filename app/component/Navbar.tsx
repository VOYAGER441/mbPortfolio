// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/blogs" data-text="Blogs">Blogs</Link></li>
        <li><Link href="/coding" data-text="Coding">Coding</Link></li>
        <li><Link href="/skills" data-text="Skills">Skills</Link></li>
        <li><Link href="/gallery" data-text="Gallery">Gallery</Link></li>
        <li><Link href="/extras" data-text="Extras">Extras</Link></li>
        <li><Link href="/contact" data-text="Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
