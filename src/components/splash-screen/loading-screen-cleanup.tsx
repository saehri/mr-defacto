'use client';

import {motion} from 'framer-motion';
import {useEffect} from 'react';
import {LoadingScreenComponent} from './loading-screen';

export default function LoadingScreenCleanup() {
  useEffect(() => {
    function removeLoadingScreen() {
      document.getElementById('loadingScreen')?.remove();
    }

    removeLoadingScreen();
  }, []);

  return (
    <motion.section
      animate={{
        y: '-100%',
        opacity: 0,
        transition: {
          delay: 0.5,
          type: 'spring',
          ease: [0.35, 0.64, 0.67, 0.88],
          duration: 1,
        },
      }}
      className='fixed h-screen z-50 inset-0 bg-zinc-950'
    >
      <LoadingScreenComponent spinnerVisible={false} />
    </motion.section>
  );
}
