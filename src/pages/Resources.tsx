import { FileText, Building2, Train, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleSection from "@/components/PageTitleSection";

const resources = [
  {
    icon: Building2,
    title: "Hotel Development Policy",
    description: "City of Vancouver's updated policy framework for new hotel developments, including zoning considerations and municipal guidelines.",
    href: "https://vancouver.ca/news-calendar/updated-policy-for-new-hotel-developments-april-2025.aspx",
    external: true,
  },
  {
    icon: Train,
    title: "Transit-Oriented Areas (TOA)",
    description: "Policy guidelines for rezoning in transit-oriented areas across Metro Vancouver, including density and land-use provisions.",
    href: "https://guidelines.vancouver.ca/policy-rezoning-transit-oriented-areas.pdf",
    external: true,
  },
  {
    icon: Heart,
    title: "Seniors Housing Strategy",
    description: "Vancouver's strategic framework for seniors housing, addressing demand, affordability, and development opportunities.",
    href: "https://vancouver.ca/people-programs/seniors-housing-strategy.aspx",
    external: true,
  },
  {
    icon: FileText,
    title: "Hotel Community Impact",
    description: "Analysis of hotel development's economic and community impact in the Vancouver market, April 2025.",
    href: "/Hotel Community Impact_April 2025.pdf",
    external: false,
  },
];

const Resources = () => (
  <>
    {/* Hero */}
    <PageTitleSection>
      <AnimatedSection className="max-w-3xl">
        <p className="text-accent font-bold text-xs uppercase tracking-[0.25em] mb-5">
          Resources
        </p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-7">
          Development Resources
        </h1>
        <p className="text-white/65 text-lg leading-relaxed">
          Key policy documents and urban planning guidelines for Vancouver.
        </p>
      </AnimatedSection>
    </PageTitleSection>

    {/* Cards Grid */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((r, i) => {
            const Icon = r.icon;
            return (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <a
                  href={r.href}
                  target={r.external ? "_blank" : "_self"}
                  rel={r.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col h-full rounded-xl border border-border bg-white p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {r.description}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover:underline">
                    {r.external ? "View Resource →" : "Download PDF →"}
                  </span>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Resources;
