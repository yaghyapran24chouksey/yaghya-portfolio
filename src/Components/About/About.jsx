import React from "react";

export default function About() {
    return (
      <>
        <div className="flex flex-cols h-screen flex-wrap items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
          <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white pr-150">
            About Me
          </h1>
          <p className="mb-7 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Hi I am Yaghyapran Chouksey, Passionate about learning and growing both personally and professionally. Actively exploring programming language and software development to enhance my skills in software engineering.
          </p>
        </div>
      </>
    );
  }