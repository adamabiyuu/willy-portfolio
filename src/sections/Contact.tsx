import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, Send } from "lucide-react";

type Props = {
  dark: boolean;
};

export default function Contact({ dark }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email configuration is incomplete.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        publicKey,
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email sending failed:", error);

      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClass = `w-full rounded-xl border px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 ${
    dark ? "border-gray-700 bg-gray-950 text-white" : "border-gray-300 bg-white text-gray-900"
  }`;

  return (
    <section id="contact" className={`w-full scroll-mt-24 border-t px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-14 2xl:px-20 ${dark ? "border-white/10 bg-gray-900/40" : "border-gray-200 bg-gray-50"}`}>
      <div className="mx-auto w-full max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-3xl font-extrabold tracking-tight text-lime-600 dark:text-lime-400 sm:text-4xl lg:text-5xl">GET IN TOUCH</p>

          <p className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-gray-400" : "text-gray-600"}`}>
            Fill out the form below to send a message, discuss ideas, collaborate, or explore web development opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={`space-y-5 rounded-2xl border p-5 shadow-sm sm:p-8 ${dark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-white"}`}>
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className={`mb-2 block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>
              Name
            </label>

            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} className={inputClass} required maxLength={100} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className={`mb-2 block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>
              Email Address
            </label>

            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} required maxLength={254} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className={`mb-2 block text-sm font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message here..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={`${inputClass} min-h-36 resize-y`}
              rows={5}
              required
              maxLength={5000}
            />
          </div>

          {/* Status Message */}
          {status && (
            <div role="status" aria-live="polite" className={`rounded-xl p-4 text-sm font-medium ${status.type === "success" ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <Send size={18} />
            {isSending ? "Sending..." : "Send Message"}
            {!isSending && <ArrowUpRight size={18} />}
          </button>
        </form>

        {/* Direct Email Alternative */}
        <div className="mt-6 text-center">
          <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || ""}`} className={`inline-flex items-center gap-2 text-sm font-medium transition hover:text-lime-600 ${dark ? "text-gray-400" : "text-gray-600"}`}>
            <Mail size={16} />
            Or contact me directly via email
          </a>
        </div>
      </div>
    </section>
  );
}
