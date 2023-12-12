import dynamic from 'next/dynamic';
import type {Metadata} from 'next';
import {Overpass} from 'next/font/google';
import './globals.css';

import LoadingScreen from '@/components/splash-screen/loading-screen';
const LoadingScreenCleanup = dynamic(
  () => import('@/components/splash-screen/loading-screen-cleanup'),
  {ssr: false}
);

// fonts
const overpass = Overpass({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'MR DEFACTO',
  description: 'Bla bla bla',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='id'>
      <body className={overpass.className}>
        {children}
        <div id='splashScreen'>
          <LoadingScreen />
          <LoadingScreenCleanup />
        </div>
        <div id='modal'></div>
      </body>
    </html>
  );
}
