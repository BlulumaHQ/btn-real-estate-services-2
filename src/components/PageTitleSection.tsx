import pageTitleBg from "@/assets/btn-page-title-bg.webp";

interface PageTitleSectionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTitleSection = ({ children, className = "pt-36 pb-24" }: PageTitleSectionProps) => (
  <section className={`gradient-navy relative overflow-hidden ${className}`}>
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${pageTitleBg})`,
        opacity: 0.1,
      }}
      aria-hidden="true"
    />
    <div className="relative z-10 container mx-auto px-6">
      {children}
    </div>
  </section>
);

export default PageTitleSection;
