import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BtnLogo from "@/components/BtnLogo";

const navItems = [
  { label: "Home", path: "/" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Projects", path: "/projects" },
  { label: "Our Process", path: "/our-process" },
  { label: "Ecosystem", path: "/ecosystem" },
  { label: "About BTN", path: "/about" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path: string) =>
    location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-sm border-b border-border" : "border-b border-border/40"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <BtnLogo height={38} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-xs font-semibold tracking-wide uppercase transition-colors hover:text-accent ${
                isActive(item.path) ? "text-accent" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wide rounded bg-accent text-accent-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Start a Conversation
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="xl:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="text-foreground" size={24} />
          ) : (
            <Menu className="text-foreground" size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-5 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-base font-semibold uppercase tracking-wide transition-colors hover:text-accent ${
                    isActive(item.path) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-8 py-3 text-sm font-bold uppercase tracking-wide rounded bg-accent text-accent-foreground"
              >
                Start a Conversation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
