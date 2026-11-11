import { useState } from "react";
import { experiences } from "../data/portfolio";
import ExperienceItem from "./ExperienceItem";

type Props = {
  dark: boolean;
};

const EXPERIENCE_LIMIT = 3;

export default function ExperienceTimeline({ dark }: Props) {
  const [showAll, setShowAll] = useState(false);

  const hasMoreExperiences = experiences.length > EXPERIENCE_LIMIT;

  const displayedExperiences = showAll ? experiences : experiences.slice(0, EXPERIENCE_LIMIT);

  return (
    <>
      <div
        className="
          mx-auto
          max-w-5xl
          space-y-10
          sm:space-y-12
          lg:space-y-16
        "
      >
        {displayedExperiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} dark={dark} />
        ))}
      </div>

      {hasMoreExperiences && (
        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="
              rounded-xl
              bg-lime-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-lime-700
              hover:shadow-lg
              hover:shadow-lime-500/20
            "
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </>
  );
}
