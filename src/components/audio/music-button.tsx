'use client';

import {SpeakerLoudIcon, SpeakerOffIcon} from '@radix-ui/react-icons';
import {Button} from '../ui/button';
import {useState} from 'react';

export default function MusicButton() {
  const [isPlaying, setPlaying] = useState(true);

  return (
    <Button
      className='fixed top-4 right-4 gap-0 px-0 w-9 rounded-full1'
      onClick={() => setPlaying(!isPlaying)}
    >
      {isPlaying ? (
        <>
          <SpeakerLoudIcon />
          <span className='sr-only'>music on</span>
        </>
      ) : (
        <>
          <SpeakerOffIcon />
          <span className='sr-only'>music off</span>
        </>
      )}
    </Button>
  );
}
