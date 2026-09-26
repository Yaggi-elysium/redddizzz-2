import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const INSTAGRAM_LINK = 'https://www.instagram.com/elysium_ai_/';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-[#E4E0F0] bg-[#F7F6FB]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img src="/elysium_ai_logo.png" alt="Elysium AI" className="h-16 w-16 object-contain" />
              <div>
                <div className="font-black tracking-[0.14em] text-[#14102A]">ELYSIUM AI</div>
                <div className="text-xs font-semibold text-[#6E6690]">Automate · Innovate · Dominate</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#6E6690]">AI and workflow automation systems for service businesses and growing teams.</p>
          </div>

          <div>
            <div className="text-sm font-black text-[#14102A]">Contact</div>
            <div className="mt-5 space-y-3 text-sm text-[#6E6690]">
              <a href="tel:+917075033013" className="flex items-center gap-2 hover:text-[#3C2484]"><Phone className="h-4 w-4" /> +91 7075033013</a>
              <a href="mailto:hi@dtrmine.com" className="flex items-center gap-2 hover:text-[#3C2484]"><Mail className="h-4 w-4" /> hi@dtrmine.com</a>
              <a href="mailto:yagnnendra@dtrmine.com" className="flex items-center gap-2 hover:text-[#3C2484]"><Mail className="h-4 w-4" /> yagnnendra@dtrmine.com</a>
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Hyderabad, India</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-black text-[#14102A]">Follow</div>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#3C2484] hover:text-[#0084CC]">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#E4E0F0] pt-6 text-xs text-[#80789A] sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Elysium AI™. All rights reserved.</span>
          <span>elysiumai.website</span>
        </div>
      </div>
    </footer>
  );
}
