import MusicButton from '@/components/audio/music-button';
import AvatarHomepage from '@/components/avatars/avatar-homepage';
import {LevelSelector} from '@/components/dialog/level-selector';
import {Button} from '@/components/ui/button';
import {Share1Icon} from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main className='relative bg-zinc-950'>
      <section className='max-w-lg relative flex items-end z-50 mx-auto h-[min(100vh,1200px)] p-4 lg:p-0'>
        <div className='flex flex-col gap-16 items-center w-full mb-24'>
          <LevelSelector />

          <div className='flex justify-evenly w-full'>
            <Button>
              Share <Share1Icon />
            </Button>
            <Button>About us</Button>
          </div>
        </div>

        <MusicButton />
      </section>

      <section
        className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden pointer-events-none'
        aria-hidden='true'
      >
        <picture>
          <source media='(min-width: 1024px)' srcSet='/home-bg-big.webp' />
          <source media='(min-width: 768px)' srcSet='/home-bg-medium.webp' />
          <img
            src='/home-bg-small.webp'
            alt=''
            loading='lazy'
            className='absolute top-0 left-0 w-full h-full object-cover bg-no-repeat bg-cover lg:bg-[url("/home-bg-big-thumb.png") bg-[url("/home-bg-small-thumb.png")]'
          />
        </picture>

        <div className='absolute z-10 bottom-0 w-full h-[min(85%,700px)] 2xl:h-[min(85%,900px)]'>
          <AvatarHomepage />
        </div>

        <div
          className='absolute inset-0 z-30'
          style={{
            background:
              'linear-gradient(180deg, rgba(58, 30, 4, 0.00) 44.91%, rgba(1, 20, 4, 0.89) 57.56%, #000 78.51%)',
          }}
        ></div>
      </section>
    </main>
  );
}
