import type { ReactNode } from 'react';
import { ArrowRight, Check, MessageSquareText, PhoneCall, Sparkles, Workflow } from 'lucide-react';

const CALENDLY_LINK = 'https://cal.com/elysiumai/automation-audit';
const INSTAGRAM_LINK = 'https://www.instagram.com/elysium_ai_/';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F7F6FB] pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#0084CC]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#3C2484]/10 blur-3xl" />

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 pb-20 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-28">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DDD8EC] bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#3C2484] shadow-sm">
            <Sparkles className="h-4 w-4 text-[#0084CC]" />
            AI automation studio
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-[#14102A] sm:text-6xl lg:text-[74px]">
            Automate the work that
            <span className="block text-[#0084CC]">slows your business down.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6E6690] sm:text-xl">
            We design AI-powered lead response, follow-up, voice, WhatsApp and workflow systems around the way your business already works.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={CALENDLY_LINK} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3C2484] px-6 py-4 text-base font-extrabold text-white shadow-[0_14px_32px_rgba(60,36,132,.22)] transition hover:-translate-y-0.5 hover:bg-[#321d73]">
              Book a free automation audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-[#DCD7EA] bg-white px-6 py-4 text-base font-extrabold text-[#3C2484] transition hover:border-[#3C2484]/30 hover:bg-[#FBFAFE]">
              See what we build
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#5F587C]">
            {['Built around your workflow', 'Connects with your existing tools', 'Human handoff when needed'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#0084CC]/10 text-[#0084CC]"><Check className="h-3.5 w-3.5" /></span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-7 rounded-[40px] bg-gradient-to-br from-[#0084CC]/12 via-white to-[#3C2484]/12 blur-2xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-[#DDD8EA] bg-white p-5 shadow-[0_30px_80px_rgba(37,28,78,.14)] sm:p-6">
            <div className="flex items-center justify-between border-b border-[#EEEAF5] pb-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#3C2484] text-white"><Workflow className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-extrabold text-[#14102A]">Lead recovery workflow</div>
                  <div className="text-xs text-[#80789A]">Example system</div>
                </div>
              </div>
              <span className="rounded-full bg-[#E9F8F1] px-3 py-1 text-xs font-bold text-[#20875E]">Running</span>
            </div>

            <div className="mt-5 space-y-3">
              <FlowRow icon={<PhoneCall className="h-5 w-5" />} title="Missed call detected" detail="New enquiry enters the system" accent="blue" />
              <Connector />
              <FlowRow icon={<MessageSquareText className="h-5 w-5" />} title="Instant response" detail="SMS / WhatsApp starts the conversation" accent="violet" />
              <Connector />
              <FlowRow icon={<Sparkles className="h-5 w-5" />} title="AI qualifies the lead" detail="Captures intent, context and next step" accent="blue" />
              <Connector />
              <FlowRow icon={<Check className="h-5 w-5" />} title="Team gets the opportunity" detail="CRM updated + follow-up triggered" accent="violet" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <MiniStat value="24/7" label="response" />
              <MiniStat value="1" label="connected flow" />
              <MiniStat value="0" label="manual copy-paste" />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-6 hidden rounded-2xl border border-[#E4E0F0] bg-white px-4 py-3 shadow-lg sm:block">
            <div className="text-xs font-semibold text-[#80789A]">Orchestration</div>
            <div className="mt-1 text-sm font-black text-[#14102A]">GHL · APIs · Voice · SMS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowRow({ icon, title, detail, accent }: { icon: ReactNode; title: string; detail: string; accent: 'blue' | 'violet' }) {
  const tone = accent === 'blue' ? 'bg-[#0084CC]/10 text-[#0084CC]' : 'bg-[#3C2484]/10 text-[#3C2484]';
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#ECE8F3] bg-[#FCFBFE] p-4">
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tone}`}>{icon}</div>
      <div>
        <div className="text-sm font-extrabold text-[#14102A]">{title}</div>
        <div className="mt-1 text-xs leading-5 text-[#746D8D]">{detail}</div>
      </div>
    </div>
  );
}

function Connector() {
  return <div className="ml-[21px] h-3 w-px bg-gradient-to-b from-[#0084CC]/40 to-[#3C2484]/40" />;
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-[#F7F6FB] px-3 py-4 text-center">
      <div className="text-lg font-black text-[#3C2484]">{value}</div>
      <div className="mt-1 text-[11px] font-semibold text-[#80789A]">{label}</div>
    </div>
  );
}
