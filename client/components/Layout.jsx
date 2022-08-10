import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>UniStore</title>
      </Head>
      <main className="w-full">
        <Navbar />
        <>{children}</>
      </main>
    </>
  );
}
