import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-50 dark:bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
            Education
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-muted dark:text-slate-400">
            Academic journey and achievements.
          </p>
        </Reveal>

        <div className="mt-10 max-w-3xl mx-auto space-y-4">
          {education.map((edu, i) => (
            <Reveal
              key={edu.institution}
              delay={i * 80}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-3xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl shadow-card p-5 sm:p-6 transition-all hover:shadow-soft hover:-translate-y-0.5 hover:border-brand-200 dark:hover:border-brand-500/40"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <GraduationCap size={26} />
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-navy dark:text-white">
                  {edu.institution}
                </h3>
                <p className="mt-0.5 text-sm text-muted dark:text-slate-400">
                  {edu.degree}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted dark:text-slate-400">
                  <Calendar size={13} />
                  {edu.period}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="inline-block rounded-xl bg-brand-50 dark:bg-brand-500/10 px-3.5 py-1.5 text-sm font-semibold text-brand-700 dark:text-brand-200">
                  {edu.score}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
