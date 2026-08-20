import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

type Size = number;

export default function SocialLinks({ size = 18 }: { size?: Size }) {
  const links = [
    { href: profile.github, Icon: Github, label: 'GitHub' },
    { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
  ];
  return (
    <div className="flex items-center gap-2.5">
      {links.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white/75 text-navy/70 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
