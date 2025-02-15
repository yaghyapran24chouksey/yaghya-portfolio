import React from 'react'

export default function Education() {
    return (
        <div className="mt-10 flex flex-cols h-screen flex-wrap items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
            <h3 className="text-4xl leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white">Education</h3>

            <div className="flex gap-5">
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Higher Secondary Education</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">I completed my higher education in commerce with IP from the MP Board.</p>
                </a>


                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Under Graduation</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">I completed my Under Graduation in B.Comm with Management from the Ressainance Collage of Commerces and Management.</p>
                </a>


                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Post Graduction</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Currently I am pursuing my master's degree in MCA from Sage University.</p>
                </a>
            </div>
        </div>
    )
}


