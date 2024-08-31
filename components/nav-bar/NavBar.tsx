import Link from 'next/link';
import React from 'react';

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link href="/">Home</Link>
    </nav>
  )
}

export default NavBar;