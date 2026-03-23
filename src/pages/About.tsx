import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";
import btn3dSign from "@/assets/btn-3d-sign.webp";

const values = [
  {
    title: "Proforma Discipline Above All",
    desc: "Every recommendation is stress-tested against the numbers. We do not advance concepts that cannot survive underwriting scrutiny.",
  },
  {
    title: "Integration, Not Hand-Offs",
    desc: "Strategy, entitlements, brand, design, and delivery are treated as one continuous process—not sequential phases managed by disconnected advisors.",
  },
  {
    title: "Local Expertise, Institutional Standard",
    desc: "Our work is grounded in Metro Vancouver realities—municipal processes, stakeholder dynamics, construction cost pressures—delivered to the standard of institutional advisory.",
  },
  {
    title: "Alignment With Owner Objectives",
    desc: "We are engaged to create value for landowners and real estate owners. Every engagement is structured around the owner's specific objectives—whether that is maximum exit value, fastest path to revenue, or long-term asset performance.",
  },
];

const stats = [
  { value: "100", accent: "+", label: "Years of combined hospitality development experience across the BTN team" },
  { value: "Metro", accent: " YVR", label: "Primary focus—Metro Vancouver and the Lower Mainland" },
  { value: "300", accent: "%+", label: "Demonstrated value uplift in select client engagements", disclaimer: "Outcomes vary by asset and market. Past results are illustrative, not guarantees." },
];

const About = () => (
  <>
    {/* Hero */}
    <PageTitleSection>
      <AnimatedSection className="max-w-3xl">
        <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">About BTN</p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
          Hospitality Development Advisory, Built Differently.
        </h1>
        <p className="text-white/65 text-lg leading-relaxed">
          BTN is a boutique hospitality real estate consultancy focused on Metro Vancouver and the Lower Mainland. We work with landowners and real estate owners to unlock hospitality-led value from underutilised sites—through a proforma-first, integrated advisory model that bridges strategy, entitlements, brand, and execution.
        </p>
      </AnimatedSection>
    </PageTitleSection>

    {/* Brand Image + Intro */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-14 items-center">
          <AnimatedSection className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.2)]">
              <img
                src={btn3dSign}
                alt="BTN Real Estate Services 3D sign"
                className="w-full object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Who We Are</p>
            <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-6 leading-tight">
              A Specialised Team With Deep Hospitality and Development Expertise.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                BTN was founded to address a persistent gap in the hospitality development market: the distance between strategic advice and practical delivery. Most owners working through hotel development in Metro Vancouver encounter fragmented support—feasibility consultants who don't engage with entitlements, brand advisors disconnected from construction realities, or general development consultants without hospitality-specific depth.
              </p>
              <p>
                BTN is structured differently. Our approach integrates hotel positioning, proforma analysis, brand strategy, entitlements navigation, design coordination, and execution support into a single advisory model—led by a principal team with direct experience across all of these disciplines.
              </p>
              <p>
                Our collective experience spans major international hotel brands, institutional real estate development, and local Vancouver project delivery—giving us the breadth to advise credibly across the full development lifecycle.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Stats Strip */}
    <section className="gradient-navy py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {s.value}<span className="text-accent">{s.accent}</span>
                </div>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{s.label}</p>
                {s.disclaimer && (
                  <p className="text-white/25 text-xs mt-2 italic">{s.disclaimer}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why BTN Was Built */}
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mb-16">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Why BTN Was Built</p>
          <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-6 leading-tight">
            Bridging the Advisory-to-Delivery Gap.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The hospitality development market in Metro Vancouver has a structural problem. Landowners with viable sites often lack access to specialised advisory that integrates financial analysis, entitlements strategy, brand positioning, and execution discipline into a coherent project pathway.
            </p>
            <p>
              Generic development consultants lack hospitality depth. Hotel consultants often stop at strategy. Architects are not equipped to navigate franchise relationships. And GCs are rarely engaged early enough to protect the proforma.
            </p>
            <p>
              BTN was built to close this gap—providing owners with a single, integrated advisory partner who can take a site from initial proforma assessment through to a credible, financed, and properly positioned project ready for delivery.
            </p>
          </div>
        </AnimatedSection>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.07}>
              <div className="bg-white rounded-xl p-8 border border-border h-full">
                <div className="w-8 h-0.5 bg-accent mb-5" />
                <h3 className="text-base font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Focus Area */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4">Our Focus Area</p>
          <p className="text-muted-foreground leading-relaxed">
            Metro Vancouver, the Lower Mainland, and select BC markets where BTN has active relationships and local expertise.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy py-28">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Get in Touch With the BTN Team.
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

export default About;
