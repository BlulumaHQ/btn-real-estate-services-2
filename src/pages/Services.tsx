import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Award, FileCheck, PencilRuler, HardHat } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";

const services = [
  {
    icon: BarChart3,
    title: "Hotel Positioning & Proforma Strategy",
    desc: "Feasibility analysis, scenario modelling, and highest-and-best-use studies that anchor every decision to your proforma. We test assumptions before capital is committed—not after.",
    bullets: ["Market feasibility & demand analysis", "Revenue scenario modelling", "Highest-and-best-use evaluation", "Capital structure advisory"],
  },
  {
    icon: Award,
    title: "Hotel Brand Strategy & Franchising",
    desc: "Brand selection is a capital decision, not a marketing exercise. We negotiate franchise agreements, optimise key money and incentive terms, and position your asset for maximum flag value.",
    bullets: ["Brand selection & positioning", "Franchise negotiations", "Key money & incentive optimisation", "Management agreement structuring"],
  },
  {
    icon: FileCheck,
    title: "Entitlements & Approvals",
    desc: "Rezoning, development permits, and municipal navigation require local expertise and persistence. Our Vancouver-rooted team has the relationships and track record to move approvals forward.",
    bullets: ["Rezoning applications", "Development permit coordination", "Municipal & stakeholder engagement", "Public hearing preparation"],
  },
  {
    icon: PencilRuler,
    title: "Design & Consultant Coordination",
    desc: "We coordinate architects, interior designers, and engineers through alliances with leading local firms—ensuring hospitality-specific planning, efficiency, and proforma protection.",
    bullets: ["Architect & designer selection", "Hospitality-specific planning", "Value engineering", "Consultant team coordination"],
  },
  {
    icon: HardHat,
    title: "Delivery & Execution Support",
    desc: "We bridge the advisory-to-delivery gap. From build-team assembly to GC coordination, we protect your proforma through construction and into operations.",
    bullets: ["Build-team assembly", "General contractor coordination", "Budget & schedule oversight", "Pre-opening planning"],
  },
];

const phases = [
  { step: "01", title: "Discovery & Proforma", desc: "Assess land potential, model scenarios, validate highest-and-best-use." },
  { step: "02", title: "Strategy & Positioning", desc: "Define brand, density, and program mix anchored to capital returns." },
  { step: "03", title: "Entitlements & Design", desc: "Secure approvals and coordinate consultant teams for efficient delivery." },
  { step: "04", title: "Execution & Delivery", desc: "Manage build-team, protect proforma, and drive to successful completion." },
];

const Services = () => (
  <>
    {/* Hero */}
    <PageTitleSection className="pt-32 pb-20">
      <AnimatedSection className="max-w-3xl">
        <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Capabilities</p>
        <h1 className="text-4xl lg:text-5xl font-black text-primary-foreground leading-tight mb-6">
          End-to-End Hospitality Development Services
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
          From initial feasibility through to delivery, BTN provides integrated services that protect your capital and maximise asset value at every stage.
        </p>
      </AnimatedSection>
    </PageTitleSection>

    {/* Services grid */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start bg-surface rounded-xl p-8 lg:p-12 border border-border">
                <div>
                  <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center mb-5">
                    <s.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Phased engagement */}
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Engagement Flow</p>
          <h2 className="text-3xl lg:text-4xl font-black text-foreground">
            A Phased, End-to-End Approach
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-5xl font-black text-accent/20 mb-4">{p.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy py-24">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-black text-primary-foreground mb-6">
            Let's Build Your Proforma Together
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Every engagement starts with a conversation. Tell us about your land or asset and we'll show you what's possible.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:bg-gold-light transition-colors text-lg"
          >
            Engage BTN <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Services;
