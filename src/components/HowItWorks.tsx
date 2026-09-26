import { Blocks, Crosshair, Rocket, Search } from 'lucide-react';

const steps = [
  { icon: Search, number: '01', title: 'Understand', description: 'We map the current process, bottlenecks, tools and handoffs before touching the automation.' },
  { icon: Crosshair, number: '02', title: 'Design', description: 'We define what should happen, what should stay human and how success will be measured.' },
  { icon: Blocks, number: '03', title: 'Build & integrate', description: 'We connect the CRM, messaging, AI, APIs and workflows around the process you already use.' },
  { icon: Rocket, number: '04', title: 'Launch & improve', description: 'We test edge cases, deploy carefully and refine the system from real usage and feedback.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.18em] text-[#0084CC]">How it works</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#14102A] sm:text-5xl">Built around the business, not around the tool.</h2>
            <p className="mt-5 text-lg leading-8 text-[#6E6690]">We start with the workflow first. Technology comes second.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="rounded-[24px] border border-[#E4E0F0] bg-[#FCFBFE] p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#3C2484] text-white"><step.icon className="h-5 w-5" /></div>
                  <div className="text-sm font-black text-[#B5AEC9]">{step.number}</div>
                </div>
                <h3 className="mt-7 text-xl font-black text-[#14102A]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6E6690]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
