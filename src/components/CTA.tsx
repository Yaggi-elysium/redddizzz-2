import { ArrowRight, Phone } from 'lucide-react';

const CALENDLY_LINK = 'https://cal.com/elysiumai/automation-audit';
const PHONE_NUMBER = 'tel:+918881883006';

export default function CTA() {
  return (
    <section className="bg-white px-5 pb-24 pt-6 sm:px-6 sm:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#211451] px-6 py-16 text-center shadow-[0_30px_80px_rgba(33,20,81,.2)] sm:px-10 sm:py-20">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#0084CC]/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-[#6949C9]/35 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-[#75D4FF]">Ready to improve your business?</div>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Tell us what keeps getting repeated, missed or manually chased.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#D9D2EE]">We’ll look at your business and tell you where automation can genuinely help - and where it probably should not.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={CALENDLY_LINK} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-extrabold text-[#3C2484] transition hover:-translate-y-0.5">
              Book a free automation audit <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a href={PHONE_NUMBER} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-extrabold text-white transition hover:bg-white/15">
              <Phone className="h-5 w-5" /> Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
