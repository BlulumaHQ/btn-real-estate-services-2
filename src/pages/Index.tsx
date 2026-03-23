import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import heroSlide01 from "@/assets/btn-hero-slide-01.webp";
import heroSlide02 from "@/assets/hero-slide-02.webp";
import project01Img from "@/assets/project-06.webp";
import project02Img from "@/assets/project-urban-mixed-use.webp";
import project03Img from "@/assets/project-04.webp";
import project04Img from "@/assets/project-waterfront-resort.webp";
import project05Img from "@/assets/project-boutique-hotel.webp";
import project06Img from "@/assets/project-transit-oriented.webp";
import project07Img from "@/assets/project-urban-hotel-retail.webp";

/* ─── Brand logos (text fallback for muted grayscale display) ─── */
const brandLogos = [
  { name: "Hilton", class: "text-3xl font-black tracking-tighter" },
  { name: "Marriott", class: "text-2xl font-black tracking-tight" },
  { name: "Hyatt", class: "text-3xl font-black tracking-tight" },
  { name: "Choice Hotels", class: "text-xl font-black tracking-tight leading-tight text-center" },
];

const differentiators = [
  {
    title: "Proforma-First Decision Making",
    body: "Every recommendation is evaluated through financial impact—feasibility, risk, returns, and long-term exit value. Strategy, design, approvals, and delivery remain aligned to the numbers.",
  },
  {
    title: "Hospitality Expertise (Not Generic Development Advice)",
    body: "Hotels are operating businesses. BTN brings hospitality-specific insight—brand standards, efficiency, room mix, back-of-house planning, and performance drivers—so the end product works in the market, not just on paper.",
  },
  {
    title: "Entitlements & Permitting Clarity in the Lower Mainland",
    body: "Approvals drive value and risk. BTN supports rezoning strategy, DP navigation, and BP readiness, helping owners move from concept to a credible, buildable path.",
  },
  {
    title: "Delivery Network That Reduces Execution Risk",
    body: "BTN's ecosystem spans local architects, consultants, and experienced build teams with recent Vancouver hospitality delivery experience—supporting smoother coordination and better project outcomes.",
  },
];

const processSteps = [
  { num: "01", title: "Asset + Proforma Review", desc: "Baseline analysis and constraints" },
  { num: "02", title: "Scenario Modelling", desc: "Identify viable pathways to enhance value" },
  { num: "03", title: "Brand + Positioning Strategy", desc: "Align concept to market and performance" },
  { num: "04", title: "Entitlements Roadmap", desc: "Rezoning/DP/BP strategy and readiness" },
  { num: "05", title: "Execution Alignment", desc: "Assemble and coordinate the right project team" },
];

const allProjects = [
  { img: project01Img, title: "Boutique Hotel Repositioning", location: "Vancouver, BC", tag: "300%+ Value Increase" },
  { img: project02Img, title: "Urban Mixed-Use Development", location: "Metro Vancouver", tag: "Entitlements Secured" },
  { img: project03Img, title: "Waterfront Resort Strategy", location: "British Columbia", tag: "Proforma Optimised" },
  { img: project04Img, title: "Waterfront Resort Strategy", location: "British Columbia", tag: "Development Strategy" },
  { img: project05Img, title: "Boutique Hotel Repositioning", location: "Metro Vancouver", tag: "Revenue Optimization" },
  { img: project06Img, title: "Transit-Oriented Mixed-Use Development", location: "Metro Vancouver", tag: "Transit-Oriented" },
  { img: project07Img, title: "Urban Hotel & Retail Podium Development", location: "Metro Vancouver", tag: "Hospitality & Retail" },
];

const brandSupport = [
  "Brand positioning aligned to market demand and target ADR",
  "Negotiation support to optimise commercial terms and incentives (where applicable)",
  "Coordination of brand technical requirements to protect efficiency, cost, and constructability",
];

const heroSlides = [
  { src: heroSlide01, alt: "BTN hospitality development Vancouver", position: "center center" },
  { src: heroSlide02, alt: "Urban mixed-use hotel development", position: "center 20%" },
];

/* Fisher-Yates shuffle */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Index = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* Shuffle projects once per mount (page refresh) */
  const featuredProjects = useMemo(() => shuffle(allProjects).slice(0, 3), []);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Slider backgrounds */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slideIndex}
            src={heroSlides[slideIndex].src}
            alt={heroSlides[slideIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: heroSlides[slideIndex].position }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative container mx-auto px-6 py-40">
          <AnimatedSection className="max-w-3xl">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6">
              Strategy • Entitlements • Brand • Execution
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-7 text-balance">
              Proforma-Driven Hotel Development Advisory for the Lower Mainland.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mb-10 leading-relaxed">
              BTN partners with landowners and real estate owners to unlock hospitality-led value through hotel positioning, brand strategy, rezoning, Development Permit and Building Permit pathways, and disciplined execution planning.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#evaluate"
                className="inline-flex items-center gap-2 px-8 py-4 min-h-[44px] bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity"
              >
                Evaluate Your Site <ArrowRight size={18} />
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 min-h-[44px] border-2 border-white/30 text-white font-bold uppercase tracking-wide rounded hover:border-white/60 transition-colors"
              >
                View Projects
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-4 uppercase tracking-wide">Start With A Proforma Review</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHAT BTN DOES ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">What BTN Does</p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight mb-6">
                We Convert Underutilised Property Into Hospitality Value.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                BTN is a hospitality-focused real estate consultancy. We help owners identify the highest-value hotel outcome for a site, validate it through the proforma, structure a credible approvals pathway, and align the right brand and delivery team to execute.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Positioning", "Brand Strategy", "Rezoning", "Development Permit", "Building Permit", "Build-Team Execution"].map((step, i, arr) => (
                  <span key={step} className="inline-flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">{step}</span>
                    {i < arr.length - 1 && <ArrowRight size={12} className="text-accent" />}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-surface rounded-2xl p-10 border border-border">
                <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-6">Where BTN Sits in the Market</p>
                <h3 className="text-2xl font-black text-foreground mb-4 leading-tight">
                  Where Hospitality Strategy, Entitlements, and Execution Meet.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  BTN is built for owners who need more than concept-level advice. We bridge the gap between strategic positioning and real delivery—so decisions stand up to underwriting, municipal processes, and execution realities.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATORS ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Why BTN</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground leading-tight">
              Core Differentiators
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-8 border border-border h-full hover:shadow-md transition-shadow">
                  <div className="w-8 h-0.5 bg-accent mb-5" />
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS STAT BLOCKS ─────────────────────────────────────── */}
      <section className="gradient-navy py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Results</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Outcomes Owners Care About.</h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Owners engage BTN for value creation, not generic reports. Through disciplined positioning, entitlement optimisation, brand alignment, and execution planning, BTN clients have historically unlocked significant uplift over existing use.
            </p>
          </AnimatedSection>

          {/* Bold stat highlight block */}
          <AnimatedSection delay={0.1}>
            <div className="max-w-lg mx-auto rounded-2xl bg-white/8 border border-white/15 p-12 text-center">
              <div className="text-7xl lg:text-8xl font-black text-accent mb-3">300%+</div>
              <div className="text-white font-bold text-lg mb-4">Increase Over Existing Property Value</div>
              <p className="text-white/50 text-xs leading-relaxed">
                Clients have achieved 300%+ increases over existing property value in select engagements, depending on site conditions, market timing, scope, and approvals feasibility.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-center text-white/35 text-xs mt-6">
              Outcomes vary by asset and market. Past results are illustrative, not guarantees.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BRAND STRATEGY & LOGO WALL ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Brand Strategy & Incentives</p>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground leading-tight mb-6">
                Brand Positioning That Strengthens Feasibility.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                BTN works exclusively with major global hotel brands—including Hilton, Marriott, Hyatt, and Choice Hotels franchises—aligning brand strategy and commercial terms to strengthen feasibility and long-term asset value.
              </p>
              <ul className="space-y-4">
                {brandSupport.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              {/* Grayscale logo wall */}
              <div className="grid grid-cols-2 gap-6">
                {brandLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center justify-center rounded-xl border border-border bg-surface p-8 aspect-[3/2]"
                  >
                    <span
                      className={`${brand.class} text-muted-foreground/40 select-none`}
                      style={{ fontFamily: "serif" }}
                    >
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PROCESS SNAPSHOT ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">A Clear Pathway</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              A Disciplined Process From Assessment to Execution.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-14">
            {processSteps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.08}>
                <div className="relative bg-white rounded-xl p-6 border border-border h-full">
                  <div className="text-4xl font-black text-accent/15 mb-3">{s.num}</div>
                  <h3 className="text-sm font-bold text-foreground mb-2 leading-snug">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  {i < processSteps.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-accent/50 z-10"
                    />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2} className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4">Track Record</p>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground">Proven Results. Local Alliances.</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent transition-colors whitespace-nowrap"
            >
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((proj, i) => (
              <AnimatedSection key={`${proj.title}-${i}`} delay={i * 0.1}>
                <div className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded mb-3">
                      {proj.tag}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-1">{proj.title}</h3>
                    <p className="text-muted-foreground text-sm">{proj.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center mt-14">
            <p className="text-xl lg:text-2xl font-black text-foreground mb-5">Considering A Development Opportunity?</p>
            <a
              href="#evaluate"
              className="inline-flex items-center gap-2 px-8 py-4 min-h-[44px] bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity"
            >
              Evaluate Your Site <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LOCAL FOCUS ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Local Focus</p>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6">
                Built for Metro Vancouver Realities.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                BTN's work reflects the practical environment of the Lower Mainland—municipal processes, stakeholder complexity, timelines, and construction cost pressures. Our local partnerships and hospitality experience help owners move decisively while managing approvals and delivery risk.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────── */}
      <section id="evaluate" className="gradient-navy py-28">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 max-w-2xl mx-auto leading-tight">
              Evaluate Your Site — Proforma First.
            </h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Share your property details and objectives. BTN will outline a financially grounded pathway to unlock value, align brand strategy, and execute with the right team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 min-h-[44px] bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity text-base"
            >
              Request Project Evaluation <ArrowRight size={20} />
            </Link>
            <p className="text-white/45 text-sm mt-4 uppercase tracking-wide">Confidential Review For Developers And Investors</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
