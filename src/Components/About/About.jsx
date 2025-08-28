import React from "react";

export default function About() {
  return (
    <>
      <div id="About" className="mt-25 flex flex-cols flex-wrap items-center justify-around mx-auto p-25 text-gray-900 dark:text-white pb-0">
        <h1 className=" text-4xl leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white ">
          About Me
        </h1>
        <p className="mb-50 mt-20 text-lg font-normal text-gray-500 lg:text-xl xl:px-48 dark:text-gray-400">
          Hi I am Yaghyapran Chouksey, Passionate about learning and growing both personally and professionally. Actively exploring programming language and software development to enhance my skills in software engineering.<br />
          I am an aspiring software engineer and MCA student at Sage University, Indore, with a passion for learning and software development. I have hands-on experience in programming languages like C, C++, C#, .NET, HTML, CSS, JavaScript, and React. My expertise extends to web development, where I have built various projects, including restaurant websites, quiz games, and billing systems.<br/>
          <a href="Yagya_Updated_Resume.pdf" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10" target="_blank">
            Get My Resume
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </p>

      </div>
    </>
  );
}
