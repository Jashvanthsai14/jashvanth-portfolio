import { Award, Clock } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-50 dark:bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
            Certifications
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy dark:text-white">
            Certifications
          </h2>
          <p className="mt-3 text-muted dark:text-slate-400">
            Professional credentials and learning milestones in AI and software.
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => {
            const planned = cert.status === 'Planned';
            return (
              <Reveal
                key={cert.name}
                delay={i * 80}
                className="group flex flex-col rounded-3xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl shadow-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft hover:border-brand-200 dark:hover:border-brand-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                    <Award size={22} />
                  </span>
                  {planned ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-2.5 py-1">
                       Earned
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-2.5 py-1">
                      Earned
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-semibold text-navy dark:text-white leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-brand-600 dark:text-brand-300 font-medium">
                  {cert.org}
                </p>
                <p className="mt-1 text-xs text-muted dark:text-slate-400">
                  {cert.year}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
