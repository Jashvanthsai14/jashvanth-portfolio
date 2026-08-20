import { ArrowRight, UserRound, Code2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { profile, techStack } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="about" className="py-3 lg:py-4">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="glass-card rounded-[1.35rem] p-5 sm:p-6">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="lg:border-r lg:border-brand-100 lg:pr-8 dark:lg:border-white/10">
              <h2 className="flex items-center gap-2.5 text-lg font-bold text-navy dark:text-white sm:text-xl">
                <UserRound size={20} className="text-brand-500" />
                About Me
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted dark:text-slate-400">
                {profile.about}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-brand-600 transition-all hover:-translate-y-0.5 hover:bg-brand-50 dark:border-white/10 dark:bg-white/5 dark:text-brand-300"
              >
                More About Me
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="lg:pl-1">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-navy dark:text-white sm:text-xl">
                <Code2 size={20} className="text-brand-500" />
                Tech Stack
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {techStack.map((tech) => {
                  const Icon =
                    (Icons as unknown as Record<string, Icons.LucideIcon>)[
                      tech.icon
                    ] ?? Icons.Code;
                  return (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-2.5 rounded-xl border border-brand-100/90 bg-white/70 p-2.5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:group-hover:bg-brand-500/20">
                        <Icon size={18} />
                      </span>
                      <span className="text-xs font-medium text-navy dark:text-slate-200 sm:text-[13px]">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
