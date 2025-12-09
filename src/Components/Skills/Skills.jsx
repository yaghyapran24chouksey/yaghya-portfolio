import React, { useState, useEffect, useRef } from 'react';
import C_logo from '../../assets/img/C_logo.jpg';
import oops_logo from '../../assets/img/oops_logo.jpg';
import html5 from '../../assets/img/html5.jpg';
import CSS from '../../assets/img/CSS.jpg';
import javascript_logo from '../../assets/img/javascript_logo.jpg';
import react from '../../assets/img/react.jpg';
import Bootstrap from '../../assets/img/Bootstrap.jpg';
import Tailwind from '../../assets/img/Tailwind.jpg';
import Express from '../../assets/img/express.jpg';
import Nodejs from '../../assets/img/nodejs.jpg';
import MongoDB from '../../assets/img/mongodb.jpg';
import Postman from '../../assets/img/postman.jpg';
import Gitgithub from '../../assets/img/git_github.jpg';

export default function Skills() {
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

    const skillsData = {
        "Frontend": [
            {
                name: 'HTML5',
                logo: html5,
                description: 'Semantic markup and modern web standards for building structured, accessible web pages.'
            },
            {
                name: 'CSS3',
                logo: CSS,
                description: 'Advanced styling with flexbox, grid, animations, and responsive design techniques.'
            },
            {
                name: 'JavaScript',
                logo: javascript_logo,
                description: 'Core programming language for dynamic, interactive web applications and modern ES6+ features.'
            },
            {
                name: 'React.js',
                logo: react,
                description: 'Building reusable UI components, state management, and optimized component architecture.'
            },
            {
                name: 'Tailwind CSS',
                logo: Tailwind,
                description: 'Utility-first CSS framework for rapid UI development with responsive, modern designs.'
            },
            {
                name: 'Bootstrap',
                logo: Bootstrap,
                description: 'Popular CSS framework for creating responsive, mobile-first web applications quickly.'
            }
        ],
        "Backend & Database": [
            {
                name: 'Node.js',
                logo: Nodejs,
                description: 'Server-side JavaScript runtime for building scalable backend applications and REST APIs.'
            },
            {
                name: 'Express.js',
                logo: Express,
                description: 'Minimal web framework for Node.js to build robust APIs and web applications.'
            },
            {
                name: 'MongoDB',
                logo: MongoDB,
                description: 'NoSQL database for flexible, scalable data storage in modern web applications.'
            }
        ],
        "Programming": [
            {
                name: 'C',
                logo: C_logo,
                description: 'Foundational programming language for understanding algorithms and system-level programming.'
            },
            {
                name: 'C++',
                logo: oops_logo,
                description: 'Object-oriented programming with focus on data structures and algorithm implementation.'
            },
            // {
            //     name: 'TypeScript',
            //     logo: javascript_logo,
            //     description: 'Strongly-typed JavaScript superset for building large-scale, maintainable applications.'
            // }
        ],
        "Tools & Others": [
            {
                name: 'Git & GitHub',
                logo: Gitgithub,
                description: 'Version control and collaboration for managing code repositories and team workflows.'
            },
            {
                name: 'Postman',
                logo: Postman,
                description: 'API testing and development tool for designing, testing, and documenting REST APIs.'
            },
            // {
            //     name: 'Agile/Scrum',
            //     logo: javascript_logo,
            //     description: 'Agile methodologies with daily scrums, sprint planning, and collaborative development.'
            // }
        ]
    };

    return (
        <div 
            id='Skills' 
            ref={sectionRef}
            className="min-h-screen flex flex-col items-center justify-center mx-auto px-4 py-20 text-gray-900 dark:text-white"
            style={{paddingTop:"120px"}}
        >
            {/* Title */}
            <h3 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                My <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Skills</span>
            </h3>

            <div className="w-full max-w-7xl">
                {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                    <div key={category} className="mb-12">
                        {/* Category Title */}
                        <h4 
                            className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center transition-all duration-1000 transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                        >
                            {category}
                        </h4>

                        {/* Skills Grid */}
                        <div className={`grid gap-6 ${
                            skills.length === 2 
                                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center max-w-4xl mx-auto' 
                                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        }`}>
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className={`w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{ transitionDelay: `${(categoryIndex * 100) + (index * 100)}ms` }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <img 
                                            src={skill.logo} 
                                            alt={skill.name} 
                                            className="w-16 h-16 mb-4 object-contain rounded-lg"
                                        />
                                        <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {skill.name}
                                        </h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}