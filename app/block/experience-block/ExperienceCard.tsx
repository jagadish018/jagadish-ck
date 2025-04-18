"use client";

import Image from "next/image";
import React from "react";

const ExperienceCard: React.FC = () => {
  return (
    <div className=" bg-transparent dark:bg-neutral min-h-screen flex items-center justify-center p-6">
      <div className="flex w-full max-w-5xl relative">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 z-0" />

        {/* Timeline Icon in Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-20 h-20 rounded-full border border-white bg-[#2e2b3c] flex items-center justify-center overflow-hidden">
            <Image
              src="/oracle.png"
              alt="Company Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="w-1/2 flex justify-end pr-6 md:pr-20 z-10">
          <div className="relative bg-[#2e2b3c] text-white rounded-md p-6 max-w-md shadow-[0_2px_0_0_rgba(255,255,255,0.3)]">
            {/* Triangle Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-6 border-y-transparent border-l-[12px] border-l-[#2e2b3c]" />
            <p className="font-semibold mb-1">DLS Software Developer</p>
            <p className="font-mono text-sm mb-4">
              Centre for Virtual Reality Innovation - VARLab
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm font-normal">
              <li>
                Developed scalable and performant web apps using JavaScript,
                ReactJS, MongoDB, and ExpressJS.
              </li>
              <li>
                Worked on VR learning experiences using Unity and C#, optimizing
                data structures for efficiency.
              </li>
              <li>
                Led onboarding projects, reducing ramp-up time for new
                developers by 45%.
              </li>
              <li>
                Conducted code reviews, enforcing best practices in security and
                testability.
              </li>
              <li>
                Mentored 10+ co-op developers, boosting team productivity.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Time Text */}
        <div className="w-1/2 flex items-center justify-start pl-6 md:pl-20 z-10">
          <p className="text-black dark:text-white font-semibold text-sm">
            Match 2025 – Present
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
