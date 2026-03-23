import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";

const partners = [
  {
    category: "Architecture & Design",
    desc: "BTN maintains active working relationships with established Vancouver-area architectural firms experienced in hospitality and mixed-use typologies. Partner firms bring local permitting knowledge, municipal relationships, and an understanding of hospitality planning requirements—including brand standards, efficiency ratios, and constructability.",
    note: "Firm names not disclosed publicly. Introductions are made within active engagements.",
  },
  {
    category: "MEP & Technical Consultants",
    desc: "Mechanical, electrical, plumbing, structural, and specialty consultants are a critical cost driver in hospitality projects. BTN works with a network of technically strong Lower Mainland consultants who understand hospitality-specific requirements—reducing coordination friction and protecting budget assumptions.",
    note: "Consultant introductions are scoped to project needs.",
  },
  {
    category: "General Contractors & Build Teams",
    desc: "BTN's contractor relationships span mid-market and institutional GCs with demonstrated Vancouver hospitality delivery experience. These relationships support more accurate budgeting, earlier contractor input, and smoother mobilisation—all proforma-relevant outcomes.",
    note: "GC introductions are structured based on project scale and delivery model.",
  },
  {
    category: "Municipal & Approvals Advisors",
    desc: "BTN has active working relationships with planners, permit expeditors, and municipal advisors across Metro Vancouver jurisdictions. These relationships support more accurate timeline expectations and more effective engagement with municipal processes.",
    note: "Advisor relationships are engaged based on jurisdiction and project complexity.",
  },
  {
    category: "Capital & Financing Advisors",
    desc: "While BTN does not provide capital directly, the firm maintains relationships with hospitality-focused capital advisors, lenders, and institutional investors active in the BC market. Where relevant, BTN can facilitate introductions to support project financing.",
    note: "Capital introductions are made selectively and are not a core BTN service.",
  },
];

const brandLogos = ["Hilton", "Marriott", "Hyatt", "Choice Hotels"];

const Ecosystem = () => (
  <>
    {/* Hero */}
    <PageTitleSection>
      <AnimatedSection className="max-w-3xl">
        <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">Ecosystem</p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
          A Network Built for Hospitality Development in Metro Vancouver.
        </h1>
        <p className="text-white/65 text-lg leading-relaxed">
          BTN's value extends beyond direct advisory services. Through a carefully developed ecosystem of local partners—architects, consultants, contractors, municipal advisors, and brand relationships—BTN helps owners assemble and coordinate the right team for each project.
        </p>
      </AnimatedSection>
    </PageTitleSection>

    {/* Why it matters */}
    <section className="py-20 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4">Why the Ecosystem Matters</p>
            <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-5 leading-tight">
              The Right Relationships Reduce Execution Risk and Protect the Proforma.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              In hospitality development, execution quality is inseparable from team quality. The wrong architect, consultant, or contractor—or a poorly coordinated team—can erode margins, delay approvals, and compromise the end product.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BTN's ecosystem is not a referral network. It is a working group of partners who understand hospitality-specific requirements, Lower Mainland municipal processes, and the discipline required to protect a proforma through design and delivery.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-10 border border-border">
              <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-6">Brand Relationships</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                BTN works with major global hotel brands across the full franchise and management spectrum. Brand relationships are maintained with:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {brandLogos.map((b) => (
                  <div
                    key={b}
                    className="flex items-center justify-center rounded-xl border border-border bg-surface px-4 py-5"
                  >
                    <span
                      className="text-xl font-black text-muted-foreground/35 select-none tracking-tight"
                      style={{ fontFamily: "serif" }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50 mt-5 leading-relaxed">
                Brand relationships are used for positioning and negotiation support within active engagements. BTN does not represent brands or act as a franchise broker.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Partners */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-14">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-4">The Partner Network</p>
          <h2 className="text-2xl lg:text-3xl font-black text-foreground leading-tight">
            Specialists Across Every Phase of Development.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <AnimatedSection key={p.category} delay={i * 0.07}>
              <div className="bg-surface rounded-xl p-8 border border-border h-full flex flex-col">
                <div className="w-8 h-0.5 bg-accent mb-5" />
                <h3 className="text-base font-bold text-foreground mb-3">{p.category}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                <p className="text-xs text-muted-foreground/55 italic border-t border-border pt-4">{p.note}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="bg-surface rounded-xl p-8 border border-border">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Important Note</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BTN's ecosystem partnerships are structured around active project engagements. Partner introductions are made based on project scope, scale, and fit—not as a general referral service. All partner relationships are disclosed and managed transparently within BTN engagements.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy py-28">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Access the Ecosystem Through BTN.
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

export default Ecosystem;
