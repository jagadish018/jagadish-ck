import React from "react";
import EducationCard from "./EducationCard";

const ContactBlock = () => {
  const details = [
    {
      imagePath: "/sit.jpg",
      degree: "Bachelor of Engineering",
      branch: "Information Science",
      duration: "2022 - 2025",
      college: "Siddaganga Institute Of Technology",
      CGPA: "8.15 CGPA",
    },
    {
      imagePath: "/rit.jpg",
      degree: "Diploma",
      branch: "Mechnical Engineering",
      duration: "2016 - 2019",
      college: "Rajeev Polytechnic College",
      CGPA: "7.9 CGPA",
    },
  ];

  return (
    <div className="dark:bg-[#0A0A0A] min-h-screen flex flex-col items-center font-inter px-4 py-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-5xl">
        {details.map((item, index) => (
          <EducationCard
            key={index}
            imagePath={item.imagePath}
            degree={item.degree}
            branch={item.branch}
            duration={item.duration}
            college={item.college}
            CGPA={item.CGPA}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactBlock;
