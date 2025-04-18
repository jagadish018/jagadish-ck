// components/ContactBlock.tsx
import React from "react";

import { VscGithubInverted } from "react-icons/vsc";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


const ContactBlock = () => {
  const socialLinks = [
    {
      title: "GitHub",
      tag: <VscGithubInverted size={24} />,
      url: "https://github.com/jagadish018",
    },
    {
      title: "Instagram",
      tag: <BiLogoInstagramAlt size={24} />,
      url: "https://instagram.com/yourusername",
    },
    {
      title: "X/Twitter",
      tag: <FaXTwitter size={20} />,
      url: "https://x.com/JagadishCK4056",
    },
    {
      title: "LinkedIn",
      tag: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/jagadish-c-k-93b729187/",
    },
    {
      title: "Leetcode",
      tag: <SiLeetcode size={22} />,
      url: "https://leetcode.com/u/jagadishck018/",
    },
  ];

  return (
    <div className="dark:bg-[#0A0A0A] min-h-screen flex flex-col font-inter mt-2">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Contact
        </h2>
      </div>

      <main className="flex-grow flex justify-center items-start pt-10 px-4">
        <form
          className="bg-[#0E1117] rounded-3xl max-w-2xl w-full p-8 flex flex-col gap-4"
          aria-label="Contact form"
        >
          <h2 className="text-[#c49647] font-semibold text-center mb-4">
            Get In Touch
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="bg-[#464a4f] text-[#f5d9b6] rounded-lg py-3 px-4 placeholder-[#c49647] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#464a4f] text-[] rounded-lg py-3 px-4 placeholder-[#c49647] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#464a4f] text-[#f5d9b6] rounded-lg py-3 px-4 placeholder-[#c49647] focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="bg-[#464a4f] text-[#f5d9b6] rounded-lg py-3 px-4 placeholder-[#c49647] resize-none focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#464a4f] text-[#c49647] font-semibold tracking-widest rounded-full py-2 px-10 mx-auto mt-2 hover:bg-[#8a8c8c] transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </main>

      {/* Social Links Section */}
      <footer className="bg-[#0E1117] py-6 mt-10">
        <div className="max-w-5xl mx-auto flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#c49647] hover:text-[#8a8c8c] transition-colors"
            >
              {link.tag}
              <span className="sr-only">{link.title}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default ContactBlock;