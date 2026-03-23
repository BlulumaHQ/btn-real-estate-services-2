import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Index from "./pages/Index";
import WhatWeDo from "./pages/WhatWeDo";
import Projects from "./pages/Projects";
import OurProcess from "./pages/OurProcess";
import Ecosystem from "./pages/Ecosystem";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AppInner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          {/* Legacy redirects */}
          <Route path="/services" element={<WhatWeDo />} />
          {/* Legal placeholder pages */}
          <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
          <Route path="/terms" element={<LegalPage title="Terms of Use" />} />
          <Route path="/disclaimer" element={<LegalPage title="Disclaimer" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const LegalPage = ({ title }: { title: string }) => (
  <section className="pt-36 pb-24 min-h-screen bg-white">
    <div className="container mx-auto px-6 max-w-3xl">
      <h1 className="text-3xl font-black text-foreground mb-6">{title}</h1>
      <p className="text-muted-foreground leading-relaxed">
        This page is under development. Please contact{" "}
        <a href="mailto:info@BTNpro.ca" className="text-primary hover:underline">info@BTNpro.ca</a>{" "}
        for enquiries regarding BTN's {title.toLowerCase()}.
      </p>
    </div>
  </section>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
