import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
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

            {/* kaika */}
            <section id="kaika" className="w-full mb-12">
                <div className="mb-2">
                    <div className="flex items-end mb-2 border-b pb-1">
                        <Image src="/kaika-logo.svg" alt="Kaika" width={200} height={58} className="h-12 w-auto" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                    <Icon icon="logos:vitejs" className='w-7 h-7' />
                    <Icon icon="logos:react" className='w-7 h-7' />
                    <Icon icon="logos:typescript-icon" className='w-7 h-7' />
                    <Icon icon="logos:git-icon" className='w-7 h-7' />
                    <Icon icon="logos:github-icon" className='w-7 h-7' />
                </div>
                <div className="flex gap-2 mb-3">
                    <Link href="https://github.com/BrayLaf/Kaika-Tech-Demo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-primary rounded text-primary hover:bg-primary/10 transition-colors" title="GitHub Repository">
                        <Icon icon="mdi:github" className="w-4 h-4" />
                    </Link>
                    <Link href="https://kaika-tech-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-primary rounded text-primary hover:bg-primary/10 transition-colors" title="Live Demo">
                        <Icon icon="mdi:link-variant" className="w-4 h-4" />
                    </Link>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                    Kaika is a single-page interactive knowledge-graph proof of concept. It maps information as a living graph where people, ideas, decisions, and memories branch outward as interconnected nodes. Built with React Flow for graph rendering, Zustand for state management, and Dagre for automatic layout, the demo lets users create and connect nodes, draw labelled edges, search by title or content, and toggle between auto-layout and free-drag modes. Pre-built scenarios let you explore the core mechanic immediately — no backend, no persistence required.
                </p>
                <ProjectShowcase
                    videoSrc="/videos/KaikaDemoFinal.mp4"
                    videoLabel="Demo"
                    images={[
                        { src: '/demo/KaikaImg1.png', alt: 'Kaika screenshot 1', label: 'Preview 1' },
                        { src: '/demo/KaikaImg2.png', alt: 'Kaika screenshot 2', label: 'Preview 2' },
                        { src: '/demo/KaikaImg3.png', alt: 'Kaika screenshot 3', label: 'Preview 3' },
                        { src: '/demo/KaikaImg4.png', alt: 'Kaika screenshot 4', label: 'Preview 4' },
                        { src: '/demo/KaikaImg5.png', alt: 'Kaika screenshot 5', label: 'Preview 5' },
                    ]}
                />
            </section>

            {/* smple */}
            <section id="smple" className="w-full mb-12">
                <div className="mb-2">
                    <h2 className="text-3xl font-semibold text-primary mb-2 border-b">SMPLE</h2>
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                    <Icon icon="logos:android-icon" className='w-7 h-7' />
                    <Icon icon="logos:kotlin-icon" className='w-7 h-7' />
                    <Icon icon="logos:supabase-icon" className='w-7 h-7' />
                    <Icon icon="logos:git-icon" className='w-7 h-7' />
                    <Icon icon="logos:github-icon" className='w-7 h-7' />
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                    SMPLE is a minimalist Android gym companion designed for speed. Open the app, type your workout in a notes-style format (e.g. "Bench 4×12 @ 225"), and save — no mandatory fields, no clutter. Built with Kotlin and Jetpack Compose following MVVM architecture, it supports Push/Pull/Legs categorization, offline-first local caching via Room with automatic Supabase sync on reconnect, and Supabase Auth for secure user management with Row Level Security enforced at the database level.
                </p>
                <ProjectShowcase
                    videoSrc="/videos/smplDemo.mp4"
                    videoLabel="Demo"
                    images={[
                        { src: '/demo/SMPLE-landing-view.png', alt: 'SMPLE landing screen', label: 'Landing' },
                        { src: '/demo/SMPLE-login-view.png', alt: 'SMPLE login screen', label: 'Login' },
                        { src: '/demo/SMPLE-home-view.png', alt: 'SMPLE home screen', label: 'Home' },
                        { src: '/demo/SMPLE-workouts-view.png', alt: 'SMPLE workouts screen', label: 'Workouts' },
                        { src: '/demo/SMPLE-entries-view.png', alt: 'SMPLE entries screen', label: 'Entries' },
                        { src: '/demo/SMPLE-entry-view.png', alt: 'SMPLE entry detail screen', label: 'Entry' },
                        { src: '/demo/SMPLE-edit-workout-view.png', alt: 'SMPLE edit workout screen', label: 'Edit Workout' },
                        { src: '/demo/SMPLE-profile-view.png', alt: 'SMPLE profile screen', label: 'Profile' },
                    ]}
                />
            </section>

            {/* respai hub */}
            <section id="respai-hub" className="w-full mb-12">
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
                    videoSrc="/videos/RespAiDemo.mp4"
                    images={[
                        { src: '/demo/RespAiHome.webp', alt: 'RespAI Hub home', label: 'Home' },
                        { src: '/demo/RespAiDashboard.webp', alt: 'RespAI Hub dashboard', label: 'Dashboard' },
                        { src: '/demo/RespAiDepartments.webp', alt: 'RespAI Hub departments', label: 'Departments' },
                        { src: '/demo/RespAiSettings.webp', alt: 'RespAI Hub settings', label: 'Settings' },
                        { src: '/demo/RespAiUserManagement.webp', alt: 'RespAI Hub user management', label: 'User Management' },
                    ]}
                />
            </section>

            {/* course pilot */}
            <section id="coursepilot" className="w-full mb-12">
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
                <div className="flex gap-2 mb-3">
                    <Link href="https://github.com/ShadeKnightly/CoursePilot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-primary rounded text-primary hover:bg-primary/10 transition-colors" title="GitHub Repository">
                        <Icon icon="mdi:github" className="w-4 h-4" />
                    </Link>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                    CoursePilot is a full-stack web application designed to streamline course discovery and registration for software development students. Built with a React frontend and a Node.js/Express backend, it features user authentication, course browsing, and enrollment functionalities. The application integrates with a SQL server hosted on Azure to manage course data and user information securely. Key features include a responsive design, intuitive user interface, and robust backend services to ensure a seamless user experience.
                </p>
                <ProjectShowcase
                    videoSrc="/videos/CoursePilot.mp4"
                    images={[
                        { src: '/demo/pilotPreview.webp', alt: 'CoursePilot preview', label: 'Preview' },
                        { src: '/demo/pilotCourses.webp', alt: 'CoursePilot courses', label: 'Courses' },
                        { src: '/demo/pilotFigma.webp', alt: 'CoursePilot Figma design', label: 'Figma Design' },
                    ]}
                />
            </section>

            {/* nest trading app */}
            <section id="nest-trading-app" className="w-full mb-12">
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
                <div className="flex gap-2 mb-3">
                    <Link href="https://github.com/ShadeKnightly/Day-trading-app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-primary rounded text-primary hover:bg-primary/10 transition-colors" title="GitHub Repository">
                        <Icon icon="mdi:github" className="w-4 h-4" />
                    </Link>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                    Nest is a trading app made to simplify the stock trading experience for users. Developed using C# and the .NET framework, the application offers a user-friendly interface designed in Figma, ensuring an intuitive user experience. Nest integrates with Supabase for secure user authentication and data management, allowing users to track their portfolios. The app focuses on providing real-time market data, personalized watchlists, and comprehensive analytics to help users make informed trading decisions.
                </p>
                <ProjectShowcase
                    videoSrc="/videos/NestTradingApp.mp4"
                    images={[
                        { src: '/demo/nestHomepage.webp', alt: 'Nest Trading App homepage', label: 'Homepage' },
                        { src: '/demo/nestStockview.webp', alt: 'Nest Trading App stock view', label: 'Stock View' },
                        { src: '/demo/nestWatchlist.webp', alt: 'Nest Trading App watchlist', label: 'Watchlist' },
                        { src: '/demo/nestFigma.webp', alt: 'Nest Trading App Figma design', label: 'Figma Design' },
                    ]}
                />
            </section>

            {/* portfolio */}
            <section id="portfolio" className="w-full mb-12">
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
                <div className="flex gap-2 mb-3">
                    <Link href="https://github.com/BrayLaf/Portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-primary rounded text-primary hover:bg-primary/10 transition-colors" title="GitHub Repository">
                        <Icon icon="mdi:github" className="w-4 h-4" />
                    </Link>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
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
