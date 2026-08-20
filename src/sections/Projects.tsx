import { Star, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-50 dark:bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
            Projects
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-muted dark:text-slate-400">
            Real-world applications blending AI, full-stack engineering, and
            thoughtful product design.
          </p>
        </Reveal>

        {/* Featured project */}
        {featured && (
          <Reveal className="mt-10">
            <div className="relative overflow-hidden rounded-4xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl shadow-card p-6 sm:p-10">
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-100/50 dark:bg-brand-500/10 blur-3xl" />
              <div className="relative grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-semibold px-3 py-1">
                      <Star size={12} /> Featured
                    </span>
                    <span className="text-xs text-muted dark:text-slate-400">
                      Flagship Project
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-navy dark:text-white">
                    {featured.title}
                  </h3>
                  <p className="mt-1 text-lg text-brand-600 dark:text-brand-300 font-medium">
                    {featured.subtitle}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg bg-brand-50 dark:bg-white/5 border border-brand-100 dark:border-white/10 px-2.5 py-1 text-xs font-medium text-brand-700 dark:text-brand-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {featured.description.map((d) => (
                      <li
                        key={d}
                        className="flex gap-2.5 text-sm sm:text-base text-muted dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-brand-500"
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2">
                  <div className="rounded-3xl border border-brand-100 dark:border-white/10 bg-gradient-to-br from-brand-50 to-brand-100/60 dark:from-brand-900/30 dark:to-navy/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                      Product Highlights
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {featured.features?.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2.5 rounded-xl bg-white/80 dark:bg-white/5 border border-brand-100 dark:border-white/10 px-3.5 py-2.5"
                        >
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500 text-white text-xs font-bold">
                            {f.charAt(0)}
                          </span>
                          <span className="text-sm font-medium text-navy dark:text-white">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        )}

        {/* Other projects */}
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className="group flex flex-col rounded-3xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl shadow-card p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-soft hover:border-brand-200 dark:hover:border-brand-500/40"
            >
              <h3 className="text-xl font-bold text-navy dark:text-white">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-brand-600 dark:text-brand-300 font-medium">
                {p.subtitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-brand-50 dark:bg-white/5 border border-brand-100 dark:border-white/10 px-2.5 py-1 text-xs font-medium text-brand-700 dark:text-brand-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 flex-1">
                {p.description.map((d) => (
                  <li
                    key={d}
                    className="flex gap-2 text-sm text-muted dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-brand-500"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
