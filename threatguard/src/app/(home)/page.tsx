// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <div className="flex flex-col justify-center text-center flex-1">
//       <h1 className="text-2xl font-bold mb-4">Hello World</h1>
//       <p>
//         You can open{' '}
//         <Link href="/docs" className="font-medium underline">
//           /docs
//         </Link>{' '}
//         and see the documentation.
//       </p>
//     </div>
//   );
// }



'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [showMore, setShowMore] = useState(false);

  const mainSections = [
    {
      title: 'Scam Detection',
      description: 'Detect images that are scams and also text that are scams',
      href: '/docs/requests/scams',
    },
    {
      title: 'Malware Detection (Not Ready)',
      description: 'Detect exeutable and dll files for malware',
      href: '/docs/requests/malware',
    }
  ];

  // const moreSections = [
    
  // ];

  return (
    <main className="flex flex-col flex-1 justify-center items-center px-4 py-4">
      {/* Logo Animation */}
      {/* <div className="w-72 h-72 flex items-center justify-center -mb-4">
        <div className="w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 360"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="clip1">
                <rect width="400" height="400" x="0" y="0" />
              </clipPath>
              <clipPath id="clip2">
                <rect width="146" height="234" x="0" y="0" />
              </clipPath>
              <clipPath id="clip3">
                <rect width="150" height="236" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip1)" transform="matrix(1,0,0,1,100,-20)">
              <g clipPath="url(#clip2)" transform="matrix(0.95,0,0,0.95,27.65,134.38)">
                <g transform="matrix(1.333,0,0,1.333,0,0)">
                  <path
                    fill="white"
                    d="M109.13,108.75 L67.51,77.33 L0,175.5 L63.38,0 L109.13,108.75z"
                  />
                </g>
              </g>
              <g clipPath="url(#clip3)" transform="matrix(0.95,0,0,0.95,112.74,41.39)">
                <path
                  fill="#8A5DF4"
                  d="M0,90.5 L63.3,235.5 L149.5,0 L56.7,131.7 L0,90.5z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div> */}

      <h1 className="font-bold text-3xl md:text-4xl text-white text-center mb-2">
        Documentation
      </h1>
      <p className="text-[#a3a3a3] text-sm md:text-base max-w-lg text-center mb-6">
        Comprehensive guides and API references for ThreatGuard.
      </p>

      <div className="flex gap-3 mb-12">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#a888f3] hover:bg-[#975dfa] text-[#111111] font-medium text-sm transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          Get Started
        </Link>
        {/* <Link
          href="https://discord.gg/voltbz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#262626] bg-[#111111] hover:bg-[#262626] text-white font-medium text-sm transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </Link> */}
      </div>

      <div className="max-w-5xl w-full scroll-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="p-4 rounded-lg bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors duration-200 text-left group"
            >
              <h3 className="font-bold text-white mb-1 text-base">{section.title}</h3>
              <p className="text-[#a3a3a3] text-xs">{section.description}</p>
            </Link>
          ))}
        </div>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: showMore ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 transition-opacity duration-500 ease-out"
              style={{ opacity: showMore ? 1 : 0 }}
            >
              {/* {moreSections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="p-4 rounded-lg bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors duration-200 text-left group"
                >
                  <h3 className="font-bold text-white mb-1 text-base">{section.title}</h3>
                  <p className="text-[#a3a3a3] text-xs">{section.description}</p>
                </Link>
              ))} */}
            </div>
          </div>
        </div>

        {/* <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 scroll-mb-4 flex items-center justify-center gap-2 px-6 py-2.5 text-[#a3a3a3] hover:text-white border border-[#262626] hover:border-[#404040] rounded-md transition-all duration-200 text-sm font-medium bg-[#111111] mx-auto"
        >

         {/*  { <span>{showMore ? 'Show Less' : `Show 15 More`}</span>  }
         {/*  <svg
         {/*    xmlns="http://www.w3.org/2000/svg"
         {/*    width="16"
         {/*    height="16"
         {/*    viewBox="0 0 24 24"
         {/*    fill="none"
         {/*    stroke="currentColor"
         {/*    strokeWidth="2"
         {/*    className={`transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`}
         {/*  >
         {/*    <path d="m6 9 6 6 6-6" />
        {/*   </svg>
        {/* </button> */}

        {/* <p className="mt-8 text-xs font-bold text-[#a3a3a3] text-center">
          VOLT.BZ is the only official domain for this software.
        </p> */}
      </div>
    </main>
  );
}