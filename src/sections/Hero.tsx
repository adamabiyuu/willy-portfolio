import { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { portfolio } from "../data/portfolio";

const roles = ["Data Analyst", "Data Scientist"];

type HeroProps = {
  dark: boolean;
};

export default function Hero({ dark }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 45 : 90;

    // Beri jeda saat satu role selesai diketik
    if (!isDeleting && displayedRole === currentRole) {
      delay = 1600;
    }

    // Beri jeda singkat sebelum mengetik role berikutnya
    if (isDeleting && displayedRole === "") {
      delay = 300;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedRole === currentRole) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayedRole === "") {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsDeleting(false);
        return;
      }

      if (isDeleting) {
        setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
      } else {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative flex w-full scroll-mt-20 items-center px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100svh-72px)] lg:px-10 lg:py-10 xl:px-14 2xl:px-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {/* Konten kiri */}
        <div className="flex min-w-0 flex-col items-start">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-sm font-medium text-lime-600 dark:text-lime-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for opportunities
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-lime-600 dark:text-lime-400">{portfolio.name}</span>
          </h1>

          {/* Typing effect yang responsif */}
          <h2 className={`mt-4 min-h-[2.5rem] text-xl font-semibold sm:min-h-[3rem] sm:text-2xl ${dark ? "text-white" : "text-gray-950"}`} aria-label={roles[roleIndex]}>
            <span>{displayedRole}</span>
            <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-0.5 animate-pulse bg-lime-600 dark:bg-lime-400" aria-hidden="true" />
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">
            Informatics Engineering graduate from UIN Maulana Malik Ibrahim Malang with a strong interest in Data Analysis and Data Science. Skilled in Python, SQL, Excel, and Power BI for data processing, analysis, and visualization.
          </p>

          {/* Tombol aksi */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
              View Projects
              <ArrowDown size={17} />
            </a>
            <a href="/cv.pdf" download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-lime-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-lime-700">
              <Download size={18} />
              Download CV
            </a>

            {/* <a href="#contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
              Contact Me
              <ArrowRight size={17} />
            </a> */}
          </div>
        </div>

        {/* Foto kanan */}
        <div className="relative min-w-0 self-stretch">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl sm:max-w-md md:mx-0 md:ml-auto md:aspect-auto md:h-full md:max-w-none dark:border-gray-800 dark:bg-gray-900">
            <img
              src="/images/profile.jpg"
              alt={`Foto profil ${portfolio.name}`}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 -z-0 flex items-center justify-center text-7xl font-bold text-gray-400">{portfolio.name.charAt(0)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
