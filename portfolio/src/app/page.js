import { Icon } from '@iconify/react';
import { GitHubCalendar } from 'react-github-calendar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
      <section className="flex flex-col mb-12">
        <Image quality={90} src="/BDLHeadshot.jpg" alt="Profile Picture" className="w-30 h-30 rounded mb-4" width={100} height={100}/>
        
        <h1 className="text-3xl font-bold text-primary mb-4">Braydon Lafleur</h1>
        
        <p className="text-foreground/70 text-sm mb-6 max-w-md">
          Full-Stack Developer with a passion for all things tech. Skilled in backend systems, relational databases, and cloud services. Always eager to learn and take on new challenges.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <Icon icon="logos:javascript" className='w-10 h-10' />
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
          <Icon icon="logos:nextjs-icon" className='w-10 h-10' />
          <Icon icon="material-icon-theme:jenkins" className='w-10 h-10' />
          <Icon icon="skill-icons:docker" className='w-10 h-10' />
          <Icon icon="logos:java" className='w-10 h-10' />
        </div>
        
        <Link href="/resume" className="px-3 py-1 max-w-30 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors">
        My Resume
        </Link>
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

      <section className="w-full mb-6">
        <h2 className="text-xl font-semibold text-primary mb-4 border-b">Projects</h2>
        <div className="flex flex-col gap-5">

          <div>
            <div className="flex items-center justify-between mb-1">
              <Image src="/kaika-logo.svg" alt="Kaika" width={120} height={35} className="h-7 w-auto" />
              <Link href="/projects#kaika" className="text-xs text-primary/60 hover:text-primary transition-colors">View project →</Link>
            </div>
            <p className="text-foreground/70 text-sm mb-2">Interactive knowledge-graph proof of concept — map people, ideas, and decisions as a living graph with auto-layout, real-time search, and edge labelling.</p>
            <div className="flex flex-wrap gap-2">
              <Icon icon="logos:vitejs" className='w-5 h-5' />
              <Icon icon="logos:react" className='w-5 h-5' />
              <Icon icon="logos:typescript-icon" className='w-5 h-5' />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-primary">SMPLE</h3>
              <Link href="/projects#smple" className="text-xs text-primary/60 hover:text-primary transition-colors">View project →</Link>
            </div>
            <p className="text-foreground/70 text-sm mb-2">Minimalist Android gym companion — log workouts in a notes-style format, categorized by Push/Pull/Legs, with offline-first Room cache and Supabase sync.</p>
            <div className="flex flex-wrap gap-2">
              <Icon icon="logos:android-icon" className='w-5 h-5' />
              <Icon icon="logos:kotlin-icon" className='w-5 h-5' />
              <Icon icon="logos:supabase-icon" className='w-5 h-5' />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-primary">RespAI Hub</h3>
              <Link href="/projects#respai-hub" className="text-xs text-primary/60 hover:text-primary transition-colors">View project →</Link>
            </div>
            <p className="text-foreground/70 text-sm mb-2">Lead-scoring CRM for fire department outreach — syncs FEMA datasets, scores prospects, and surfaces them in a React dashboard.</p>
            <div className="flex flex-wrap gap-2">
              <Icon icon="logos:react" className='w-5 h-5' />
              <Icon icon="logos:nodejs-icon" className='w-5 h-5' />
              <Icon icon="material-icon-theme:azure" className='w-5 h-5' />
              <Icon icon="logos:typescript-icon" className='w-5 h-5' />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-primary">CoursePilot</h3>
              <Link href="/projects#coursepilot" className="text-xs text-primary/60 hover:text-primary transition-colors">View project →</Link>
            </div>
            <p className="text-foreground/70 text-sm mb-2">Course discovery and enrollment app — React frontend, Node/Express backend, Azure SQL.</p>
            <div className="flex flex-wrap gap-2">
              <Icon icon="logos:react" className='w-5 h-5' />
              <Icon icon="logos:nodejs-icon" className='w-5 h-5' />
              <Icon icon="skill-icons:expressjs-light" className='w-5 h-5' />
              <Icon icon="material-icon-theme:azure" className='w-5 h-5' />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-primary">Nest Trading App</h3>
              <Link href="/projects#nest-trading-app" className="text-xs text-primary/60 hover:text-primary transition-colors">View project →</Link>
            </div>
            <p className="text-foreground/70 text-sm mb-2">Stock trading app with real-time data, watchlists, and portfolio tracking — built in C#/.NET with Supabase auth.</p>
            <div className="flex flex-wrap gap-2">
              <Icon icon="logos:c-sharp" className='w-5 h-5' />
              <Icon icon="logos:dotnet" className='w-5 h-5' />
              <Icon icon="logos:supabase-icon" className='w-5 h-5' />
              <Icon icon="logos:figma" className='w-5 h-5' />
            </div>
          </div>

        </div>
      </section>
            
    </div>
  );
}
