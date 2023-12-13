'use client';

import {LockClosedIcon, PlayIcon} from '@radix-ui/react-icons';
import {Button} from '../ui/button';

interface Props {
  isPlayed: boolean;
  levelName: string;
  levelId: string;
}

// bg-[linear-gradient(90deg,rgba(104,251,136,0.20)53.3%,rgba(104,251,136,0.00)100%)]

export default function LevelCard({isPlayed, levelName, levelId}: Props) {
  return (
    <article
      className={`backdrop-blur-sm flex flex-col gap-4 bg-primary/20 p-3 relative ${
        !isPlayed && 'opacity-50 pointer-events-none'
      }`}
      style={{
        background:
          'linear-gradient(90deg, rgba(104, 251, 136, 0.20) 53.3%, rgba(104, 251, 136, 0.00) 100%)',
      }}
    >
      <header className='flex gap-1 items-center'>
        <h3 className='text-primary text-2xl'>{levelName}</h3>
        {!isPlayed && (
          <LockClosedIcon className='-translate-y-1 text-primary' />
        )}
      </header>

      <Button className='w-max ml-auto'>
        Play <PlayIcon />
      </Button>
    </article>
  );
}
