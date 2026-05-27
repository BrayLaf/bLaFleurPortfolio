import { Icon } from '@iconify/react';
import Link from 'next/link';
import ProjectShowcase from '@/components/ProjectShowcase';

export const metadata = {
  title: "Projects",
  description: "Explore Braydon Lafleur's portfolio projects including CoursePilot and other full-stack web applications built with React, Node.js, Azure, and modern technologies.",
  openGraph: {
    title: "Projects | Braydon Lafleur",
    description: "Explore my portfolio projects including CoursePilot and other full-stack web applications.",
  },
};

export default function Projects() {
    return (
        <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
            <h1 className="sr-only">Projects</h1>

            {/* respai hub */}
            <section className="w-full mb-12">
                <div className="mb-2">
                    <h2 className="text-3xl font-semibold text-primary mb-2 border-b">RespAI Hub
                    </h2>
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
                <span className="inline-block px-3 py-1 border-2 text-sm border-primary/40 rounded-full text-primary/40 cursor-default font-medium" title="This repository is private">Private Repo</span>
                <p className="text-foreground/70 text-sm mb-4 mt-2">
                    RespAi Hub is a full-stack platform built to help identify, prioritize, and manage outreach opportunities for fire departments across the U.S. It combines public datasets (including FEMA and wildfire-related data), automated data sync workflows, and lead-scoring logic to surface high-value prospects, then provides a secure CRM interface for managing departments, users, and configuration settings. The backend uses serverless API functions and database models for scalable data operations, while the frontend delivers a clean dashboard experience for tracking leads and supporting data-driven decision-making.
                </p>
                <ProjectShowcase
                    videoSrc={null}
                    images={[
                        { src: '/RespAi Hub.png', alt: 'RespAI Hub dashboard' },
                    ]}
                />
            </section>

            {/* course pilot */}
            <section className="w-full mb-12">
                <div className="mb-2">
                    <h2 className="text-3xl font-semibold text-primary mb-2 border-b">CoursePilot
                    </h2>
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
                <Link href="https://github.com/ShadeKnightly/CoursePilot" className="inline-block px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Repo Link</Link>
                <p className="text-foreground/70 text-sm mb-4 mt-2">
                    CoursePilot is a full-stack web application designed to streamline course discovery and registration for software development students. Built with a React frontend and a Node.js/Express backend, it features user authentication, course browsing, and enrollment functionalities. The application integrates with a SQL server hosted on Azure to manage course data and user information securely. Key features include a responsive design, intuitive user interface, and robust backend services to ensure a seamless user experience.
                </p>
                <ProjectShowcase
                    videoSrc={null}
                    images={[
                        { src: '/CoursePilot.png', alt: 'CoursePilot course browser' },
                    ]}
                />
            </section>

            {/* nest trading app */}
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
                <Link href="https://github.com/ShadeKnightly/Day-trading-app" className="inline-block px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Repo Link</Link>
                <p className="text-foreground/70 text-sm mb-4 mt-2">
                    Nest is a trading app made to simplify the stock trading experience for users. Developed using C# and the .NET framework, the application offers a user-friendly interface designed in Figma, ensuring an intuitive user experience. Nest integrates with Supabase for secure user authentication and data management, allowing users to track their portfolios. The app focuses on providing real-time market data, personalized watchlists, and comprehensive analytics to help users make informed trading decisions.
                </p>
                <ProjectShowcase
                    videoSrc={null}
                    images={[
                        { src: '/NestSc.png', alt: 'Nest Trading App dashboard' },
                    ]}
                />
            </section>

            {/* portfolio */}
            <section className="w-full mb-12">
                <div className="mb-2">
                    <h2 className="text-3xl font-semibold text-primary mb-2 border-b">My portfolio</h2>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                    <Icon icon="logos:javascript" className='w-7 h-7' />
                    <Icon icon="logos:figma" className='w-7 h-7' />
                    <Icon icon="logos:git-icon" className='w-7 h-7' />
                    <Icon icon="logos:github-icon" className='w-7 h-7' />
                    <Icon icon="logos:react" className='w-7 h-7' />
                    <Icon icon="logos:nextjs-icon" className='w-7 h-7' />
                </div>
                <Link href="https://github.com/BrayLaf/Portfolio" className="inline-block px-3 py-1 border-2 text-sm border-primary rounded-full text-primary hover:bg-primary/10 transition-colors font-medium">Repo Link</Link>
                <p className="text-foreground/70 text-sm mb-4 mt-2">
                    The website you are currently viewing! This portfolio site is built using Next.js and React, showcasing my projects, skills, and professional background. It features a responsive design, dark/light mode toggle, and interactive elements to enhance user experience. The site is optimized for performance and accessibility, ensuring it looks great on all devices. It serves as a central hub for potential employers and collaborators to learn more about my work and get in touch.
                </p>
                <ProjectShowcase
                    videoSrc={null}
                    images={[]}
                />
            </section>
        </div>
    )
}
