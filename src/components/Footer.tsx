import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import BtnLogo from "@/components/BtnLogo";

const navLinks = [
  { label: "What We Do", path: "/what-we-do" },
  { label: "Projects", path: "/projects" },
  { label: "Our Process", path: "/our-process" },
  { label: "Ecosystem", path: "/ecosystem" },
  { label: "About BTN", path: "/about" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Use", path: "/terms" },
  { label: "Disclaimer", path: "/disclaimer" },
];

const Footer = () => (
  <footer className="bg-[hsl(216_80%_10%)] text-primary-foreground">
    {/* Mini CTA strip */}
    <div className="border-b border-white/[0.06]">
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-white/70 font-bold text-lg text-center sm:text-left">
          Ready to unlock your site's hospitality value?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-bold uppercase tracking-wide rounded-lg hover:shadow-[0_4px_16px_-4px_hsl(var(--accent)/0.4)] transition-all duration-200 active:scale-[0.97] text-sm shrink-0"
        >
          Evaluate Your Site <ArrowRight size={16} />
        </Link>
      </div>
    </div>

    <div className="container mx-auto px-6 pt-12 pb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-5 brightness-0 invert opacity-90">
            <BtnLogo height={36} />
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Proforma-driven hotel development advisory for Metro Vancouver and the Lower Mainland.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-accent">Navigate</h4>
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-accent">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <a href="tel:7786886089" className="hover:text-primary-foreground transition-colors">
              (778) 688-6089
            </a>
            <a
              href="mailto:info@BTNpro.ca"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Mail size={14} />
              info@BTNpro.ca
            </a>
            <span>73 East 6th Avenue<br />Vancouver, BC V5T 1J3</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/10 pt-8 mb-6">
        <p className="text-xs text-primary-foreground/35 leading-relaxed max-w-3xl">
          Examples and outcomes are illustrative; results vary by asset, market conditions, timing, approvals feasibility, and execution scope.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/35">
        <span>
          BTN Copyright © 2026 All Rights Reserved.
          <span className="text-[#d8d8d8]/20 hover:text-[#d8d8d8]/40 transition-colors">
            {" "}| Web Design by{" "}
            <a
              href="https://www.bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d8d8d8]/40 transition-colors"
            >
              Bluluma
            </a>
          </span>
        </span>
        <div className="flex gap-6">
          {legalLinks.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              className="hover:text-primary-foreground/60 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
