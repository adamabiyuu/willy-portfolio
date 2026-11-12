import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { portfolio } from "../data/portfolio";

type Props = {
  dark: boolean;
};

export default function Contact({ dark }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Pesan Portfolio dari ${name}`;
    const body = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;

    const mailtoUrl = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const inputClass = `w-full rounded-xl border px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 ${
    dark ? "border-gray-700 bg-gray-950 text-white" : "border-gray-300 bg-white text-gray-900"
  }`;

  return (
    <section id="contact" className={`w-full scroll-mt-24 border-t px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-14 2xl:px-20 ${dark ? "border-white/10 bg-gray-900/40" : "border-gray-200 bg-gray-50"}`}>
      <div className="mx-auto w-full max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-lime-600 dark:text-lime-400">HUBUNGI SAYA</p>

          {/* <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-gray-950"}`}>
            Punya ide menarik?
            <br />
            <span className="text-lime-600 dark:text-lime-400">Mari kita diskusikan.</span>
          </h2> */}

          <p className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-gray-400" : "text-gray-600"}`}>Isi formulir berikut untuk mengirim pesan, berdiskusi, berkolaborasi, atau menjajaki peluang pengembangan web.</p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className={`space-y-5 rounded-2xl border p-5 shadow-sm sm:p-8 ${dark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}`}>
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className={`mb-2 block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>
              Nama
            </label>

            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Masukkan nama kamu" value={name} onChange={(event) => setName(event.target.value)} className={inputClass} required maxLength={100} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className={`mb-2 block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>
              Email
            </label>

            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="nama@email.com" value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} required maxLength={254} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className={`mb-2 block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Tuliskan pesan kamu di sini..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={`${inputClass} min-h-36 resize-y`}
              rows={5}
              required
              maxLength={5000}
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-lime-300 sm:w-auto">
            <Send size={18} />
            Kirim Pesan
            <ArrowUpRight size={18} />
          </button>
        </form>

        {/* Direct email alternative */}
        <div className="mt-6 text-center">
          <a href={`mailto:${portfolio.email}`} className={`inline-flex items-center gap-2 text-sm font-medium transition hover:text-lime-600 ${dark ? "text-gray-400" : "text-gray-600"}`}>
            <Mail size={16} />
            Atau hubungi langsung melalui email
          </a>
        </div>
      </div>
    </section>
  );
}
