import { Bot, Cable, MessageCircleMore, PhoneCall, RefreshCcw, Workflow } from 'lucide-react';

const services = [
  { icon: MessageCircleMore, title: 'Lead response & follow-up', description: 'Respond to new enquiries quickly and keep follow-ups moving without relying on manual chasing.' },
  { icon: PhoneCall, title: 'Voice AI & missed-call recovery', description: 'Handle common inbound conversations, recover missed calls and route the right opportunities to your team.' },
  { icon: Bot, title: 'WhatsApp & website assistants', description: 'Answer questions, qualify leads, share information and guide customers toward the next step.' },
  { icon: RefreshCcw, title: 'Reactivation & campaigns', description: 'Reconnect with old leads, customers and dormant databases through structured outreach workflows.' },
  { icon: Workflow, title: 'Business workflow automation', description: 'Remove repetitive admin across reminders, reviews, data movement, notifications and internal handoffs.' },
  { icon: Cable, title: 'CRM & API integrations', description: 'Connect GoHighLevel, Make, n8n and other tools so your systems talk to each other cleanly.' },
];

export default function Features() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="What we do" title="Practical automation, not AI for the sake of AI." body="We focus on systems that improve response, remove repetitive work and help your team keep opportunities moving." />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-[24px] border border-[#E4E0F0] bg-[#FDFCFF] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CFC6E8] hover:shadow-[0_18px_45px_rgba(46,33,91,.08)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0084CC]/10 text-[#0084CC] transition group-hover:bg-[#3C2484] group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-black tracking-[-0.02em] text-[#14102A]">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#6E6690]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-[#0084CC]">{eyebrow}</div>
      <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#14102A] sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#6E6690]">{body}</p>
    </div>
  );
}
