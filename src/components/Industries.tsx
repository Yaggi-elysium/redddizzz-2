const builds = [
  ['Faster lead response, automatically', 'Speed-to-lead automation + email newsletter flows', 'Herbal Life Franchise · India'],
  ['Renewal reminders without manual chasing', 'WhatsApp reminders, announcements & campaigns', 'Star Fitness Studio · India'],
  ['Answers questions and shows the catalog — 24/7', 'WhatsApp automation with live catalog display', 'Lahari Boutique · India'],
  ['Invoice data flows without manual copy-paste', 'Automated invoice-to-Google-Sheets backend flow', 'Physio Center · UK'],
  ['More structured lead follow-up', 'Automated WhatsApp + SMS campaigns', 'CA Firm · India'],
  ['Cart recovery and upsells in one flow', 'WhatsApp agent: campaigns, upsells, cart recovery', 'Tones Fashion · India'],
  ['New enquiries get followed up faster', 'Speed-to-lead + WhatsApp campaigns', 'Shreem Couture · Dubai, UAE'],
  ['Review requests handled automatically', 'Google review automation', 'Rachitha Academy · India'],
  ['A simpler path to more customer reviews', 'Google review automation', 'Sri Jagadeeshwar Sanitary Mart · India'],
  ['Lead response, ordering and upsells connected', 'Speed-to-lead + ordering infrastructure + upsells', 'ROR Fashion · India'],
  ['A connected concierge experience', 'Concierge automation + smart website assistant + follow-ups', 'Padosi Pro · USA'],
  ['Review collection made consistent', 'Google review automation', 'Plaza Cafe · USA'],
  ['Repeat-customer campaigns on schedule', 'Automated offer campaigns', 'Books Cafe · India'],
  ['Instagram interest turned into leads', 'Instagram automation lead magnet', 'House Roots Cafe · USA'],
  ['Booking conversations without phone-tag', 'Voice AI + website chatbot', 'Lavan Dental · USA'],
  ['Ordering, reminders and monthly upsells connected', 'Full order system + reminders + monthly upsells', 'Suvarna Spices · Dubai, UAE'],
];

export default function Industries() {
  const rowOne = builds.slice(0, 8);
  const rowTwo = builds.slice(8);

  return (
    <section id="work" className="overflow-hidden bg-[#F7F6FB] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-[#3C2484]">What we built</div>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#14102A] sm:text-5xl">Systems across industries, markets and workflows.</h2>
          <p className="mt-5 text-lg leading-8 text-[#6E6690]">A snapshot of automation systems we have designed and built across lead response, messaging, reviews, ordering and internal operations.</p>
        </div>
      </div>

      <div className="relative mt-14 space-y-5">
        <EdgeFade side="left" />
        <EdgeFade side="right" />
        <MarqueeRow items={rowOne} direction="left" />
        <MarqueeRow items={rowTwo} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction }: { items: string[][]; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-shell">
      <div className={`marquee-track ${direction === 'right' ? 'marquee-reverse' : ''}`}>
        {doubled.map((item, index) => (
          <article key={`${item[2]}-${index}`} className="marquee-card">
            <div className="text-[20px] font-black leading-snug tracking-[-0.02em] text-[#0084CC]">{item[0]}</div>
            <div className="mt-3 text-sm leading-6 text-[#14102A]">{item[1]}</div>
            <div className="mt-5 text-sm font-bold text-[#766D98]">{item[2]}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

function EdgeFade({ side }: { side: 'left' | 'right' }) {
  return <div className={`pointer-events-none absolute bottom-0 top-0 z-10 w-20 sm:w-36 ${side === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} from-[#F7F6FB] to-transparent`} />;
}
