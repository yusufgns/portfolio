import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Project from '@/components/project';
import Stack from '@/components/stack';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex items-center justify-center w-full overflow-auto'>
      <section className='w-[480px] flex items-center justify-center flex-col space-y-16'>
        <span className='space-y-3 w-full'>
          <About />
          <Contact />
        </span>
        <span className='mt-10 space-y-16 w-full'>
          <Experience />
          <Project />
          <Stack />
        </span>
      </section>
    </main>
  );
}
