// components/ContactBlock.tsx
import React from "react";



const ContactBlock = () => {
  

  return (
    <div className=" min-h-screen flex flex-col font-inter mt-2">
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
      
    </div>
  );
};

export default ContactBlock;