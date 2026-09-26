const tech = ['GoHighLevel', 'Make', 'n8n', 'OpenAI', 'Twilio', 'WhatsApp', 'APIs & Webhooks', 'Google Sheets', 'Supabase', 'Calendly', 'Stripe', 'Custom CRM integrations', 'List goes on...'];

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.18em] text-[#0084CC]">Technology stack</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#14102A] sm:text-5xl">One orchestration layer. Whatever integrations the workflow needs.</h2>
          </div>
          <p className="text-lg leading-8 text-[#6E6690] lg:max-w-xl lg:justify-self-end">You don't need to know any of this. That's our job. But have a peek, just in case.</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {tech.map((item, index) => (
            <div key={item} className={`rounded-2xl border px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 ${index % 3 === 0 ? 'border-[#CFE9F6] bg-[#F2FAFD] text-[#0076B7]' : index % 3 === 1 ? 'border-[#DDD6F0] bg-[#F7F4FC] text-[#3C2484]' : 'border-[#E4E0F0] bg-[#FCFBFE] text-[#544D70]'}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
