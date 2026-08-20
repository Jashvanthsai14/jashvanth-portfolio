import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <nav
        className={`mx-auto w-full max-w-[1400px] rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-navy/80 backdrop-blur-xl border-brand-100 dark:border-white/10 shadow-soft'
            : 'bg-white/50 dark:bg-navy/40 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
          <a href="#home" className="group flex items-center">
            <span className="text-3xl font-extrabold tracking-[-0.08em] text-brand-500 transition-transform group-hover:scale-105">
              {profile.initials}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-brand-600 dark:text-brand-300 bg-brand-50 dark:bg-brand-500/10'
                    : 'text-navy/70 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50/60 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex h-10 w-14 items-center justify-center rounded-full border border-brand-200 bg-white/75 text-navy/70 shadow-soft transition-colors hover:bg-brand-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </span>
            </button>
            <a
              href={profile.cvUrl}
              download="Jashvanth_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-3.5 py-2 transition-colors shadow-soft"
            >
              <Download size={15} />
              Download CV
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-navy dark:text-white hover:bg-brand-50 dark:hover:bg-white/5"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-brand-100 dark:border-white/10 px-3 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-brand-600 dark:text-brand-300 bg-brand-50 dark:bg-brand-500/10'
                    : 'text-navy/70 dark:text-slate-300 hover:bg-brand-50/60 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              download="Jashvanth_Resume.pdf"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 text-white text-sm font-medium px-3.5 py-2.5 mt-2"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
