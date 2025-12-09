import React, { useState, useEffect } from 'react';
import yaghya_portfolio_img from '../../assets/img/yaghya_portfolio_img.jpg';

export default function Home() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const roles = [
        'Software Engineer',
        'Mern Stack Developer',
        'React Developer',
        'Node.js Developer'
    ];

    // Fade in animation on component mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Typing animation effect
    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.substring(0, displayedText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentRole.substring(0, displayedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    return (
        <div id='Home' className="flex flex-row justify-around flex-wrap my-10 items-center min-h-screen">
            {/* Text Content */}
            <div className={`max-w-2xl transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    Hi! I am<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        Yaghyapran
                    </span> Chouksey
                </h1>
                
                {/* Typing Animation for Role */}
                <div className="mb-4 h-12">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>

                {/* Current Position */}
                <p className="mb-4 text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Software Engineer at DevQAExpert Solution
                </p>

                {/* Tagline */}
                <p className="font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-2">
                    Transforming ideas into high-performance web applications with MERN stack
                </p>
                
                <p className="font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                    MCA Graduate passionate about creating efficient, user-centric solutions
                </p>
            </div>

            {/* Image */}
            <div className={`text-center transition-all duration-1000 delay-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <img 
                    className="rounded-full w-96 h-96 mb-4 shadow-2xl hover:scale-105 transition-transform duration-300 object-cover" 
                    src={yaghya_portfolio_img} 
                    alt="Yaghyapran Chouksey"
                />
            </div>
        </div>
    );
}