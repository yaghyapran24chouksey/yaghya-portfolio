import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
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
      <section 
        id="Contact" 
        ref={sectionRef}
        className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Touch</span>
            </h2>
            <p 
              className={`text-lg text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-200 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-12">
            {/* Contact Information */}
            <div 
              className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <a 
                        href="mailto:yaghya24chouksey@gmail.com" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        yaghya24chouksey@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">WhatsApp</p>
                      <a 
                        href="https://wa.me/916262873483"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors inline-flex items-center"
                      >
                        Chat with me
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Indore, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-600">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Connect With Me
                  </h4>
                  <div className="space-y-4">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/yaghyapran-chouksey/" 
                      className="flex items-center group" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
                        LinkedIn
                      </span>
                    </a>

                    {/* Personal GitHub */}
                    <a 
                      href="https://github.com/yaghyapran24chouksey" 
                      className="flex items-center group" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-800 dark:group-hover:bg-gray-600 transition-all duration-300 transform group-hover:scale-110">
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-400 font-medium">
                        GitHub <span className="text-xs text-gray-500 dark:text-gray-400">(Personal)</span>
                      </span>
                    </a>

                    {/* Work GitHub */}
                    <a 
                      href="https://github.com/Yaghyapranchouksey-es" 
                      className="flex items-center group" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-800 dark:group-hover:bg-gray-600 transition-all duration-300 transform group-hover:scale-110">
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-400 font-medium">
                        GitHub <span className="text-xs text-gray-500 dark:text-gray-400">(Work)</span>
                      </span>
                    </a>

                    {/* WhatsApp
                    <a 
                      href="https://wa.me/916262873483" 
                      className="flex items-center group" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center group-hover:bg-green-600 dark:group-hover:bg-green-600 transition-all duration-300 transform group-hover:scale-110">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 font-medium">
                        WhatsApp
                      </span>
                    </a> */}
                  </div>
                </div>

                {/* Resume Download */}
                <div className="mt-8">
                  <a
                    href="Yaghyapran_chouksey_Resume.pdf"
                    download
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg hover:from-blue-700 hover:to-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Additional Info or Image */}
            <div 
              className={`w-full lg:w-1/2 flex items-center justify-center transition-all duration-1000 delay-500 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-sky-100 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-32 h-32 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
