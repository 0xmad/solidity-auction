import { ReactElement } from 'react';
import Head from 'next/head';

export default function Home(): ReactElement {
  return (
    <div data-testid="home-page">
      <Head>
        <title>Auction</title>
        <meta
          name="description"
          content="Auction application using Solidity contracts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Ass we can</main>
    </div>
  );
}
