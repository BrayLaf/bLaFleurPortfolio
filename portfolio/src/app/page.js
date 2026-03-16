import { Icon } from '@iconify/react';
import { GitHubCalendar } from 'react-github-calendar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
      <section className="flex flex-col mb-12">
        <Image quality={90} src="/braydonLafImg.JPG" alt="Profile Picture" className="w-20 h-20 rounded mb-4" width={80} height={80}/>
        
        <h1 className="text-3xl font-bold text-primary mb-4">Braydon Lafleur</h1>
        
        <p className="text-secondary text-sm mb-6 max-w-md">
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
        
        <button className="px-3 py-1 max-w-30 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors">
          <Link href="/resume">My Resume</Link>
        </button>
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

      {/* resp ai hub, course pilot */}
       <section className="w-full mb-12">
                <div className="mb-2">
                    <h1 className="text-3xl font-semibold text-primary mb-2 border-b">RespAI Hub
                    </h1>
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                    <Icon icon="logos:javascript" className='w-7 h-7' />
                    <Icon icon="material-icon-theme:azure" className='w-7 h-7' />
                    <Icon icon="logos:figma" className='w-7 h-7' />
                    <Icon icon="logos:nodejs-icon" className='w-7 h-7' />
                    <Icon icon="logos:vitejs" className='w-7 h-7' />
                    <Icon icon="logos:git-icon" className='w-7 h-7' />
                    <Icon icon="logos:github-icon" className='w-7 h-7' />
                    <Icon icon="logos:postman-icon" className='w-7 h-7' />
                    <Icon icon="logos:react" className='w-7 h-7' />
                    <Icon icon="logos:typescript-icon" className='w-7 h-7' />
                </div>
                <Link href=""><button className="px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Private Repo</button></Link>
                <p className="text-secondary text-sm mb-4 mt-2">
                    RespAi Hub is a full-stack platform built to help identify, prioritize, and manage outreach opportunities for fire departments across the U.S. It combines public datasets (including FEMA and wildfire-related data), automated data sync workflows, and lead-scoring logic to surface high-value prospects, then provides a secure CRM interface for managing departments, users, and configuration settings. The backend uses serverless API functions and database models for scalable data operations, while the frontend delivers a clean dashboard experience for tracking leads and supporting data-driven decision-making.
                </p>
                {/* image placeholders */}
                <div className="flex gap-4">
                    <Image quality={90} src="/RespAi Hub.png" alt="RespAI Screenshot 1" className="flex-1 object-contain rounded" width={1920} height={1080}/>
                </div>
            </section>
      
       <section className="w-full mb-12">
                <div className="mb-2">
                    <h1 className="text-3xl font-semibold text-primary mb-2 border-b">CoursePilot
                    </h1>
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                    <Icon icon="logos:javascript" className='w-7 h-7' />
                    <Icon icon="material-icon-theme:azure" className='w-7 h-7' />
                    <Icon icon="logos:figma" className='w-7 h-7' />
                    <Icon icon="logos:nodejs-icon" className='w-7 h-7' />
                    <Icon icon="skill-icons:expressjs-light" className='w-7 h-7' />
                    <Icon icon="logos:git-icon" className='w-7 h-7' />
                    <Icon icon="logos:github-icon" className='w-7 h-7' />
                    <Icon icon="logos:postman-icon" className='w-7 h-7' />
                    <Icon icon="logos:react" className='w-7 h-7' />
                </div>
                <Link href="https://github.com/ShadeKnightly/CoursePilot"><button className="px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Repo Link</button></Link>
                <p className="text-secondary text-sm mb-4 mt-2">
                    CoursePilot is a full-stack web application designed to streamline course discovery and registration for software development students. Built with a React frontend and a Node.js/Express backend, it features user authentication, course browsing, and enrollment functionalities. The application integrates with a SQL server hosted on Azure to manage course data and user information securely. Key features include a responsive design, intuitive user interface, and robust backend services to ensure a seamless user experience.
                </p>
                <div className="flex gap-4">
                    <Image quality={90} src="/CoursePilot.png" alt="CoursePilot Screenshot 1" className="flex-1 object-contain rounded" width={1920} height={1080}/>
                </div>
            </section>

            <section className="w-full mb-12">
                <div className="mb-2">
                    <h2 className="text-3xl font-semibold text-primary mb-2 border-b">Nest Trading App</h2>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                    <Icon icon="logos:figma" className='w-7 h-7' />
                    <Icon icon="logos:c-sharp" className='w-7 h-7' />
                    <Icon icon="logos:dotnet" className='w-7 h-7' />
                    <Icon icon="logos:git-icon" className='w-7 h-7' />
                    <Icon icon="logos:github-icon" className='w-7 h-7' />
                    <Icon icon="logos:supabase-icon" className='w-7 h-7' />
                </div>
                <Link href="https://github.com/ShadeKnightly/Day-trading-app"><button className="px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Repo Link</button></Link>
                <p className="text-secondary text-sm mb-4 mt-2">
                    Nest is a trading app made to simplify the stock trading experience for users. Developed using C# and the .NET framework, the application offers a user-friendly interface designed in Figma, ensuring an intuitive user experience. Nest integrates with Supabase for secure user authentication and data management, allowing users to track their portfolios. The app focuses on providing real-time market data, personalized watchlists, and comprehensive analytics to help users make informed trading decisions.
                </p>
                {/* image placeholders */}
                <div className="flex gap-4">
                    <Image quality={90} src="/NestSc.png" alt="Nest Trading App Screenshot 1" className="flex-1 object-contain rounded" width={1920} height={1080}/>
                </div>
            </section>
            
    </div>
  );
}
