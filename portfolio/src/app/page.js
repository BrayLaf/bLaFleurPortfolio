import { Icon } from '@iconify/react';
import { GitHubCalendar } from 'react-github-calendar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
      <section className="flex flex-col mb-12">
        <div className="w-20 h-20 bg-gray-300 rounded mb-4"></div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">Braydon Lafleur</h1>
        
        <p className="text-secondary text-sm mb-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet erat ac 
          pulvinar tincidunt. Nullam laoreet ac tortor ac scelerisque.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <Icon icon="material-icon-theme:azure" className='w-10 h-10' />
          <Icon icon="logos:figma" className='w-10 h-10' />
          <Icon icon="logos:c-plusplus" className='w-10 h-10' />
          <Icon icon="logos:c-sharp" className='w-10 h-10' />
          <Icon icon="logos:dotnet" className='w-10 h-10' />
          <Icon icon="logos:nodejs-icon" className='w-10 h-10' />
          <Icon icon="logos:linux-tux" className='w-10 h-10' />
          <Icon icon="skill-icons:expressjs-light" className='w-10 h-10' />
          <Icon icon="devicon-plain:bash" className='w-10 h-10' />
          <Icon icon="logos:git-icon" className='w-10 h-10' />
          <Icon icon="logos:github-icon" className='w-10 h-10' />
          <Icon icon="logos:postman-icon" className='w-10 h-10' />
          <Icon icon="logos:supabase-icon" className='w-10 h-10' />
          <Icon icon="logos:react" className='w-10 h-10' />
        </div>
        
        <Link href="/resume"><button className="px-3 py-1 max-w-30 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors">
          My Resume
        </button></Link>
      </section>
      
      <section className="w-full mb-12 overflow-x-auto">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">GitHub Activity</h2>
        <div className="flex justify-center">
          <GitHubCalendar
            username="BrayLaf"
            blockSize={8}
            blockMargin={2}
          />
        </div>
      </section>
      
      <section className="w-full mb-12">
        <div className="mb-2">
          <h2 className="text-xl font-semibold text-primary mb-2 border-b">Project 1</h2>
        </div>
        <button className="px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Repo Link</button>
        <p className="text-secondary text-sm mb-4 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet erat ac 
          pulvinar tincidunt. Nullam laoreet ac tortor ac scelerisque.
        </p>
        <div className="flex gap-4">
          <div className="flex-1 h-32 bg-gray-300 rounded"></div>
          <div className="flex-1 h-32 bg-gray-300 rounded"></div>
        </div>
      </section>

      <section className="w-full mb-5">
        <div className="mb-2">
          <h2 className="text-xl font-semibold text-primary mb-2 border-b">Project 2</h2>
        </div>
        <button className="px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Repo Link</button>
        <p className="text-secondary text-sm mb-4 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet erat ac 
          pulvinar tincidunt. Nullam laoreet ac tortor ac scelerisque.
        </p>
        <div className="flex gap-4">
          <div className="flex-1 h-32 bg-gray-300 rounded"></div>
          <div className="flex-1 h-32 bg-gray-300 rounded"></div>
        </div>
      </section>
    </div>
  );
}
