import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";

const steps = [
  {
    num: "01",
    title: "Asset & Proforma Assessment",
    subtitle: "Understanding the site and its realistic potential.",
    desc: "Every BTN engagement starts with a rigorous assessment of the land or asset and a proforma baseline. This is not a general feasibility study—it is a targeted analysis to determine whether a hospitality outcome makes financial sense for this specific site, and if so, what form maximises value.",
    deliverables: [
      "Site review and development constraints analysis",
      "Preliminary highest-and-best-use assessment",
      "Comparable market and performance data review",
      "Initial proforma structure and scenario framing",
      "Engagement scope and pathway recommendation",
    ],
  },
  {
    num: "02",
    title: "Scenario Modelling & Positioning Strategy",
    subtitle: "Identifying the most credible path to value.",
    desc: "With the baseline established, BTN develops and evaluates multiple hospitality scenarios—testing density options, program mix, room count, brand tier, and revenue projections against cost and return benchmarks. The goal is to identify the scenario that is not just theoretically optimal, but practically achievable.",
    deliverables: [
      "Multiple development scenario modelling",
      "Brand tier and program mix analysis",
      "Revenue, cost, and return benchmarking",
      "Risk and sensitivity analysis",
      "Recommended positioning strategy with financial rationale",
    ],
  },
  {
    num: "03",
    title: "Brand Strategy & Franchise Alignment",
    subtitle: "Aligning the right flag to the right numbers.",
    desc: "Brand selection is treated as a capital decision. BTN identifies the brands that are aligned to the site's market position, ADR targets, and proforma requirements—then leads the franchise positioning and negotiation process to optimise terms and protect feasibility.",
    deliverables: [
      "Brand identification and shortlisting",
      "Franchise term negotiation support",
      "Key money and incentive structuring (where applicable)",
      "Brand technical standards review for cost and efficiency",
      "Management structure and agreement advisory",
    ],
  },
  {
    num: "04",
    title: "Entitlements & Permitting Roadmap",
    subtitle: "Structuring a credible approvals pathway.",
    desc: "In Metro Vancouver, approvals risk is one of the most significant value drivers. BTN structures a strategic entitlements pathway—from rezoning through Development Permit and Building Permit—with a clear understanding of municipal context, timelines, and stakeholder requirements.",
    deliverables: [
      "Rezoning strategy and application framework",
      "Development Permit process planning",
      "Building Permit readiness review",
      "Stakeholder and municipal engagement strategy",
      "Approvals timeline and risk assessment",
    ],
  },
  {
    num: "05",
    title: "Execution Alignment & Delivery Support",
    subtitle: "Bridging advisory to delivery.",
    desc: "Most advisory gaps open at the transition from approvals to construction. BTN bridges this gap—helping owners assemble the right project team, coordinate design and consultant deliverables, and maintain proforma discipline through the build phase.",
    deliverables: [
      "Build-team and general contractor procurement support",
      "Design and consultant team coordination",
      "Budget and schedule oversight",
      "Proforma protection through delivery",
      "Pre-opening and brand compliance support",
    ],
  },
];

const OurProcess = () => (
  <>
    {/* Hero */}
    <PageTitleSection>
      <AnimatedSection className="max-w-3xl">
        <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Our Process</p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
          A Disciplined Five-Step Process From Assessment to Execution.
        </h1>
        <p className="text-white/65 text-lg leading-relaxed">
          BTN's process is built around one principle: every decision must be grounded in the proforma. From the first site review to the final handover, financial discipline drives the work.
        </p>
      </AnimatedSection>
    </PageTitleSection>

    {/* Steps */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.04}>
              <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-10 items-start border-t border-border pt-12">
                {/* Number */}
                <div className="text-6xl font-black text-accent/20 leading-none w-20 shrink-0">{s.num}</div>
                {/* Content */}
                <div>
                  <h2 className="text-xl lg:text-2xl font-black text-foreground mb-2 leading-snug">{s.title}</h2>
                  <p className="text-accent text-sm font-semibold mb-5 italic">{s.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                {/* Deliverables */}
                <div className="bg-surface rounded-xl p-6 border border-border">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Key Deliverables</p>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {d}
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
            Ready to Start the Process?
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Share your property details and BTN will outline a proforma-grounded pathway forward.
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

export default OurProcess;
