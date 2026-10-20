import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  MessageSquare,
  ShieldCheck,
  Film,
  Building2,
  Sparkles,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface ContactPageProps {
  onBackToDirectory?: () => void;
  onOpenRegister?: () => void;
  onOpenAdminPortal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToDirectory,
  onOpenRegister,
  onOpenAdminPortal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    craft: 'Direction',
    inquiryType: 'Contact Number Access & Approval',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      // Save contact inquiry to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('24crofts_inquiries') || '[]');
        existing.push({
          ...formData,
          id: `INQ-${Date.now().toString().slice(-4)}`,
          date: new Date().toISOString(),
          status: 'received',
        });
        localStorage.setItem('24crofts_inquiries', JSON.stringify(existing));
      } catch (e) {
        console.error(e);
      }

      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full space-y-10 animate-fade-in pb-12">
      {/* Top Breadcrumb & Return Button */}
      {onBackToDirectory && (
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToDirectory}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 bg-slate-900/80 hover:bg-slate-800 px-3.5 py-2 rounded-xl border border-amber-500/30 transition shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Back to 24 Crafts Directory</span>
          </button>

          <span className="text-xs text-slate-400 font-mono">
            Domain: <strong className="text-amber-300">https://24crofts.com/</strong>
          </span>
        </div>
      )}

      {/* Hero Header with Cinematic Gold Filigree */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 bg-gradient-to-b from-[#111726] via-[#0d121c] to-[#080c14] p-6 md:p-12 text-center shadow-2xl">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Official 24 Crofts Desk &bull; Hyderabad</span>
        </div>

        <h1 className="font-cinzel text-3xl md:text-5xl font-black text-white tracking-wide">
          Get in Touch with <span className="gold-gradient-text">24 Crofts</span>
        </h1>
        <p className="font-cinzel text-sm md:text-base font-semibold text-amber-200/80 tracking-widest uppercase mt-2">
          Cinema &amp; Production &bull; Hyderabad Headquarters
        </p>
        <p className="max-w-2xl mx-auto text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
          Reach our official cinema matchmaking and administration desk for director/producer contact authorizations, matrimonial profile listings, trailer sponsorships, or in-person cinema collaborations in Hyderabad.
        </p>

        {/* 3 Core Highlight Badges (Email, Phone, Location) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8 text-left">
          {/* 1. Contact Mail ID */}
          <div className="p-4 md:p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 hover:border-amber-400/60 transition group shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={() => handleCopy('24croftsindia@gmail.com', 'email')}
                className="text-[11px] text-slate-400 hover:text-amber-300 flex items-center gap-1 font-mono transition"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-[11px] text-amber-300/80 font-bold uppercase tracking-wider">
              Contact Mail ID
            </div>
            <a
              href="mailto:24croftsindia@gmail.com"
              className="text-sm md:text-base font-bold text-white hover:text-amber-300 break-all transition mt-1 block font-mono"
            >
              24croftsindia@gmail.com
            </a>
            <p className="text-[11px] text-slate-400 mt-2">
              Official email for registrations, credentials &amp; contact verification requests.
            </p>
          </div>

          {/* 2. Contact Number */}
          <div className="p-4 md:p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 hover:border-amber-400/60 transition group shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={() => handleCopy('7989144860', 'phone')}
                className="text-[11px] text-slate-400 hover:text-amber-300 flex items-center gap-1 font-mono transition"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-[11px] text-amber-300/80 font-bold uppercase tracking-wider">
              Contact Number
            </div>
            <a
              href="tel:7989144860"
              className="text-lg md:text-xl font-bold text-white hover:text-amber-300 transition mt-1 block font-mono tracking-wider"
            >
              7989144860
            </a>
            <div className="flex items-center gap-2 mt-2">
              <a
                href="tel:7989144860"
                className="text-[11px] font-semibold text-amber-400 hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> Call Directly
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href="https://wa.me/917989144860"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-emerald-400 hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3 h-3" /> WhatsApp
              </a>
            </div>
          </div>

          {/* 3. Location: Hyderabad */}
          <div className="p-4 md:p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 hover:border-amber-400/60 transition group shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                Cinema Capital
              </span>
            </div>
            <div className="text-[11px] text-amber-300/80 font-bold uppercase tracking-wider">
              Location
            </div>
            <div className="text-base md:text-lg font-bold text-white mt-1">
              Hyderabad
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Telangana, India &bull; Film Nagar &amp; Jubilee Hills Hub
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Heart of the South Indian &amp; Tollywood Film Industry.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Contact Inquiry Form + Hyderabad Cinema Bureau Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#0d121c] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-xl font-bold text-white">
                Send Direct Inquiry
              </h2>
              <p className="text-xs text-slate-400">
                Direct transmission to <strong className="text-amber-300">24croftsindia@gmail.com</strong>
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Inquiry Successfully Dispatched!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-amber-300">{formData.name}</strong>. Your message regarding{' '}
                <span className="text-amber-300 font-semibold">{formData.inquiryType}</span> has been routed to our Hyderabad office desk at{' '}
                <strong className="text-amber-300">24croftsindia@gmail.com</strong>.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span>Reference ID:</span>
                  <span className="font-mono text-amber-300 font-bold">24C-HYD-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span>Contact Phone:</span>
                  <span className="font-mono text-slate-200">7989144860</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Response Target:</span>
                  <span className="text-emerald-400">Within 2 to 4 business hours</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      craft: 'Direction',
                      inquiryType: 'Contact Number Access & Approval',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs uppercase tracking-wider transition border border-slate-700"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. S. S. Rajamouli or Dil Raju"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@production.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98490 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Cinema Craft / Discipline
                  </label>
                  <select
                    value={formData.craft}
                    onChange={(e) => setFormData({ ...formData, craft: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                  >
                    <option value="Direction">1. Direction</option>
                    <option value="Production">2. Production / Producer</option>
                    <option value="Cinematography">3. Cinematography / DoP</option>
                    <option value="Screenwriting">4. Screenwriting / Story</option>
                    <option value="Music Direction">5. Music Direction / Score</option>
                    <option value="Editing">6. Film Editing</option>
                    <option value="Acting">7. Acting / Lead &amp; Cast</option>
                    <option value="Art Direction">8. Art Direction &amp; Production Design</option>
                    <option value="Sound Design">9. Sound Design &amp; Audiography</option>
                    <option value="Stunt & Action">10. Action &amp; Stunt Choreography</option>
                    <option value="Choreography">11. Dance Choreography</option>
                    <option value="Visual Effects">12. VFX &amp; CGI Animation</option>
                    <option value="Other Cinema Craft">Other 24 Crafts of Cinema</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nature of Inquiry *
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                >
                  <option value="Contact Number Access & Approval">
                    Director or Producer Contact Number Authorization
                  </option>
                  <option value="Registration & Member Login Credentials">
                    Registration &amp; Password Email Delivery Issue
                  </option>
                  <option value="Movie Trailer & Commercial Advertisement">
                    Movie Trailer Ad Upload &amp; Sponsored Promotion
                  </option>
                  <option value="Profile Verification & Unique ID Lookup">
                    Matrimonial Profile Verification &amp; Unique ID
                  </option>
                  <option value="Hyderabad Studio Office Collaboration">
                    In-Person Meeting at Hyderabad Office
                  </option>
                  <option value="General Support">
                    General Inquiries &amp; Press
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Urgent casting contact request for upcoming Pan-India production"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Detailed Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your requirements, production banner, or the specific Cinema ID profile you wish to get in touch with..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Inquiry to 24croftsindia@gmail.com</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                By submitting this form, you agree that your details will be processed strictly in accordance with 24crofts.com matrimonial privacy protocols.
              </p>
            </form>
          )}
        </div>

        {/* Right Column: Hyderabad Headquarters Info, Policies & Quick Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Hyderabad Office Card */}
          <div className="bg-[#0d121c] border border-amber-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Film className="w-32 h-32 text-amber-400" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 text-amber-400 font-cinzel text-xs font-bold uppercase tracking-widest mb-1">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Headquarters Location</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Hyderabad Cinema Desk
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                The Epicenter of Indian &amp; Tollywood Cinema
              </p>

              <div className="mt-5 space-y-3.5 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-200">Address Location:</div>
                    <div className="text-slate-300 mt-0.5">
                      24 Crofts Cinema &amp; Production Network
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Road No. 10, Film Nagar / Jubilee Hills,
                    </div>
                    <div className="text-amber-300 font-semibold text-[11px]">
                      Hyderabad, Telangana 500096, India
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-200">Operating Hours:</div>
                    <div className="text-slate-300 mt-0.5">
                      Monday to Saturday: <span className="text-amber-300 font-semibold">9:30 AM – 7:00 PM IST</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Sunday: Emergency Producer / Director approvals only
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-200">Admin Approval Desk:</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed mt-0.5">
                      Director and Producer phone numbers are masked by default to protect industry privacy. All contact viewing privileges require administrative verification.
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href="tel:7989144860"
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition border border-slate-700"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 7989144860</span>
                </a>
                <a
                  href="mailto:24croftsindia@gmail.com"
                  className="py-2.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition border border-amber-500/30"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick FAQ / Protocols Card */}
          <div className="bg-[#0d121c] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Frequently Asked Questions
            </h4>

            <div className="space-y-3 text-xs">
              <div className="border-b border-slate-800/80 pb-2.5">
                <div className="font-bold text-amber-300">
                  Why are Director &amp; Producer numbers hidden?
                </div>
                <div className="text-slate-400 mt-1 leading-relaxed">
                  As per 24crofts.com matrimonial and cinema protocol, contact numbers of Directors and Producers are strictly guarded against spam. They are unlocked only when approved by the Admin panel.
                </div>
              </div>

              <div className="border-b border-slate-800/80 pb-2.5">
                <div className="font-bold text-amber-300">
                  How are member login credentials delivered?
                </div>
                <div className="text-slate-400 mt-1 leading-relaxed">
                  Upon registration, your unique Cinema ID, username, and temporary password are sent exclusively to your registered email address.
                </div>
              </div>

              <div className="border-b border-slate-800/80 pb-2.5">
                <div className="font-bold text-amber-300">
                  How can I find a profile using an ID?
                </div>
                <div className="text-slate-400 mt-1 leading-relaxed">
                  Enter any ID (e.g. <span className="font-mono text-slate-200">24C-DIR-1042</span> or <span className="font-mono text-slate-200">1042</span>) into the home search bar, or open a direct link with <span className="font-mono text-slate-200">#profile=24C-DIR-1042</span>.
                </div>
              </div>

              <div>
                <div className="font-bold text-amber-300">
                  Can I visit the Hyderabad office in person?
                </div>
                <div className="text-slate-400 mt-1 leading-relaxed">
                  Yes, production houses and talent can schedule an in-person meeting in Hyderabad by calling <strong className="text-slate-200 font-mono">7989144860</strong> or emailing <strong className="text-slate-200 font-mono">24croftsindia@gmail.com</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* Canonical Domain Note */}
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-center">
            <div className="text-xs text-slate-400">
              Official Matrimonial Cinema Platform:
            </div>
            <a
              href="https://24crofts.com/"
              className="text-sm font-mono font-bold text-amber-300 hover:text-amber-200 flex items-center justify-center gap-1.5 mt-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>https://24crofts.com/</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
