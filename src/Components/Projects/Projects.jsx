import React, { useState, useEffect, useRef } from 'react';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const projects = [
        {
            title: 'SunandSonsFood',
            description: 'Freelance client project: Zero-maintenance, cost-efficient business website with automated lead handling and real-time client notifications.',
            tech: ['React.js', 'Tailwind CSS', 'Google Apps Script', 'Google Sheets API', 'SweetAlert2'],
            features: [
                'Automated lead capture with Google Sheets integration',
                'Email notifications and WhatsApp direct chat',
                'Zero hosting expenses using Google Apps Script backend',
                'Mobile-first responsive design'
            ],
            github: 'https://github.com/yaghyapran24chouksey/SunandSonsFood',
            live: '#',
            date: 'November 2025'
        },
        {
            title: 'PlanMyDay',
            description: 'Scalable Indian wedding planning platform with vendor listings, budget tracking, and checklist workflows.',
            tech: ['React.js', 'Node.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
            features: [
                'Vendor listings for venues, decor, and catering',
                'Budget tracking and checklist workflows',
                'Reusable React components with modular architecture',
                'Fully responsive UI optimized for mobile users'
            ],
            github: 'https://github.com/yaghyapran24chouksey/PlanMyDay',
            live: '#',
            date: 'October 2025 - Present'
        },
        {
            title: 'TechNewbies',
            description: 'Hackathon project (Inter College Hackathon 2024): Educational platform for learning programming languages with certificate generation and progress tracking.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
            features: [
                'Interactive lessons for multiple programming languages',
                'Certificate generation system upon course completion',
                'Progress tracking to monitor learning journey',
                'Responsive design for seamless learning across devices'
            ],
            github: 'https://github.com/anuragpardeshii/TechNewbies',
            live: '#',
            date: '2024 (Hackathon)'
        },
        {
            title: 'Quiz Game',
            description: 'Interactive timed quiz application with scoring system and dynamic questions.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            features: [
                'Timer functionality for each question',
                'Dynamic question loading',
                'Score tracking and results display',
                'Responsive design with Bootstrap'
            ],
            github: 'https://github.com/yaghyapran24chouksey/Quize-game.git',
            live: '#',
            date: '2024'
        },
        {
            title: 'Digital Restaurant Menu',
            description: 'Digital menu card system for restaurants enabling customers to browse and order food digitally.',
            tech: ['C'],
            features: [
                'Menu browsing functionality',
                'Order placement system',
                'Bill calculation',
                'Console-based user interface'
            ],
            github: 'https://github.com/yaghyapran24chouksey/Restro-menu-card.git',
            live: '#',
            date: '2023'
        },
        {
            title: 'Facebook Clone',
            description: 'Basic Facebook login and signup page clone demonstrating frontend development skills.',
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            features: [
                'Login/Signup interface',
                'Form validation',
                'Responsive design',
                'UI/UX matching Facebook design'
            ],
            github: 'https://github.com/yaghyapran24chouksey/Clone-of-facebook.git',
            live: '#',
            date: '2023'
        }
    ];

    return (
        <div
            id='Projects'
            ref={sectionRef}
            className='min-h-screen w-full py-29 px-4 text-gray-900 dark:text-white'
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                {/* Title */}
                <h3
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Projects</span>
                </h3>

                <p
                    className={`text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    Here are some of my recent projects showcasing my skills in full-stack development
                </p>

                {/* Projects Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                {/* Project Header */}
                                <div className="mb-4">
                                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h5>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                                        {project.date}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h6 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                        Tech Stack:
                                    </h6>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-4 flex-1">
                                    <h6 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                        Key Features:
                                    </h6>
                                    <ul className="space-y-1">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                                <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {project.live !== '#' && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-all"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}