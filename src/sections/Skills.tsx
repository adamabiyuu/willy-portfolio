import SectionHeading from "../components/SectionHeading";
import type { IconType } from "react-icons";
// import { SiPython, SiMysql, SiPandas, SiNumpy, SiLooker, SiGooglesheets, SiScikitlearn, SiGit, SiGithub, SiGooglecolab, SiVisualstudiocode, SiFigma, SiPostman, SiCanva, SiPowers } from "react-icons/si";
import { FaChartLine, FaBrain, FaTree, FaProjectDiagram } from "react-icons/fa";
import { SiFigma, SiGit, SiGithub, SiGooglecolab, SiGooglesheets, SiLooker, SiMysql, SiNumpy, SiPandas, SiPostman, SiPowers, SiPython, SiScikitlearn } from "react-icons/si";

type Props = {
  dark: boolean;
};

type Skill = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Data Analysis",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiMysql },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    title: "Business Intelligence & Visualization",
    skills: [
      // { name: "MS. Excel", icon: SiMicrosoft },
      { name: "Power BI", icon: SiPowers },
      { name: "Looker Studio", icon: SiLooker },
      { name: "Google Sheets", icon: SiGooglesheets },
      { name: "Seaborn", icon: SiPython },
      { name: "Matplotlib", icon: FaChartLine },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "XGBoost", icon: FaBrain },
      { name: "Random Forest", icon: FaTree },
      { name: "Clustering", icon: FaProjectDiagram },
      { name: "Predictive Modeling", icon: FaChartLine },
    ],
  },
  {
    title: "Database & Development Tools",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Google Colab", icon: SiGooglecolab },
      // { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      // { name: "Canva", icon: SiCanva },
    ],
  },
];

export default function Skills({ dark }: Props) {
  return (
    <section id="skills" className={`scroll-mt-24 border-t px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${dark ? "border-white/10" : "border-gray-200"}`}>
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading eyebrow="MY EXPERTISE" title="Skills & Tools" description="The skills, tools, and technologies I use to support data processing, analysis, visualization, and machine learning model development." dark={dark} />

        <div className="mt-12 space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className={`mb-5 text-lg font-bold sm:text-xl ${dark ? "text-white" : "text-gray-900"}`}>{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-3 rounded-xl border px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-lime-500 hover:shadow-md ${
                        dark ? "border-white/10 bg-white/[0.03] text-gray-200 hover:bg-white/[0.07]" : "border-gray-200 bg-white text-gray-700 hover:bg-lime-50"
                      }`}
                    >
                      <Icon className="shrink-0 text-xl text-lime-500" aria-hidden="true" />

                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
