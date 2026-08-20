import { ArrowRight, BrainCircuit, Code2, Target } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SocialLinks from '@/components/SocialLinks';
import naniImage from '@/nani.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#efedff] via-[#f4f2ff] to-white pb-5 pt-28 sm:pt-32 lg:pb-6 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-40 h-52 w-52 rounded-full bg-brand-200/45 blur-3xl" />
        <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="hero-dots absolute bottom-8 left-[45%] hidden h-36 w-44 lg:block" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-3 py-1 text-sm font-medium text-navy shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              {profile.greeting} <span aria-hidden="true">👋</span>
            </div>
            <h1 className="mt-4 max-w-[31rem] text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-navy dark:text-white sm:text-6xl lg:text-[3.55rem]">
              Achyuta <span className="text-gradient">Jashvanth</span> Sai
            </h1>
            <p className="mt-4 text-lg font-semibold text-navy dark:text-white sm:text-xl">
              <span className="text-gradient">AI &amp; Software Engineer</span>
            </p>
            <p className="mt-4 max-w-[25rem] text-sm leading-5 text-muted dark:text-slate-400 sm:text-[0.9rem]">
              {profile.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(112,102,208,.85)] transition-all hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-lg border border-brand-200 bg-white/85 px-4 py-2.5 text-sm font-semibold text-brand-600 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-50 dark:border-white/10 dark:bg-white/5 dark:text-brand-300"
              >
                Contact Me
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] animate-fade-in lg:mt-0">
            <div className="absolute -inset-6 rounded-[2rem] bg-brand-200/45 blur-3xl" />
            <div className="hero-frame relative h-[31rem] overflow-hidden rounded-[1.5rem] border border-brand-200/75 bg-white/55 p-2.5 sm:h-[32rem]">
              <div className="relative flex h-full flex-col items-center overflow-hidden rounded-[1.15rem] border border-white/80 bg-gradient-to-br from-brand-50/90 via-white/55 to-brand-100/80 px-5 pt-10 dark:border-white/10 dark:from-brand-900/30 dark:via-navy/40 dark:to-brand-800/25 sm:px-8">
                <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-white/60 blur-2xl" />
                <div className="absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-brand-200/45 blur-3xl" />

                <div className="relative rounded-full bg-brand-100/60 p-3 shadow-[0_0_0_1px_rgba(180,170,255,.35)] dark:bg-brand-900/40">
                  <img
                    src={naniImage}
                    alt="Nani"
                    className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72"
                  />
                </div>

              

                <div className="relative mt-7 flex w-full items-center justify-between border-t border-brand-100/70 pt-5 dark:border-white/10">
                  <div className="flex items-center gap-1">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100/70 text-brand-500 dark:bg-brand-900/40 dark:text-brand-300">
                      <Code2 size={23} />
                    </span>
                    <span>
                      <strong className="block text-sm text-navy dark:text-white">Code</strong>
                      <small className="text-xs text-slate-500 dark:text-slate-400">with logic</small>
                    </span>
                  </div>
                  <span className="h-9 w-px bg-brand-200/80 dark:bg-white/10" />
                  <div className="flex items-center gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100/70 text-brand-500 dark:bg-brand-900/40 dark:text-brand-300">
                      <BrainCircuit size={23} />
                    </span>
                    <span>
                      <strong className="block text-sm text-navy dark:text-white">Learn</strong>
                      <small className="text-xs text-slate-500 dark:text-slate-400">continuously</small>
                    </span>
                  </div>
                  <span className="h-9 w-px bg-brand-200/80 dark:bg-white/10" />
                  <div className="flex items-center gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100/70 text-brand-500 dark:bg-brand-900/40 dark:text-brand-300">
                      <Target size={23} />
                    </span>
                    <span>
                      <strong className="block text-sm text-navy dark:text-white">Build</strong>
                      <small className="text-xs text-slate-500 dark:text-slate-400">with purpose</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 right-[-0.25rem] flex items-center gap-2.5 rounded-xl border border-brand-100 bg-white/95 px-3.5 py-2.5 shadow-card dark:border-white/10 dark:bg-navy/90 sm:right-[-1.5rem]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="max-w-[6.5rem] text-xs font-semibold leading-4 text-navy dark:text-white">
                {profile.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
