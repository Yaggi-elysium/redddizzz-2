import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href="tel:+917075033013" aria-label="Call Elysium AI" className="grid h-12 w-12 place-items-center rounded-full border border-[#E4E0F0] bg-white text-[#3C2484] shadow-[0_10px_28px_rgba(35,25,72,.16)] transition hover:-translate-y-1">
        <Phone className="h-5 w-5" />
      </a>
      <a href="https://wa.me/917075033013?text=Hi%20I%20am%20interested%20in%20automation%20services" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,.25)] transition hover:-translate-y-1">
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
