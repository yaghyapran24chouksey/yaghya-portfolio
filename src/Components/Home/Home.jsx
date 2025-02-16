import React from 'react'
import yaghya_portfolio_img from '../../assets/img/yaghya_portfolio_img.jpg'
export default function Home() {
    return (

        <div id='Home' className="flex flex-row justify-around flex-wrap my-8 items-center ">
            <div>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">Hi! I am<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Yaghyapran</span> Chouksey</h1>
                <p className=" font-normal text-gray-500 lg:text-xl dark:text-gray-400">MCA Student | Aspiring Software Engineer</p>
            </div>


            <div className='text-center'>
                <img className="rounded-full w-96 h-96 mb-4" src={yaghya_portfolio_img} alt="image description"></img>
            </div>
        </div>
    )
}
