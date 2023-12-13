'use client';

import {motion} from 'framer-motion';
import {useEffect, useRef} from 'react';

const VIDEO_URL =
  'https://utfs.io/f/0d581089-f617-4e0b-86cb-caba56c9b4eb-taqn7u.webm';

export default function AvatarHomepage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
          transition: {
            duration: 1,
            delay: 1.8,
            repeat: Infinity,
            repeatDelay: 10,
          },
        }}
      >
        <img
          className='w-[min(80%,512px)] mx-auto object-cover'
          src='/game_title.webp'
          alt=''
        />
      </motion.div>

      <motion.div
        initial={{y: 200, opacity: 0}}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 1,
            ease: [0.35, 0.64, 0.67, 0.88],
            type: 'spring',
          },
        }}
        className='w-full mx-auto relative max-w-sm'
      >
        <video
          ref={videoRef}
          controls={false}
          autoPlay
          loop
          muted
          playsInline
          className='w-full absolute -top-10 left-0 xl:-top-16'
        >
          <source src={VIDEO_URL} type='video/webm' />
        </video>
      </motion.div>
    </>
  );
}
