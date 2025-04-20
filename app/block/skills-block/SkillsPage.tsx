"use client";


import SkillsCard from "./SkillsCard";

// Import SVG components
import { ReactSVG } from "@/assets/svgs/React";
import { NodeSVG } from "@/assets/svgs/Node";
import { PrismaSVG } from "@/assets/svgs/Prisma";
import { TypeScriptSVG } from "@/assets/svgs/Typescript";
import { FirebaseSVG } from "@/assets/svgs/Firebase";
import { SupabaseSVG } from "@/assets/svgs/Supabase";
import { TailwindSVG } from "@/assets/svgs/TailwindCSS";
import { PostgresSVG } from "@/assets/svgs/PostgreSQL";
import { PostmanSVG } from "@/assets/svgs/Postman";
import { DockerSVG } from "@/assets/svgs/Docker";
import { GitHubSVG } from "@/assets/svgs/Github";
import { GitSVG } from "@/assets/svgs/Git";
import { AzureSVG } from "@/assets/svgs/Azure";
import { VercelSVG } from "@/assets/svgs/Vercel";

export default function SkillsPage() {
  const skills = [
    {
      title: "React",
      Icon: ReactSVG,
      link: "https://reactjs.org",
    },
    {
      title: "Node.js",
      Icon: NodeSVG,
      link: "https://nodejs.org",
    },
    {
      title: "Prisma",
      Icon: PrismaSVG,
      link: "https://www.prisma.io/",
    },
    {
      title: "TypeScript",
      Icon: TypeScriptSVG,
      link: "https://www.typescriptlang.org",
    },
    {
      title: "Firebase",
      Icon: FirebaseSVG,
      link: "https://firebase.google.com/",
    },
    {
      title: "Supabase",
      Icon: SupabaseSVG,
      link: "https://supabase.com",
    },
    {
      title: "Tailwind CSS",
      Icon: TailwindSVG,
      link: "https://tailwindcss.com",
    },
    {
      title: "PostgreSQL",
      Icon: PostgresSVG,
      link: "https://www.postgresql.org",
    },
    {
      title: "Postman",
      Icon: PostmanSVG,
      link: "https://www.postman.com",
    },
    {
      title: "Docker",
      Icon: DockerSVG,
      link: "https://www.docker.com/",
    },
    {
      title: "GitHub",
      Icon: GitHubSVG,
      link: "https://github.com",
    },
    {
      title: "Git",
      Icon: GitSVG,
      link: "https://git-scm.com",
    },
    {
      title: "Azure",
      Icon: AzureSVG,
      link: "https://azure.microsoft.com/en-us/",
    },
    {
      title: "Vercel",
      Icon: VercelSVG,
      link: "https://vercel.com",
    },
  ];

  return (
    <div className="min-h-screen  dark:text-white text-black p-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Technical Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <SkillsCard
            key={idx}
            title={skill.title}
            Icon={skill.Icon}
            link={skill.link}
          />
        ))}
      </div>
    </div>
  );
}
