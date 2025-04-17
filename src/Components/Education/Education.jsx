import React from 'react'
import school_img from '../../assets/img/school_img.jpg'
import renaissance_img from '../../assets/img/renaissance_img.jpg'
import Sage_img from '../../assets/img/Sage_img.jpg'

export default function Education() {
    return (
        <div id='Education' className="mt-0 flex flex-col items-center justify-center mx-auto px-4 py-10 text-gray-900 dark:text-white">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 dark:text-white mb-10 text-center">Education</h3>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 w-full max-w-6xl">
                {/* Card 1 */}
                <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full h-48 object-cover" src={school_img} alt="School" />
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Higher Secondary Education</h5>
                        <p className="mb-3 text-gray-700 dark:text-gray-400">I completed my higher education in commerce with IP from the MP Board.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full h-48 object-cover" src={renaissance_img} alt="College" />
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Under Graduation</h5>
                        <p className="mb-3 text-gray-700 dark:text-gray-400">I completed my B.Com in Management from Renaissance College of Commerce and Management.</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full h-48 object-cover" src={Sage_img} alt="Post Graduation" />
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Post Graduation</h5>
                        <p className="mb-3 text-gray-700 dark:text-gray-400">Currently I am pursuing my master's degree in MCA from Sage University.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}