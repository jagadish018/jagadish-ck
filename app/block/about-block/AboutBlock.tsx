import React from "react";
import Image from "next/image";

const AboutBlock = () => {
  return (
    <div className="min-h-screen px-4 md:px-16 py-10   text-black dark:text-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          About
        </h2>
      </div>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
        {/* Left Card */}
        <div className=" rounded-2xl p-6 shadow-md bg-[#0E1117] w-full lg:w-[390px] flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-4">
            <Image
              src="/profile.JPG"
              alt="Jagadish C K"
              fill
              className="rounded-full object-cover border-4 border-[#f6e5c8]"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 ">Jagadish C K</h3>
          <ul className="text-left space-y-2 text-sm text-white">
            <li className="text-white">
              <span className="font-semibold text-white">› Birthday:</span> July
              2000
            </li>
            <li className="text-white">
              <span className="font-semibold">› Phone:</span>{" "}
              <a
                href="tel:+917349269873"
                className=" text-white underline hover:text-orange-400"
              >
                +91 7349269873
              </a>
            </li>
            <li className="text-white">
              <span className="font-semibold">› City:</span>{" "}
              <span id="location" className=" text-white">
                Karnataka, India
              </span>
            </li>
            <li className="text-white">
              <span className="font-semibold">› Email:</span>{" "}
              <a
                href="mailto:jagadishck.018@gmail.com"
                className=" text-white underline hover:text-orange-400"
              >
                jagadishck.018@gmail.com
              </a>
            </li>
          </ul>
          {/* Push bottom if space */}
          <div className="flex-grow" />
        </div>

        {/* Right Card */}
        <div className=" rounded-2xl p-6 shadow-md w-full flex flex-col justify-between bg-[#0E1117]">
          <p className="leading-relaxed px-4 text-[15px] text-white md:text-base text-justify">
            <strong>Greetings,</strong>
            <br />
            <br />I am Jagadish C K, a driven and innovative Information Science
            engineer with expertise in web development. My academic foundation,
            cultivated at Siddaganga Institute of technology, serves as the
            bedrock for my proficiency in a diverse array of technologies. This
            portfolio offers a comprehensive overview of my capabilities,
            encompassing robust web development skills—leveraging the Full
            stack—alongside a strong command of core programming languages,
            notably C++ and Python. I am passionate about crafting elegant,
            efficient solutions and continuously expanding my knowledge horizon
            within the dynamic realm of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
