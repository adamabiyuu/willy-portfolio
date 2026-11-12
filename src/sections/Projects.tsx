import { useState } from "react";
import { ArrowDown, ArrowUpRight, Award, Code2 } from "lucide-react";
import { projects, certificates } from "../data/portfolio";

type ProjectsProps = {
  dark: boolean;
};

type TabType = "projects" | "certificates";

const ITEMS_LIMIT = 3;

export default function Projects({ dark }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [showAll, setShowAll] = useState(false);

  const isProjectsTab = activeTab === "projects";

  const activeItems = isProjectsTab ? projects : certificates;

  const visibleItems = showAll ? activeItems : activeItems.slice(0, ITEMS_LIMIT);

  const hasMoreItems = activeItems.length > ITEMS_LIMIT;

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section id="projects" className={`w-full scroll-mt-24 border-y px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-14 2xl:px-20 ${dark ? "border-gray-800" : "border-gray-200"}`}>
      <div className="w-full">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-600 dark:text-lime-400">Portfolio</p>

          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-gray-900"}`}>{isProjectsTab ? "Featured Projects" : "Certificates"}</h2>

          <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${dark ? "text-gray-400" : "text-gray-600"}`}>
            {isProjectsTab ? "Some projects I have worked on to explore technology and build digital solutions." : "Various certificates as proof of my achievements, experience, and competency development."}
          </p>

          {/* <p className={`mt-4 text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
            {activeItems.length} {isProjectsTab ? "proyek" : "sertifikat"}
          </p> */}
        </div>

        {/* Tabs */}
        <div className={`mb-8 inline-flex rounded-xl border p-1 ${dark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-100"}`}>
          <button
            type="button"
            onClick={() => handleTabChange("projects")}
            aria-pressed={isProjectsTab}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
              isProjectsTab ? "bg-lime-600 text-white shadow-md" : dark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Code2 size={17} />
            Projects
            <span className="text-xs opacity-75">({projects.length})</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("certificates")}
            aria-pressed={!isProjectsTab}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
              !isProjectsTab ? "bg-lime-600 text-white shadow-md" : dark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Award size={17} />
            Certificates
            <span className="text-xs opacity-75">({certificates.length})</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.number}
              className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                dark ? "border-gray-800 bg-gray-950 hover:border-lime-500/50" : "border-gray-200 bg-white hover:border-lime-500/50"
              }`}
            >
              {/* Card Header */}
              <div className={`flex items-center justify-between border-b px-5 py-4 ${dark ? "border-gray-800" : "border-gray-200"}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-gray-400" : "text-gray-500"}`}>
                  {isProjectsTab ? "Project" : "Certificate"} / {item.number}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Lihat ${item.name}`}
                  className={`rounded-full border p-2 transition ${dark ? "border-gray-700 hover:border-lime-500 hover:text-lime-400" : "border-gray-200 hover:border-lime-500 hover:text-lime-600"}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Card Visual */}
              <div className={`relative flex aspect-video items-center justify-center overflow-hidden ${dark ? "bg-gray-900" : "bg-gray-100"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-purple-500/10" />

                {isProjectsTab ? (
                  <Code2 size={52} strokeWidth={1.2} className={`relative transition duration-300 group-hover:scale-110 ${dark ? "text-gray-600 group-hover:text-lime-400" : "text-gray-400 group-hover:text-lime-600"}`} />
                ) : (
                  <Award size={52} strokeWidth={1.2} className={`relative transition duration-300 group-hover:scale-110 ${dark ? "text-gray-600 group-hover:text-lime-400" : "text-gray-400 group-hover:text-lime-600"}`} />
                )}

                <span className={`absolute bottom-4 left-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${dark ? "border-gray-700 bg-gray-950/90 text-gray-300" : "border-gray-200 bg-white/90 text-gray-600"}`}>
                  {item.category}
                </span>
              </div>

              {/* Card Information */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className={`text-xl font-bold transition ${dark ? "text-white group-hover:text-lime-400" : "text-gray-900 group-hover:text-lime-600"}`}>{item.name}</h3>

                <p className={`mt-3 flex-1 text-sm leading-7 ${dark ? "text-gray-400" : "text-gray-600"}`}>{item.description}</p>

                {/* Technologies / Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span key={technology} className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${dark ? "border-gray-800 bg-gray-900 text-gray-300" : "border-gray-200 bg-gray-50 text-gray-600"}`}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Card Link */}
                <a href={item.link} target="_blank" rel="noreferrer" className={`mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold transition hover:gap-3 ${dark ? "text-lime-400" : "text-lime-600"}`}>
                  {isProjectsTab ? "Lihat Proyek" : "Lihat Sertifikat"}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {activeItems.length === 0 && (
          <div className={`rounded-2xl border border-dashed p-12 text-center ${dark ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-500"}`}>
            <Award size={36} className="mx-auto mb-4 opacity-50" />
            <p className="font-medium">Belum ada {isProjectsTab ? "proyek" : "sertifikat"}.</p>
          </div>
        )}

        {/* See More / See Less */}
        {hasMoreItems && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
              className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition ${
                dark ? "border-gray-700 text-gray-200 hover:border-lime-500 hover:bg-lime-500/10 hover:text-lime-400" : "border-gray-300 text-gray-800 hover:border-lime-500 hover:bg-lime-50 hover:text-lime-700"
              }`}
            >
              {showAll ? "See Less" : "See More"}

              <ArrowDown size={17} className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
