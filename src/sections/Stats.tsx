import * as Icons from 'lucide-react';
import { stats } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

export default function Stats() {
  return (
    <section className="py-3 lg:py-4">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="glass-card rounded-[1.35rem] px-5 py-4 sm:px-7 sm:py-5">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[
                  stat.icon
                ] ?? Icons.Award;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3.5 ${
                    i !== stats.length - 1
                      ? 'lg:border-r lg:border-brand-100 dark:lg:border-white/10'
                      : ''
                  } ${i === 1 ? 'border-r border-brand-100 dark:border-white/10 lg:border-r-0' : ''}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className="text-2xl font-extrabold tracking-tight text-navy dark:text-white sm:text-[1.7rem]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-muted dark:text-slate-400 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
