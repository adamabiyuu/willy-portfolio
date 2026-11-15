type Props = {
  dark: boolean;
};

export default function Quote({ dark }: Props) {
  return (
    <section className={`flex min-h-[300px] w-full items-center justify-center px-6 py-20 text-center ${dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center">
        <h2 className="text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl">"Whatever you are, be a good one."</h2>

        <p className={`mt-6 text-sm font-medium tracking-widest sm:text-base ${dark ? "text-gray-400" : "text-gray-500"}`}>— Abraham Lincoln</p>
      </div>
    </section>
  );
}
