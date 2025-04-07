import React from 'react';
import C_logo from '../../assets/img/C_logo.jpg'
import oops_logo from '../../assets/img/oops_logo.jpg'
import Csharp from '../../assets/img/Csharp.jpg'
import html5 from '../../assets/img/html5.jpg'
import CSS from '../../assets/img/CSS.jpg'
import javascript_logo from '../../assets/img/javascript_logo.jpg'
import react from '../../assets/img/react.jpg';
import dotnet from '../../assets/img/dotnet.jpg'
import Bootstrap from '../../assets/img/Bootstrap.jpg'
import Tailwind from '../../assets/img/Tailwind.jpg'

const skills = [
    {
        name: 'C',
        logo: C_logo, // path to your HTML logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'C++',
        logo: oops_logo, // path to your CSS logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'C#',
        logo: Csharp, // path to your JavaScript logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'HTML 5',
        logo: html5, // path to your Python logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'CSS',
        logo: CSS, // path to your Sass logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'Javascript',
        logo: javascript_logo, // path to your MySQL logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'React',
        logo: react, // path to your MySQL logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'dotnet',
        logo: dotnet, // path to your MySQL logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'Bootstrap',
        logo: Bootstrap, // path to your MySQL logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
    {
        name: 'Tailwind',
        logo: Tailwind, // path to your MySQL logo image
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'
    },
];

export default function Skills() {

    return (

        <>

            <div id='Skills' className="flex flex-cols flex-wrap items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
                <h3 className="text-4xl leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white mb-10">Skills</h3>

                <div className="text-white p-6">
                    <h2 className="text-3xl font-bold text-center mb-4">My Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skills.map(skills => (
                            <div key={skills.name} className="text-center rounded-lg bg-gray-700 p-8">
                                <img src={skills.logo} alt={skills.name} className="w-16 h-16 mb-2 mx-auto" />
                                <h3 className="text-xl font-semibold">{skills.name}</h3>
                                <p className="mt-2">{skills.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </>

    )
}
