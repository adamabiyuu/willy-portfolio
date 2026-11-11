type SectionHeadingProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, dark }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-lime-500">{eyebrow}</p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-lime-500">{title}</h2>

      <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
    </div>
  );
}
