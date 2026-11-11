type ExperienceItemProps = {
  experience: {
    id: number;
    year: string;
    duration: string;
    company: string;
    position: string;
    description: string[];
  };
  dark: boolean;
};

export default function ExperienceItem({ experience, dark }: ExperienceItemProps) {
  return (
    <div
      className="
        grid
        gap-5
        md:grid-cols-[90px_40px_1fr]
        md:gap-6
      "
    >
      {/* Mobile Year */}
      <div className="flex items-center gap-3 md:hidden">
        <div className="h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.6)]" />

        <span className="text-base font-bold text-lime-500">{experience.year}</span>
      </div>

      {/* Desktop Year */}
      <div className="hidden md:block md:text-right">
        <span className="text-lg font-bold text-lime-500">{experience.year}</span>
      </div>

      {/* Desktop Timeline Dot */}
      <div className="hidden justify-center pt-2 md:flex">
        <div className="h-4 w-4 rounded-full bg-lime-500 shadow-[0_0_12px_rgba(132,204,22,0.6)]" />
      </div>

      {/* Experience Card */}
      <article
        className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
          dark ? "border-white/10 bg-gray-900/60 hover:border-lime-500/30 hover:bg-gray-900" : "border-gray-200 bg-white hover:border-lime-500/50 hover:shadow-lg"
        }`}
      >
        {/* Decorative Line */}
        <div className={`mb-6 hidden h-px w-full md:block ${dark ? "bg-gray-700" : "bg-gray-200"}`} />

        {/* Position */}
        <h3 className={`text-xl font-bold sm:text-2xl ${dark ? "text-white" : "text-gray-900"}`}>{experience.position}</h3>

        {/* Company */}
        <p className="mt-2 font-semibold text-lime-500">{experience.company}</p>

        {/* Duration */}
        <p className={`mt-2 text-sm ${dark ? "text-gray-500" : "text-gray-500"}`}>{experience.duration}</p>

        {/* Description - Bullet Points */}
        <ul className={`mt-5 list-disc space-y-2.5 pl-5 text-sm leading-7 sm:text-base ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {experience.description.map((item, index) => (
            <li key={index} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
