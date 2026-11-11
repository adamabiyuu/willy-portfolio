import SectionHeading from "../components/SectionHeading";

type Props = {
  dark: boolean;
};

const statistics = [
  {
    value: "0",
    label: "Years Experience",
  },
  {
    value: "5+",
    label: "Projects Complete",
  },

  {
    value: "0",
    label: "Organizations",
  },
];

export default function About({ dark }: Props) {
  return (
    <section id="about" className={`scroll-mt-24 border-t px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${dark ? "border-white/10 bg-gray-900/40" : "border-gray-200 bg-gray-50"}`}>
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading title="ABOUT ME" dark={dark} />

        {/* About Me Description */}
        <div className="mx-auto mt-10 max-w-3xl">
          <p className={`text-center text-base leading-8 sm:text-lg ${dark ? "text-gray-300" : "text-gray-600"}`} style={{ textAlign: "justify", textAlignLast: "center" }}>
            I’m Willyan Imarta, an Informatics Engineering graduate from UIN Maulana Malik Ibrahim Malang with a strong passion for Data Analysis and Data Science. I enjoy transforming raw data into meaningful insights through data
            processing, visualization, and machine learning. With hands-on experience in various data-driven projects, I am proficient in Python, SQL, Excel, and Power BI. I am a fast learner, analytical thinker, and adaptable individual
            who is eager to continuously develop my skills and contribute to solving real-world business problems through data.
          </p>
        </div>

        {/* Statistics */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3 sm:gap-8">
          {statistics.map((item) => (
            <div key={item.label} className={`flex flex-col items-center justify-center rounded-2xl border px-2 py-6 text-center transition-colors sm:py-8 ${dark ? "border-white/10 bg-gray-900/70" : "border-gray-200 bg-white"}`}>
              <h3 className="text-2xl font-bold text-lime-500 sm:text-4xl">{item.value}</h3>

              <p className={`mt-2 text-xs font-medium sm:text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
