import React, { useState, useEffect, useRef } from 'react';

export default function Education() {
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

    return (
        <div 
            id='Education' 
            ref={sectionRef}
            className="min-h-screen flex flex-col items-center justify-center mx-auto px-4 py-20 text-gray-900 dark:text-white"
        >
            {/* Title */}
            <h3 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Education</span>
            </h3>

            {/* Education Content */}
            <div 
                className={`max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 md:p-12 transition-all duration-1000 delay-200 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="text-center mb-6">
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        Sage University, Indore
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        August 2023 - June 2025
                    </p>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    <p>
                        Completed my Master's degree with specialization in <span className="font-semibold text-gray-900 dark:text-white">software engineering and full-stack development</span>. 
                        This comprehensive program equipped me with in-depth knowledge of modern web technologies, database management, software architecture, and industry best practices.
                    </p>
                    
                    <p>
                        During my MCA, I gained hands-on experience with the <span className="font-semibold text-gray-900 dark:text-white">MERN stack</span> (MongoDB, Express.js, React, Node.js), 
                        developed multiple real-world projects, and participated in hackathons. The program strengthened my problem-solving abilities and prepared me for professional software development roles.
                    </p>
                </div>
            </div>
        </div>
    );
}