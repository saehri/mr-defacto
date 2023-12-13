'use client';

import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {PlayIcon} from '@radix-ui/react-icons';
import LevelCard from '../cards/level-card';

export function LevelSelector() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-max'>
          Play Game <PlayIcon />
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-lg bg-transparent border-none shadow-none'>
        <DialogHeader>
          <DialogTitle className='text-primary'>Select Level</DialogTitle>
        </DialogHeader>

        <div className='grid gap-2 py-4 max-h-96 overflow-y-auto'>
          <LevelCard isPlayed levelId='1' levelName='LEVEL 1' />
          <LevelCard isPlayed={false} levelId='1' levelName='LEVEL 2' />
          <LevelCard isPlayed={false} levelId='1' levelName='LEVEL 3' />
          <LevelCard isPlayed={false} levelId='1' levelName='LEVEL 4' />
          <LevelCard isPlayed={false} levelId='1' levelName='LEVEL 5' />
        </div>
      </DialogContent>
    </Dialog>
  );
}
