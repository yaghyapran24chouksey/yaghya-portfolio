import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="w-full mx-auto max-w-screen-xl px-4 py-8">
                    {/* Top Section - Links and Social */}
                    <div className="md:flex md:justify-between md:items-center mb-6">
                        {/* Quick Links */}
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                Quick Links
                            </h3>
                            <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="#About" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#Experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a href="#Skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#Projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#Contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-gray-200 dark:border-gray-700" />

                    {/* Bottom Section - Copyright */}
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                            © 2025 <span className="font-semibold">Yaghyapran Chouksey</span>. All Rights Reserved.
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-right block mt-4 sm:mt-0">
                            Made with <span className="text-red-500">❤️</span> using React & Tailwind CSS
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}