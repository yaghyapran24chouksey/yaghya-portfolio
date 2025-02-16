import React from 'react'
import school_img from '../../assets/img/school_img.jpg'
import renaissance_img from '../../assets/img/renaissance_img.jpg'
import Sage_img from '../../assets/img/Sage_img.jpg'

export default function Education() {
    return (
        <div id='Education' className="flex flex-cols flex-wrap items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
            <h3 className="text-4xl leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white mb-15">Education</h3>

            <div className="flex gap-5">

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={school_img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Higher secondary Eduction</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I completed my higher education in commerce with IP from the MP Board.</p>
                        <a href="#" className="mt-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={renaissance_img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Under Graduation</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I completed my Under Graduation in B.Comm with Management from the Ressainance Collage of Commerces and Management.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={Sage_img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Post Graduction</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Currently I am pursuing my master's degree in MCA from Sage University.</p>
                        <a href="#" className="mt-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


