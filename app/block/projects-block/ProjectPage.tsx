"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  const details = [
    {
      imagePath: "/insight360.png",
      title: "Insigh360 news web app",
      projectUrl: "https://app.insight360.info",
      description:
        "Developed a news web app offering categorized tech and world news.",
    },
    {
      imagePath: "/filelessMalware.png",
      title: "Fileless Malware Detection",
      projectUrl: "https://github.com/jswaroop123/FileLess_Malware",
      description:
        "Developed ML model using Random Forest. It detects Fileless Malware",
    },
    {
      imagePath: "/swiggy.jpg",
      title: "Swiggy Clone",
      projectUrl: "https://swiggy-clone-five-theta.vercel.app",
      description: "Developed Swiggy clone ",
    },
    {
      imagePath: "/colonCancer.jpg",
      title: "Colon Cancer Prediction",
      projectUrl: "https://github.com/jagadish018/colon_cancer_prediction",
      description:
        "Developed Deep learning model using ResNet50 + Streamlit. It detects Colon Cancer",
    },
  ];

  return (
    <div className="min-h-screen font-inter px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {details.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ProjectCard
              imagePath={item.imagePath}
              title={item.title}
              projectUrl={item.projectUrl}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
