import React, { useState, useEffect, useRef } from "react";

export default function About() {
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
    <>
      <div
        id="About"
        ref={sectionRef}
        className="min-h-screen flex flex-col items-center justify-center mx-auto px-4 py-20 text-gray-900 dark:text-white"
      >
        {/* Title */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Me</span>
        </h1>

        {/* Content Container */}
        <div className="max-w-5xl w-full">
          {/* Main Description */}
          <div
            className={`mb-12 transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Hi! I'm <span className="font-semibold text-gray-900 dark:text-white">Yaghyapran Chouksey</span>, 
              a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> currently 
              working at <span className="font-semibold">DevQAExpert Solution Private Limited</span>. I specialize in building 
              scalable web applications using the <span className="font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js).
            </p>

            <p className="text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              With hands-on experience in full-stack development, I've delivered <span className="font-semibold text-gray-900 dark:text-white">20+ 
              production-level enhancements</span> across UI, backend APIs, and business logic. I'm committed to writing clean, 
              maintainable code and optimizing performance to ensure exceptional user experiences.
            </p>

            <p className="text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              I recently completed my <span className="font-semibold text-gray-900 dark:text-white">Master of Computer Applications (MCA)</span> from 
              Sage University, Indore. I'm passionate about leveraging modern technologies like React, Node.js, TypeScript, 
              and AI-assisted development tools to create efficient, user-centric solutions.
            </p>

            {/* Resume Button */}
            <a
              href="Yaghyapran_chouksey_Resume.pdf"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get My Resume
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
