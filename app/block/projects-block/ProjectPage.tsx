import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  const details = [
    {
      imagePath: "/hackernews.jpg",
      title: "Hackernews-Server",
      projectUrl: "https://github.com/jagadish018/hackernews-server",
      description: "Developed an Hackernews server clone",
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
      projectUrl: "https://github.com/jagadish018/Swiggy-Clone-website",
      description: "Developed Swiggy clone ",
    },
    {
      imagePath: "/colonCancer.jpg",
      title: "Colon Cancer Prediction",
      projectUrl: "https://github.com/jagadish018/colon_cancer_prediction",
      description:
        "Developed Deep learning model using ResNet50 + Streamlit. It detects Colon Cancer",
    },
    {
      imagePath: "/cpuSchedule.jpg",
      title: "CPU Schedule Visualizer",
      projectUrl:
        "https://github.com/jagadish018/CPU-Scheduler-Algo-Visualizer",
      description: "Developed Algorithm visualizer using React + TailwindCSS",
    },
    {
      imagePath: "/Hono.jpg",
      title: "Hono Clone",
      projectUrl: "https://github.com/jagadish018/copper",
      description: "Developed Hono clone Web Framework  ",
    },
  ];

  return (
    <div className="dark:bg-[#0A0A0A] min-h-screen font-inter px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {details.map((item, index) => (
          <ProjectCard
            key={index}
            imagePath={item.imagePath}
            title={item.title}
            projectUrl={item.projectUrl}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
