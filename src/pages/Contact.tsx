import { useState, FormEvent, ChangeEvent } from "react";
import { Phone, MapPin, Globe, Mail, Upload } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";
import { useToast } from "@/hooks/use-toast";

type Stage = "Exploring" | "In approvals" | "In delivery" | "";
type Objective = "Value uplift" | "Brand strategy" | "Entitlements" | "Fastest path to revenue";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  propertyAddress: string;
  stage: Stage;
  objectives: Objective[];
  message: string;
  file: File | null;
}

const stages: Stage[] = ["Exploring", "In approvals", "In delivery"];
const objectives: Objective[] = ["Value uplift", "Brand strategy", "Entitlements", "Fastest path to revenue"];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 transition placeholder:text-muted-foreground/50";
const labelClass = "block text-xs font-bold uppercase tracking-wide text-foreground mb-2";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    propertyAddress: "",
    stage: "",
    objectives: [],
    message: "",
    file: null,
  });

  const set = (field: keyof FormState, value: FormState[keyof FormState]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleObjective = (obj: Objective) => {
    setForm((prev) => ({
      ...prev,
      objectives: prev.objectives.includes(obj)
        ? prev.objectives.filter((o) => o !== obj)
        : [...prev.objectives, obj],
    }));
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    set("file", file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received",
      description: "We typically respond within one business day.",
    });
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      propertyAddress: "",
      stage: "",
      objectives: [],
      message: "",
      file: null,
    });
  };

  return (
    <>
      {/* Hero */}
      <PageTitleSection>
        <AnimatedSection className="max-w-3xl">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Contact</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
            Get in Touch to Discuss Your Land Asset.
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Share your property details and objectives. BTN will outline a proforma-grounded pathway to unlock value, align brand strategy, and execute with the right team.
          </p>
        </AnimatedSection>
      </PageTitleSection>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16">
            {/* Contact info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={17} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@BTNpro.ca" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      info@BTNpro.ca
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={17} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:7786886089" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      (778) 688-6089
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={17} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">73 East 6th Avenue<br />Vancouver, BC V5T 1J3</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                    <Globe className="text-white" size={17} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">Website</h3>
                    <a
                      href="https://www.BTNpro.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      www.BTNpro.ca
                    </a>
                  </div>
                </div>

                {/* Confidence notes */}
                <div className="bg-surface rounded-xl p-6 border border-border space-y-3 mt-4">
                  <p className="text-xs text-muted-foreground/70 flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    We typically respond within one business day.
                  </p>
                  <p className="text-xs text-muted-foreground/70 flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    Information shared is treated as confidential.
                  </p>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-border mt-4">
                  <iframe
                    title="BTN Office – 73 East 6th Avenue Vancouver"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.6!2d-123.1!3d49.265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s73+East+6th+Avenue+Vancouver!5e0!3m2!1sen!2sca!4v1700000000000"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8 lg:p-10 border border-border space-y-6">
                <h2 className="text-lg font-black text-foreground mb-2">Start a Conversation</h2>

                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company <span className="normal-case font-normal text-muted-foreground">(optional)</span></label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone <span className="normal-case font-normal text-muted-foreground">(optional)</span></label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputClass}
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>

                {/* Property address */}
                <div>
                  <label htmlFor="propertyAddress" className={labelClass}>Property Address / Area</label>
                  <input
                    id="propertyAddress"
                    value={form.propertyAddress}
                    onChange={(e) => set("propertyAddress", e.target.value)}
                    className={inputClass}
                    placeholder="Street address, neighbourhood, or general area"
                  />
                </div>

                {/* Development stage */}
                <div>
                  <p className={labelClass}>Development Stage</p>
                  <div className="flex flex-wrap gap-3">
                    {stages.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => set("stage", form.stage === s ? "" : s)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors ${
                          form.stage === s
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-muted-foreground border-border hover:border-primary/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <p className={labelClass}>Objectives <span className="normal-case font-normal text-muted-foreground">(select all that apply)</span></p>
                  <div className="flex flex-wrap gap-3">
                    {objectives.map((o) => (
                      <button
                        key={o}
                        type="button"
                        onClick={() => toggleObjective(o)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-colors ${
                          form.objectives.includes(o)
                            ? "bg-accent text-accent-foreground border-accent"
                            : "bg-white text-muted-foreground border-border hover:border-accent/40"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project, land, or objectives..."
                  />
                </div>

                {/* PDF upload */}
                <div>
                  <p className={labelClass}>Attach a Document <span className="normal-case font-normal text-muted-foreground">(optional — PDF, max 10MB)</span></p>
                  <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-dashed border-border bg-white cursor-pointer hover:border-primary/40 transition-colors">
                    <Upload size={16} className="text-muted-foreground shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {form.file ? form.file.name : "Click to upload a PDF"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      onChange={handleFile}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
