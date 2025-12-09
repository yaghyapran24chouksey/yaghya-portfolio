import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('About');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className={`fixed top-0 w-full z-50 border-gray-200 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-gray-900'
      }`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pr-15">
          <a href="#About" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <img 
              src="yaghya_portfolio_img.png" 
              alt="Yaghyapran Chouksey"
              className='h-20 w-20 rounded-full transition-all duration-300 object-cover' 
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Portfolio
            </span>
          </a>
          
          <button 
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all" 
            aria-controls="navbar-default" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            )}
          </button>
          
          <div className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a 
                  href="#About" 
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-sm transition-all duration-300 cursor-pointer ${
                    activeSection === 'About'
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#Education" 
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-sm transition-all duration-300 cursor-pointer ${
                    activeSection === 'Education'
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#Skills" 
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-sm transition-all duration-300 cursor-pointer ${
                    activeSection === 'Skills'
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#Projects" 
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-sm transition-all duration-300 cursor-pointer ${
                    activeSection === 'Projects'
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#Experience" 
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-sm transition-all duration-300 cursor-pointer ${
                    activeSection === 'Experience'
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#Contact" 
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-sm transition-all duration-300 cursor-pointer ${
                    activeSection === 'Contact'
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}