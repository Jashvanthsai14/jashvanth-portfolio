import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-brand-100 dark:border-white/10 bg-white/60 dark:bg-navy/40 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted dark:text-slate-400 text-center sm:text-left">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-navy/70 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-white/5 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-navy/70 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-white/5 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-navy/70 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-white/5 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
