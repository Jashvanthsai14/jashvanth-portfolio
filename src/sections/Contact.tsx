import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) {
      next.message = 'Please enter a message.';
    } else if (form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError('');
    setSent(false);

    try {
      const response = await fetch('https://jashvanth-portfolio-backend.onrender.com/api/contact',  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Unable to send your message. Please try again.');
      }

      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setSubmitError('Unable to send your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white/80 dark:bg-white/5 px-4 py-3 text-sm text-navy dark:text-white placeholder-muted/60 dark:placeholder-slate-500 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-500/20 ${
      errors[field]
        ? 'border-red-300 dark:border-red-500/40'
        : 'border-brand-100 dark:border-white/10'
    }`;

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-50 dark:bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
            Contact
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy dark:text-white">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-muted dark:text-slate-400">
            I'm open to opportunities, collaborations, and interesting projects
            in AI, software development, and technology.
          </p>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <Reveal className="lg:col-span-2 rounded-3xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl shadow-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-navy dark:text-white">
              Get in touch
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-slate-400 leading-relaxed">
              Reach out through any of the channels below — I usually respond
              within a day.
            </p>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-xs text-muted dark:text-slate-400">
                    Email
                  </p>
                  <p className="text-sm font-medium text-navy dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <Linkedin size={20} />
                </span>
                <div>
                  <p className="text-xs text-muted dark:text-slate-400">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium text-navy dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20">
                  <Github size={20} />
                </span>
                <div>
                  <p className="text-xs text-muted dark:text-slate-400">
                    GitHub
                  </p>
                  <p className="text-sm font-medium text-navy dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    See my code
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs text-muted dark:text-slate-400">
                    Location
                  </p>
                  <p className="text-sm font-medium text-navy dark:text-white">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal
            delay={100}
            className="lg:col-span-3 rounded-3xl border border-brand-100 dark:border-white/10 bg-white/70 dark:bg-navy/50 backdrop-blur-xl shadow-card p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy dark:text-slate-200 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass('name')}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy dark:text-slate-200 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy dark:text-slate-200 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium px-5 py-3 transition-all hover:-translate-y-0.5 shadow-soft w-full sm:w-auto justify-center"
              >
                <Send size={16} />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
              {sent && (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 size={16} />
                  Message sent successfully!
                </div>
              )}
              {submitError && (
                <p className="text-sm text-red-500">{submitError}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
