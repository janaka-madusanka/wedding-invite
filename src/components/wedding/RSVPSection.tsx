import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", guests: "1", attending: "yes", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "RSVP Received! 💕", description: "Thank you for your response. We can't wait to celebrate with you!" });
    setForm({ name: "", email: "", phone: "", guests: "1", attending: "yes", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-background border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-wedding-blush-deep/30 focus:border-wedding-blush-deep transition-all duration-300";

  return (
    <section id="rsvp" className="wedding-section bg-background">
      <div ref={ref} className={`wedding-container max-w-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <p className="font-script text-3xl gold-text mb-2">Be Our Guest</p>
          <h2 className="wedding-heading">RSVP</h2>
          <div className="section-divider mt-4" />
          <p className="font-sans text-sm text-muted-foreground mt-4 font-light">Kindly respond by November 1, 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="wedding-card space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Full Name *</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your full name" />
            </div>
            <div>
              <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Email *</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Phone Number</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+94 XX XXX XXXX" />
            </div>
            <div>
              <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Number of Guests</label>
              <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass}>
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-3">Will you attend? *</label>
            <div className="flex gap-4">
              {[
                { value: "yes", label: "Joyfully Accept" },
                { value: "no", label: "Regretfully Decline" },
              ].map((opt) => (
                <label key={opt.value} className={`flex-1 text-center py-3 rounded-xl border cursor-pointer font-sans text-sm transition-all duration-300 ${form.attending === opt.value ? "border-wedding-blush-deep bg-wedding-blush/20 text-foreground" : "border-border text-muted-foreground hover:border-wedding-blush"}`}>
                  <input type="radio" name="attending" value={opt.value} checked={form.attending === opt.value} onChange={(e) => setForm({ ...form, attending: e.target.value })} className="sr-only" />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs tracking-widest uppercase text-muted-foreground mb-2">Special Message</label>
            <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass} placeholder="Any dietary requirements or a message for the couple..." />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-wedding-blush-deep text-primary-foreground font-sans text-sm tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
          >
            <Send size={16} />
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
