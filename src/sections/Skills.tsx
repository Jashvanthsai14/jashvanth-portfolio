import * as Icons from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-50 dark:bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
            Skills
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-muted dark:text-slate-400">
            A blend of AI/ML expertise, full-stack fundamentals, and core
            computer science knowledge.
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon =
              (Icons as unknown as Record<string, Icons.LucideIcon>)[cat.icon] ??
              Icons.Code;
            return (
              <Reveal
                key={cat.title}
                delay={i * 80}
                className="group rounded-3xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft hover:border-brand-200 dark:hover:border-brand-500/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-semibold text-navy dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg bg-brand-50/70 dark:bg-white/5 border border-brand-100/60 dark:border-white/10 px-3 py-1.5 text-sm text-navy/80 dark:text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
