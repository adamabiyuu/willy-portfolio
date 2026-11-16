import { socialLinks } from "../data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full border
              border-gray-700
              bg-gray-900/50
              text-gray-300
              transition-all duration-300
              hover:-translate-y-1
              hover:border-lime-500/40
              hover:bg-gray-800
              hover:text-lime-500
              sm:h-14 sm:w-14
            "
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
}
