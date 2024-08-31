import Image from 'next/image';
import { testDatabaseConnection } from '@/app/actions';
import Link from 'next/link';

import Navbar from '@/components/nav-bar/NavBar';
import styles from './page.module.scss';

export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}
