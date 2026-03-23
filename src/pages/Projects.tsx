import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";
import project01Img from "@/assets/project-06.webp";
import project02Img from "@/assets/project-urban-mixed-use.webp";
import project03Img from "@/assets/project-04.webp";
import project04Img from "@/assets/project-waterfront-resort.webp";
import project05Img from "@/assets/project-boutique-hotel.webp";
import project06Img from "@/assets/project-transit-oriented.webp";
import project07Img from "@/assets/project-urban-hotel-retail.webp";

const projects = [
  {
    img: project01Img,
    title: "Boutique Hotel Repositioning",
    location: "Vancouver, BC",
    type: "Repositioning & Brand Strategy",
    stats: [{ value: "300%+", label: "Value increase over existing use" }],
    desc: "BTN was engaged to assess and reposition an underperforming hospitality asset in Vancouver's core. Through a proforma-led approach, BTN identified the highest-value brand alignment, negotiated franchise terms, and coordinated the entitlements pathway. The result was a dramatically improved asset value and a clear execution roadmap for the owner.",
    disclaimer: "Outcome reflects specific site conditions, market timing, and approvals feasibility.",
  },
  {
    img: project02Img,
    title: "Urban Mixed-Use Hotel Development",
    location: "Metro Vancouver",
    type: "Entitlements & Execution Planning",
    stats: [{ value: "Rezoning", label: "Secured for hospitality use" }],
    desc: "A landowner with a strategically located Metro Vancouver site engaged BTN to evaluate hospitality viability and structure an entitlements pathway. BTN led the proforma modelling, brand positioning, and municipal engagement strategy—resulting in a successful rezoning outcome and a financeable development concept aligned to market demand.",
    disclaimer: "Each entitlements outcome depends on site specifics, municipal context, and project scope.",
  },
  {
    img: project03Img,
    title: "Waterfront Resort Strategy",
    location: "British Columbia",
    type: "Proforma Strategy & Brand Positioning",
    stats: [{ value: "5×", label: "Projected value uplift over base use" }],
    desc: "BTN engaged with a waterfront landowner to evaluate resort hotel viability and develop a credible investment thesis. The engagement included highest-and-best-use analysis, brand identification, proforma stress-testing, and an execution framework aligned to the site's permitting constraints and BC resort development context.",
    disclaimer: "Projected outcomes are illustrative and subject to market conditions, approvals, and execution variables.",
  },
  {
    img: project04Img,
    title: "Waterfront Resort Strategy",
    location: "British Columbia",
    type: "Development Strategy",
    stats: [{ value: "Mixed-Use", label: "Resort destination concept" }],
    desc: "A comprehensive development strategy for a large-scale waterfront hospitality destination. The project focused on aligning site potential, tourism demand, and investor expectations into a viable mixed-use resort concept.\n\nBTN led early-stage feasibility studies, market positioning, and development programming to determine the optimal blend of hospitality, residential, and commercial components.\n\nKey considerations included regional tourism growth, seasonal demand patterns, waterfront activation, and long-term asset value creation.",
    disclaimer: "Projected outcomes are illustrative and subject to market conditions, approvals, and execution variables.",
    services: ["Market Feasibility Analysis", "Hospitality Programming", "Development Strategy", "Investment Advisory"],
  },
  {
    img: project05Img,
    title: "Boutique Hotel Repositioning",
    location: "Metro Vancouver",
    type: "Revenue Optimization",
    stats: [{ value: "Repositioned", label: "Enhanced market competitiveness" }],
    desc: "Strategic repositioning of an existing boutique hotel asset to improve market competitiveness and operational performance.\n\nBTN evaluated the property's physical condition, brand positioning, and local market dynamics to develop a repositioning plan that would enhance guest experience and revenue potential.\n\nThe strategy included targeted design improvements, operational restructuring, and brand alignment with emerging lifestyle hospitality trends.",
    disclaimer: "Outcomes vary by asset and market. Past results are illustrative, not guarantees.",
    services: ["Hotel Repositioning Strategy", "Brand Positioning", "Operational Advisory", "Revenue Optimization"],
  },
  {
    img: project06Img,
    title: "Transit-Oriented Mixed-Use Development",
    location: "Metro Vancouver",
    type: "Transit-Oriented Planning",
    stats: [{ value: "High-Density", label: "Transit corridor integration" }],
    desc: "A high-density mixed-use development located adjacent to a major transit corridor, designed to maximize connectivity, urban activation, and long-term asset performance.\n\nBTN provided early-stage development analysis, ensuring the project's density, unit mix, and commercial programming aligned with municipal planning objectives and transit-oriented development policies.\n\nThe resulting concept integrates residential towers, retail frontage, and public realm improvements that contribute to a vibrant urban district.",
    disclaimer: "Each development outcome depends on site specifics, municipal context, and project scope.",
    services: ["Development Feasibility", "Transit-Oriented Planning", "Mixed-Use Programming", "Investment Strategy"],
  },
  {
    img: project07Img,
    title: "Urban Hotel & Retail Podium Development",
    location: "Metro Vancouver",
    type: "Hospitality & Retail",
    stats: [{ value: "Integrated", label: "Hospitality and retail concept" }],
    desc: "An integrated hospitality and retail podium development located in a high-visibility urban corridor.\n\nBTN advised on development positioning, hospitality branding strategy, and retail activation planning to ensure the project would serve both visitors and the surrounding neighborhood.\n\nThe concept prioritizes street-level retail engagement, efficient hotel operations, and a design strategy that strengthens the site's long-term commercial value.",
    disclaimer: "Projected outcomes are illustrative and subject to market conditions, approvals, and execution variables.",
    services: ["Hospitality Development Advisory", "Retail Activation Strategy", "Urban Site Planning", "Investment Structuring"],
  },
];

const Projects = () => (
  <>
    {/* Hero */}
    <PageTitleSection>
      <AnimatedSection className="max-w-3xl">
        <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Projects</p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
          Demonstrated Outcomes Across Hospitality Development.
        </h1>
        <p className="text-white/65 text-lg leading-relaxed">
          BTN's track record spans repositioning, entitlements, brand strategy, and execution planning across Metro Vancouver and British Columbia.
        </p>
      </AnimatedSection>
    </PageTitleSection>

    {/* Projects */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {projects.map((p, i) => (
            <AnimatedSection key={`${p.title}-${i}`} delay={i * 0.05}>
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded mb-5">
                    {p.type}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-3 leading-tight">{p.title}</h2>
                  <p className="text-muted-foreground text-sm mb-7">{p.location}</p>

                  {/* Stat highlight block */}
                  {p.stats.map((s) => (
                    <div key={s.label} className="inline-block bg-surface border border-border rounded-xl px-6 py-4 mb-7">
                      <div className="text-4xl lg:text-5xl font-black text-accent leading-none mb-1">{s.value}</div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}

                  <p className="text-muted-foreground leading-relaxed mb-5 whitespace-pre-line">{p.desc}</p>

                  {/* Services list for new projects */}
                  {p.services && (
                    <div className="mb-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Services</p>
                      <div className="flex flex-wrap gap-2">
                        {p.services.map((s) => (
                          <span key={s} className="inline-block px-3 py-1 text-xs font-semibold bg-surface border border-border rounded-full text-foreground">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground/60 italic">{p.disclaimer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="py-12 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-3xl mx-auto text-center">
          Examples and outcomes are illustrative; results vary by asset, market conditions, timing, approvals feasibility, and execution scope.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy py-28">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Evaluate Your Site — Proforma First.
          </h2>
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

export default Projects;
