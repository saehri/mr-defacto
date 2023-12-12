export default function LoadingScreen() {
  return (
    <section
      id='loadingScreen'
      className='fixed h-screen z-50 inset-0 bg-zinc-950'
    >
      <LoadingScreenComponent />
    </section>
  );
}

export function LoadingScreenComponent({
  spinnerVisible = true,
}: {
  spinnerVisible?: boolean;
}) {
  return (
    <div className='max-w-lg w-full h-full mx-auto relative flex flex-col items-center justify-center gap-4'>
      <div className='relative pt-[calc((133/955)*100%)] w-[min(80%,100%)] max-w-xs'>
        <img src='/game_title.webp' alt='' className='absolute inset-0' />
      </div>

      <div
        className={`scale-75 ${spinnerVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className='w-10 h-10 bg-loader-conic rounded-full relative after:absolute after:top-1/2 after:left-1/2 after:w-8 after:h-8 after:bg-zinc-950 after:rounded-full after:-translate-x-1/2 after:-translate-y-1/2 animate-reverse-spin'></div>
      </div>
    </div>
  );
}
