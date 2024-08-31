import { testDatabaseConnection } from '@/app/actions';
import Link from 'next/link';

import {CUSTOMERS} from '@/data/mocks';
import styles from './page.module.scss';

export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main className={styles.main}>
        <h1>Welcome to APP MTO Site</h1>
        {CUSTOMERS.map((customer) => (
          <div key={customer.id} className={styles.card}>
            <Link href={`/${customer.id}`}>
              {customer.name}
            </Link>
          </div>
        ))}
    </main>
  );
}
