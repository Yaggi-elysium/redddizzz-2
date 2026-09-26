import { Braces, Gauge, Handshake, Layers3, ShieldCheck, Wrench } from 'lucide-react';

const benefits = [
  { icon: Wrench, title: 'Built for your workflow', description: 'We adapt the system to the process instead of forcing your team into a generic template.' },
  { icon: Layers3, title: 'Works with your stack', description: 'We can sit on top of the tools you already use and connect them through APIs, webhooks and automation layers.' },
  { icon: Gauge, title: 'Focused on useful outcomes', description: 'Response time, follow-up, admin reduction and better handoffs matter more than showing off AI.' },
  { icon: Handshake, title: 'Human handoff matters', description: 'We design clear escalation paths so automation supports your team instead of getting in the way.' },
  { icon: Braces, title: 'Flexible technical delivery', description: 'GoHighLevel, Make, n8n, custom APIs, voice and messaging — selected based on the job.' },
  { icon: ShieldCheck, title: 'Measured claims, clear scope', description: 'We avoid inflated promises and define what the system will actually do before implementation.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#F7F6FB] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2484]">Why choose us</div>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#14102A] sm:text-5xl">Less theatre. More useful systems.</h2>
          <p className="mt-5 text-lg leading-8 text-[#6E6690]">The goal is simple: make the workflow clearer, faster and easier to operate.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-[24px] border border-[#E4E0F0] bg-white p-7 shadow-[0_8px_26px_rgba(46,33,91,.04)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0084CC]/10 text-[#0084CC]"><benefit.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-black text-[#14102A]">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6E6690]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
