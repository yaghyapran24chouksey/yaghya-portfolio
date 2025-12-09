import React, { useState, useEffect, useRef } from 'react';

export default function Experience() {
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

    const experiences = [
        {
            role: "Software Engineer",
            company: "DevQAExpert Solution Private Limited",
            location: "Indore, India",
            period: "September 2025 – Present",
            type: "Full-time Intern",
            achievements: [
                "Delivered 20+ production-level enhancements across UI, backend APIs, and business logic using React, Node.js, and MongoDB in an agile environment with daily scrums",
                "Developed reusable React components and optimized component architecture, reducing development time by 30% and improving code maintainability",
                "Resolved critical live-environment bugs, data inconsistencies, and API integration issues, ensuring 99% uptime and smooth user experience",
                "Leveraged AI tools to accelerate development workflows, improve debugging efficiency, and enhance documentation quality",
                "Collaborated with cross-functional teams on feature planning, code reviews, and deployment cycles using Git version control"
            ],
            tech: ["React", "Node.js", "MongoDB", "Express.js", "Git", "Agile/Scrum"]
        },
        {
            role: "Zoho Creator Developer Intern",
            company: "Varthak Technologies (Zoho)",
            location: "Bengaluru, India",
            period: "February 2025 – March 2025",
            type: "Internship",
            achievements: [
                "Built custom cloud-based business applications using Zoho Creator and Deluge scripting, eliminating installation and maintenance overhead",
                "Designed automated workflows, interactive dashboards, and data-driven forms to streamline business operations",
                "Optimized application UI/UX for improved usability and reduced task completion time by 40%",
                "Delivered real-time operational visibility through dashboards, enabling faster decision-making for stakeholders"
            ],
            tech: ["Zoho Creator", "Deluge", "Cloud Applications", "Dashboard Design"]
        },
        {
            role: "Hackathon Participant",
            company: "Inter College Hackathon",
            location: "Team Project",
            period: "2024",
            type: "Hackathon",
            achievements: [
                "Built TechNewbies, an educational platform enabling users to learn programming languages with interactive lessons",
                "Implemented certificate generation system upon course completion",
                "Developed progress tracking functionality to monitor user learning journey",
                "Created fully responsive UI using Bootstrap and Tailwind CSS for optimal user experience across devices"
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"]
        }
    ];

    return (
        <div 
            id='Experience' 
            ref={sectionRef}
            className="min-h-screen flex flex-col items-center justify-center mx-auto px-4 py-30 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900"
        >
            {/* Title */}
            <h3 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                Work <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Experience</span>
            </h3>

            <p 
                className={`text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl transition-all duration-1000 delay-200 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                My professional journey in software development and engineering
            </p>

            {/* Experience Timeline */}
            <div className="max-w-5xl w-full">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`relative mb-12 transition-all duration-1000 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                    >
                        {/* Timeline Line (hidden on last item) */}
                        {index !== experiences.length - 1 && (
                            <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-sky-400"></div>
                        )}

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Timeline Dot */}
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-400 rounded-full flex items-center justify-center shadow-lg z-10">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 p-6 md:p-8 hover:transform hover:scale-105">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {exp.role}
                                        </h4>
                                        <div className="flex items-center mb-1">
                                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {exp.location}
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-left md:text-right">
                                        <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-2">
                                            {exp.type}
                                        </span>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                            {exp.period}
                                        </p>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Key Achievements:
                                    </h5>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm leading-relaxed">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Technologies Used:
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}