import React from 'react'

export default function Projects() {
    return (
        <div id='Projects' className='w-full py-16 px-4 text-gray-900 dark:text-white'>
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white">Projects</h3>

                <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 w-full'>
                    {/* Project Card 1 */}
                    <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Digital Restaurant Menu Card</h5>
                            <p className="mb-4 text-gray-700 dark:text-gray-400">Designed a digital menu card for restaurants where customers can order food digitally using C language.</p>
                            <a href="https://github.com/yaghyapran24chouksey/Restro-menu-card.git" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 10">
                                    <path d="M1 5h12M9 1l4 4-4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Deposit or Withdraw Funds</h5>
                            <p className="mb-4 text-gray-700 dark:text-gray-400">Bank deposit/withdrawal system with final balance display using C++.</p>
                            <a href="https://github.com/yaghyapran24chouksey/Deposite-and-withdrawal-in-bank-account.git" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 10">
                                    <path d="M1 5h12M9 1l4 4-4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Billing Machine</h5>
                            <p className="mb-4 text-gray-700 dark:text-gray-400">Developed a billing system for coffee purchases using C#.</p>
                            <a href="https://github.com/yaghyapran24chouksey/Billing-machine.git" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 10">
                                    <path d="M1 5h12M9 1l4 4-4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Facebook Clone</h5>
                            <p className="mb-4 text-gray-700 dark:text-gray-400">A basic Facebook login/signup clone using HTML, CSS, and JavaScript.</p>
                            <a href="https://github.com/yaghyapran24chouksey/Clone-of-facebook.git" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 10">
                                    <path d="M1 5h12M9 1l4 4-4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project Card 5 */}
                    <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Quiz Game</h5>
                            <p className="mb-4 text-gray-700 dark:text-gray-400">A timed quiz game built with HTML, CSS, JavaScript, and Bootstrap.</p>
                            <a href="https://github.com/yaghyapran24chouksey/Quize-game.git" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 10">
                                    <path d="M1 5h12M9 1l4 4-4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
