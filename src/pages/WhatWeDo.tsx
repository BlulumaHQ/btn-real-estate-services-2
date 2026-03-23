import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Award, FileCheck, PencilRuler, HardHat } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";

const services = [
  {
    icon: BarChart3,
    slug: "hotel-positioning",
    label: "01",
    title: "Hotel Positioning & Proforma Strategy",
    desc: "BTN leads with the proforma. Before a concept is advanced, the numbers are tested—demand, revenue potential, cost parameters, and exit value. This ensures every strategic recommendation is financially grounded and defensible.",
    bullets: [
      "Highest-and-best-use evaluation for hospitality",
      "Market feasibility and demand analysis",
      "Revenue and cost scenario modelling",
      "Proforma structuring and sensitivity analysis",
      "Capital and financing pathway advisory",
    ],
  },
  {
    icon: Award,
    slug: "brand-strategy",
    label: "02",
    title: "Hotel Brand Strategy & Franchising",
    desc: "Brand selection is a capital decision. The wrong flag—or poorly negotiated franchise terms—can erode feasibility and reduce exit value. BTN positions brand strategy as an underwriting input, not a marketing afterthought.",
    bullets: [
      "Brand positioning aligned to market demand and ADR targets",
      "Franchise negotiations and term optimisation",
      "Key money and incentive structuring (where applicable)",
      "Brand technical requirements coordination",
      "Management agreement review and structuring",
    ],
  },
  {
    icon: FileCheck,
    slug: "entitlements",
    label: "03",
    title: "Entitlements & Approvals",
    desc: "Approvals risk is real estate risk. In Metro Vancouver, rezoning, Development Permit, and Building Permit processes require strategic navigation, stakeholder engagement, and credible project positioning. BTN has the local expertise and relationships to move projects forward.",
    bullets: [
      "Rezoning strategy and application support",
      "Development Permit navigation and coordination",
      "Building Permit readiness and pathway planning",
      "Municipal and stakeholder engagement",
      "Public hearing preparation and positioning",
    ],
  },
  {
    icon: PencilRuler,
    slug: "design-coordination",
    label: "04",
    title: "Design & Consultant Coordination",
    desc: "Hospitality design requires a different lens than residential or commercial. BTN coordinates architects, interior designers, MEP engineers, and specialist consultants through alliances with leading local firms—ensuring the design reflects brand standards, operational logic, and proforma discipline.",
    bullets: [
      "Architect and design team selection and briefing",
      "Hospitality-specific planning and efficiency review",
      "Value engineering and constructability input",
      "Brand standard compliance coordination",
      "Integrated consultant team management",
    ],
  },
  {
    icon: HardHat,
    slug: "delivery-execution",
    label: "05",
    title: "Delivery & Execution Support",
    desc: "Most advisory gaps open at the transition from approvals to construction. BTN bridges this gap—helping owners assemble the right build team, coordinate with the general contractor, and protect the proforma through delivery.",
    bullets: [
      "Build-team assembly and procurement support",
      "General contractor coordination and oversight",
      "Budget and schedule monitoring",
      "Proforma protection through construction",
      "Pre-opening planning and brand coordination",
    ],
  },
];

const pathway = [
  { step: "Positioning", desc: "Highest-and-best-use and market validation" },
  { step: "Proforma", desc: "Feasibility and financial structuring" },
  { step: "Brand", desc: "Flag selection and franchise negotiation" },
  { step: "Rezoning", desc: "Municipal strategy and approvals" },
  { step: "DP", desc: "Development Permit navigation" },
  { step: "BP", desc: "Building Permit readiness" },
  { step: "Delivery", desc: "Build-team and GC coordination" },
];

const WhatWeDo = () => (
  <>
    {/* Hero */}
    <PageTitleSection>
      <AnimatedSection className="max-w-3xl">
        <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">What We Do</p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
          Integrated Hospitality Development Services — Proforma First.
        </h1>
        <p className="text-white/65 text-lg max-w-2xl leading-relaxed mb-10">
          BTN supports landowners across the full lifecycle—from feasibility and hotel positioning through entitlements, permitting, brand strategy, and execution alignment—so projects are compelling, buildable, and financeable in the Lower Mainland.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-bold uppercase tracking-wide rounded hover:border-white/50 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </AnimatedSection>
    </PageTitleSection>

    {/* How We Support Owners */}
    <section className="py-20 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mb-10">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4">How We Support Owners</p>
          <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-5 leading-tight">
            One Partner Across Strategy, Approvals, and Execution.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Hospitality development is complex: value is created (or lost) at each decision point—positioning, approvals strategy, brand, design efficiency, and delivery discipline. BTN integrates these functions into a single proforma-led advisory model, helping owners de-risk decisions and maximise property value.
          </p>
        </AnimatedSection>
        {/* Pathway */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 items-center">
            {pathway.map((p, i) => (
              <span key={p.step} className="inline-flex items-center gap-2">
                <span className="inline-block px-4 py-2 bg-white border border-border rounded-full text-sm font-bold text-foreground">
                  {p.step}
                </span>
                {i < pathway.length - 1 && <ArrowRight size={14} className="text-accent/60" />}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-10">
          {services.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.05}>
              <div className="grid lg:grid-cols-[2fr_1.5fr] gap-10 items-start bg-surface rounded-2xl p-8 lg:p-12 border border-border hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                      <s.icon className="text-white" size={20} />
                    </div>
                    <span className="text-xs font-bold text-accent tracking-widest uppercase">{s.label}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-foreground mb-4 leading-snug">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">What BTN Provides</p>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy py-28">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Let's Build Your Proforma Together.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Every engagement starts with a conversation. Tell us about your land or asset and we'll show you what's possible.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity text-base"
          >
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default WhatWeDo;
