import SectionHeading from "../components/SectionHeading";
import ExperienceTimeline from "./ExperienceTimeline";

type Props = {
  dark: boolean;
};

export default function Experience({ dark }: Props) {
  return (
    <section id="experience" className={`scroll-mt-24 border-t px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${dark ? "border-white/10" : "border-gray-200"}`}>
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading eyebrow="MY JOURNEY" title="Experience" description="My professional journey, practical experience, and continuous learning in the field of data science and technology." dark={dark} />

        <div className="mt-12 sm:mt-16">
          <ExperienceTimeline dark={dark} />
        </div>
      </div>
    </section>
  );
}
