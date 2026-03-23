import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import BtnLogo from "@/components/BtnLogo";

const navLinksCol1 = [
  { label: "Home", path: "/" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Projects", path: "/projects" },
  { label: "Our Process", path: "/our-process" },
];

const navLinksCol2 = [
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
  <footer className="gradient-navy text-primary-foreground">
    <div className="container mx-auto px-6 pt-16 pb-8">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
        {/* Col 1 – Brand */}
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-5 brightness-0 invert opacity-90">
            <BtnLogo height={36} />
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Proforma-driven hotel development advisory for Metro Vancouver and the Lower Mainland.
          </p>
        </div>

        {/* Col 2 – Spacer (hidden on mobile) */}
        <div className="hidden lg:block" />

        {/* Col 3 – Navigate A */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-accent">Navigate</h4>
          <nav className="flex flex-col gap-3">
            {navLinksCol1.map((l) => (
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

        {/* Col 4 – Navigate B */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-5 text-accent">&nbsp;</h4>
          <nav className="flex flex-col gap-3">
            {navLinksCol2.map((l) => (
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

        {/* Col 5 – Contact */}
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
