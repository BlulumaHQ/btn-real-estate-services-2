import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, BarChart3, Award, FileCheck, PencilRuler, HardHat } from "lucide-react";
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

/* ─── Data ─── */
const heroSlides = [
  { src: heroSlide01, alt: "BTN hospitality development Vancouver", position: "center center" },
  { src: heroSlide02, alt: "Urban mixed-use hotel development", position: "center 20%" },
];

const painPoints = [
  "Fragmented advisors who don't talk to each other — feasibility consultants disconnected from entitlements, brand advisors unaware of construction realities.",
  "Generic development consultants without hospitality-specific depth — leading to designs that don't work in the market.",
  "Approvals risk mismanaged — rezoning, Development Permit, and Building Permit processes stalled by poor strategy.",
  "The proforma falls apart at the transition from advisory to delivery — because no one is protecting the numbers through execution.",
];

const services = [
  {
    icon: BarChart3,
    title: "Hotel Positioning & Proforma Strategy",
    desc: "Feasibility analysis, scenario modelling, and highest-and-best-use studies that anchor every decision to your proforma.",
  },
  {
    icon: Award,
    title: "Hotel Brand Strategy & Franchising",
    desc: "Brand selection as a capital decision. We negotiate franchise agreements, optimise key money and incentive terms, and position your asset for maximum flag value.",
  },
  {
    icon: FileCheck,
    title: "Entitlements & Approvals",
    desc: "Rezoning, development permits, and municipal navigation with local expertise and persistence. Our Vancouver-rooted team moves approvals forward.",
  },
  {
    icon: PencilRuler,
    title: "Design & Consultant Coordination",
    desc: "Architects, interior designers, and engineers coordinated through alliances with leading local firms — ensuring hospitality-specific planning and proforma protection.",
  },
  {
    icon: HardHat,
    title: "Delivery & Execution Support",
    desc: "From build-team assembly to GC coordination, we protect your proforma through construction and into operations.",
  },
];

const differentiators = [
  {
    title: "Proforma-First Decision Making",
    body: "Every recommendation is evaluated through financial impact — feasibility, risk, returns, and long-term exit value.",
  },
  {
    title: "Hospitality Expertise (Not Generic Development Advice)",
    body: "Hotels are operating businesses. BTN brings hospitality-specific insight — brand standards, efficiency, room mix, back-of-house planning, and performance drivers.",
  },
  {
    title: "Entitlements & Permitting Clarity in the Lower Mainland",
    body: "Approvals drive value and risk. BTN supports rezoning strategy, DP navigation, and BP readiness.",
  },
  {
    title: "Delivery Network That Reduces Execution Risk",
    body: "BTN's ecosystem spans local architects, consultants, and experienced build teams with recent Vancouver hospitality delivery experience.",
  },
];

const processSteps = [
  { num: "01", title: "Asset + Proforma Review", desc: "Baseline analysis and constraints" },
  { num: "02", title: "Scenario Modelling", desc: "Identify viable pathways to enhance value" },
  { num: "03", title: "Brand + Positioning Strategy", desc: "Align concept to market and performance" },
  { num: "04", title: "Entitlements Roadmap", desc: "Rezoning/DP/BP strategy and readiness" },
  { num: "05", title: "Execution Alignment", desc: "Assemble and coordinate the right project team" },
];

const brandLogos = [
  { name: "Hilton", class: "text-3xl font-black tracking-tighter" },
  { name: "Marriott", class: "text-2xl font-black tracking-tight" },
  { name: "Hyatt", class: "text-3xl font-black tracking-tight" },
  { name: "Choice Hotels", class: "text-xl font-black tracking-tight leading-tight text-center" },
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

const trustSignals = [
  "We typically respond within one business day.",
  "Information shared is treated as confidential.",
  "100+ years of combined hospitality development experience.",
  "Primary focus — Metro Vancouver and the Lower Mainland.",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── CTA Button Component ─── */
const CTAButton = ({ children, href, variant = "primary", className = "" }: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
}) => {
  const base = "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide rounded-lg transition-all duration-200 active:scale-[0.97]";
  const variants = {
    primary: "px-10 py-5 bg-accent text-accent-foreground hover:shadow-[0_6px_24px_-4px_hsl(var(--accent)/0.5)] hover:translate-y-[-1px]",
    outline: "px-8 py-4 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5",
  };
  
  if (href.startsWith("#")) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

const Index = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = useMemo(() => shuffle(allProjects).slice(0, 4), []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          1. HOOK — Full-Screen Hero
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(216_80%_10%/0.95)] via-[hsl(216_67%_17%/0.85)] to-[hsl(216_67%_27%/0.5)]" />

        <div className="relative container mx-auto px-6 py-32">
          <AnimatedSection className="max-w-3xl">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6">
              Strategy • Entitlements • Brand • Execution
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-7 text-balance" style={{ lineHeight: '1.05' }}>
              Proforma-Driven Hotel Development Advisory for the Lower Mainland.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mb-10 leading-relaxed">
              BTN partners with landowners and real estate owners to unlock hospitality-led value through hotel positioning, brand strategy, rezoning, Development Permit and Building Permit pathways, and disciplined execution planning.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="#evaluate">
                Evaluate Your Site <ArrowRight size={18} />
              </CTAButton>
              <CTAButton href="#results" variant="outline">
                See Results
              </CTAButton>
            </div>
            <p className="text-white/40 text-sm mt-5 uppercase tracking-wide">Start With A Proforma Review</p>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-accent" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. PROBLEM — The Gap That Costs Owners Money
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">The Problem</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight mb-6">
              Most Hospitality Projects in Metro Vancouver Are Undervalued Before They Even Start.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The hospitality development market has a structural problem. Landowners with viable sites often lack access to specialised advisory that integrates financial analysis, entitlements strategy, brand positioning, and execution discipline into a coherent project pathway.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. AGITATION — Emphasize the Pain
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-28 bg-[hsl(216_80%_12%)]">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Sound Familiar?</p>
            <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-10">
              If You're Dealing With Any of These, You're Leaving Value on the Table.
            </h2>
            <div className="space-y-6">
              {painPoints.map((point, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-5 bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
                    <span className="text-2xl font-black text-accent/60 shrink-0 w-8 text-right">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-white/80 leading-relaxed">{point}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="text-center mt-14">
            <CTAButton href="#evaluate">
              Get a Proforma-First Assessment <ArrowRight size={18} />
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. SOLUTION — What BTN Does
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">The Solution</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight mb-6">
              We Convert Underutilised Property Into Hospitality Value.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              BTN is a hospitality-focused real estate consultancy. We help owners identify the highest-value hotel outcome for a site, validate it through the proforma, structure a credible approvals pathway, and align the right brand and delivery team to execute.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.06}>
                <div className="bg-surface rounded-xl p-7 border border-border h-full hover:shadow-lg hover:border-accent/20 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-lg gradient-navy flex items-center justify-center mb-5 group-hover:shadow-md transition-shadow">
                    <s.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pathway flow */}
          <AnimatedSection delay={0.3} className="mt-14">
            <div className="flex flex-wrap justify-center gap-2 items-center">
              {["Positioning", "Brand Strategy", "Rezoning", "Development Permit", "Building Permit", "Build-Team Execution"].map((step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2 text-sm">
                  <span className="font-semibold text-foreground">{step}</span>
                  {i < arr.length - 1 && <ArrowRight size={12} className="text-accent" />}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. BENEFITS — Why BTN (Differentiators)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Why BTN</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground leading-tight">
              What Makes BTN Different From Every Other Advisor.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          <AnimatedSection delay={0.3} className="text-center mt-14">
            <CTAButton href="#evaluate">
              See What BTN Can Do For Your Site <ArrowRight size={18} />
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. TRUST — Results + Brand Partners
      ═══════════════════════════════════════════════════════════════ */}
      <section id="results" className="gradient-navy py-24 lg:py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Proven Results</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Outcomes Owners Care About.</h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Owners engage BTN for value creation, not generic reports. Through disciplined positioning, entitlement optimisation, brand alignment, and execution planning, BTN clients have historically unlocked significant uplift over existing use.
            </p>
          </AnimatedSection>

          {/* Hero stat */}
          <AnimatedSection delay={0.1}>
            <div className="max-w-lg mx-auto rounded-2xl bg-white/[0.06] border border-white/[0.12] p-12 text-center">
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

          {/* Brand logos */}
          <AnimatedSection delay={0.2} className="mt-20">
            <p className="text-center text-white/50 text-xs font-bold uppercase tracking-[0.25em] mb-8">
              BTN Works With Major Global Hotel Brands
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-2xl mx-auto">
              {brandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-6 aspect-[3/2]"
                >
                  <span
                    className={`${brand.class} text-white/25 select-none`}
                    style={{ fontFamily: "serif" }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. OFFER — Clear Process (What You Get)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Your Pathway</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              A Disciplined Process From Assessment to Execution.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-14">
            {processSteps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.08}>
                <div className="relative bg-surface rounded-xl p-6 border border-border h-full">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. CTA — Primary Action
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Considering A Development Opportunity?
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Every engagement starts with a conversation. Tell us about your land or asset and we'll show you what's possible.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[hsl(var(--navy-dark))] text-white font-bold uppercase tracking-wide rounded-lg hover:shadow-[0_6px_24px_-4px_hsl(216_80%_18%/0.5)] hover:translate-y-[-1px] transition-all duration-200 active:scale-[0.97] text-base"
            >
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. REINFORCEMENT — Featured Projects + Local Focus
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4">Track Record</p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">Proven Results. Local Alliances.</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredProjects.map((proj, i) => (
              <AnimatedSection key={`${proj.title}-${i}`} delay={i * 0.08}>
                <div className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent rounded mb-3">
                      {proj.tag}
                    </span>
                    <h3 className="text-sm font-bold text-foreground mb-1">{proj.title}</h3>
                    <p className="text-muted-foreground text-xs">{proj.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Local focus */}
          <AnimatedSection delay={0.3}>
            <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-10 border border-border">
              <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4">Local Focus</p>
              <h3 className="text-2xl font-black text-foreground mb-4">
                Built for Metro Vancouver Realities.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                BTN's work reflects the practical environment of the Lower Mainland — municipal processes, stakeholder complexity, timelines, and construction cost pressures. Our local partnerships and hospitality experience help owners move decisively while managing approvals and delivery risk.
              </p>
            </div>
          </AnimatedSection>

          {/* Trust signals */}
          <AnimatedSection delay={0.4} className="mt-12">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {trustSignals.map((signal) => (
                <span key={signal} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-accent shrink-0" />
                  {signal}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. FINAL CTA — Close the Deal
      ═══════════════════════════════════════════════════════════════ */}
      <section id="evaluate" className="py-28 lg:py-36 bg-[hsl(216_80%_10%)]">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6">Take The First Step</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 max-w-2xl mx-auto leading-tight" style={{ lineHeight: '1.1' }}>
              Evaluate Your Site — Proforma First.
            </h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Share your property details and objectives. BTN will outline a financially grounded pathway to unlock value, align brand strategy, and execute with the right team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-12 py-6 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded-lg hover:shadow-[0_8px_32px_-4px_hsl(var(--accent)/0.5)] hover:translate-y-[-2px] transition-all duration-200 active:scale-[0.97] text-lg"
            >
              Request Project Evaluation <ArrowRight size={22} />
            </Link>
            <p className="text-white/35 text-sm mt-5 uppercase tracking-wide">Confidential Review For Developers And Investors</p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-white/40">
              <a href="mailto:info@BTNpro.ca" className="hover:text-accent transition-colors">info@BTNpro.ca</a>
              <a href="tel:7786886089" className="hover:text-accent transition-colors">(778) 688-6089</a>
              <span>Vancouver, BC</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
