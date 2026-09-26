import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const CALENDLY_LINK = 'https://cal.com/elysiumai/automation-audit';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'What we do', href: '#services' },
    { label: 'What we built', href: '#work' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Why us', href: '#why-us' },
    { label: 'Tech', href: '#tech-stack' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F7F6FB]/90 backdrop-blur-xl border-b border-[#E4E0F0] shadow-sm' : 'bg-[#F7F6FB]/70 backdrop-blur-md'}`}>
                 <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Elysium AI home">
          <img src="/elysium_ai_logo.png" alt="Elysium AI" className="h-14 w-14 object-contain" />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-[0.14em] text-[#14102A]">ELYSIUM AI</div>
            <div className="text-xs font-medium text-[#6E6690]">Automation systems</div>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-[#5D567A] transition-colors hover:text-[#3C2484]">
              {link.label}
            </a>
          ))}
        </div>

        <a href={CALENDLY_LINK} target="_blank" rel="noreferrer" className="hidden rounded-xl bg-[#3C2484] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(60,36,132,.18)] transition hover:-translate-y-0.5 hover:bg-[#321d73] md:inline-flex">
          Book a call
        </a>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-[#E4E0F0] bg-white p-2 text-[#14102A] md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E4E0F0] bg-[#F7F6FB]/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-[#5D567A]">
                {link.label}
              </a>
            ))}
            <a href={CALENDLY_LINK} target="_blank" rel="noreferrer" className="mt-2 rounded-xl bg-[#3C2484] px-5 py-3 text-center text-sm font-bold text-white">
              Book a call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
