import { Briefcase, Calendar, Clock } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-50 dark:bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
            Experience
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy dark:text-white">
            Experience
          </h2>
          <p className="mt-3 text-muted dark:text-slate-400">
            Internships and hands-on programs building real AI/ML and software
            experience.
          </p>
        </Reveal>

        <div className="mt-10 relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-brand-100 dark:bg-white/10 -translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const upcoming = exp.status === 'Upcoming';
              const left = i % 2 === 0;
              return (
                <Reveal
                  key={exp.org}
                  delay={i * 100}
                  className={`relative flex sm:items-center ${
                    left ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-4 border-bg dark:border-navy ${
                        upcoming
                          ? 'bg-amber-400'
                          : 'bg-brand-500'
                      }`}
                    >
                      <Briefcase size={14} className="text-white" />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      left ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="rounded-3xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl shadow-card p-5 sm:p-6 transition-all hover:shadow-soft hover:-translate-y-0.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h3 className="font-semibold text-navy dark:text-white">
                          {exp.role}
                        </h3>
                        {upcoming && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 text-xs font-semibold px-2.5 py-1">
                            <Clock size={12} /> Upcoming
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                        {exp.org}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted dark:text-slate-400">
                        <Calendar size={13} />
                        {exp.period}
                      </p>
                      <p className="mt-3 text-sm text-muted dark:text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
