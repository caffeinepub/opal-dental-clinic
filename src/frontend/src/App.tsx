import { Button } from "@/components/ui/button";
import {
  Activity,
  Anchor,
  ArrowUpDown,
  Baby,
  ChevronRight,
  Clock,
  ExternalLink,
  Heart,
  IndianRupee,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Star,
  Sun,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FEATURES: FeatureCard[] = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Experienced Dentists",
    description:
      "Our skilled dentists bring years of expertise and compassionate care to every patient.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Modern Equipment",
    description:
      "State-of-the-art dental technology for precise, effective, and comfortable treatment.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Painless Treatments",
    description:
      "Gentle procedures with advanced anesthesia to keep you completely comfortable.",
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Affordable Care",
    description:
      "Quality dental care at prices that work for every family and budget.",
  },
];

const SERVICES: ServiceCard[] = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Teeth Cleaning",
    description:
      "Professional cleaning to remove plaque, tartar, and keep your smile bright and healthy.",
    color: "bg-teal-light text-teal",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Teeth Whitening",
    description:
      "Effective whitening treatments for a noticeably brighter, more confident smile.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Dental Fillings",
    description:
      "Durable tooth-colored fillings to restore decayed or damaged teeth naturally.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Root Canal Treatment",
    description:
      "Painless root canal therapy to save your natural tooth from further damage.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Tooth Extraction",
    description:
      "Safe, gentle extractions when necessary to protect your overall oral health.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: <ArrowUpDown className="w-6 h-6" />,
    title: "Braces & Aligners",
    description:
      "Metal braces and clear aligners to straighten your teeth at any age.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement that looks, feels, and functions exactly like natural teeth.",
    color: "bg-teal-light text-teal-dark",
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: "Pediatric Dentistry",
    description:
      "Kid-friendly dental care in a warm, welcoming environment children love.",
    color: "bg-pink-50 text-pink-500",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Krian+Market+Complex+Benta+Rd+Laheriasarai+Darbhanga+Bihar+846001";

// ─── Tooth Logo SVG ───────────────────────────────────────────────────────────

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 2C13.5 2 8 6.5 8 12.5C8 16 9.5 19 9.5 22.5C9.5 28 8 38 12 40C14.5 41.5 16 37.5 17 34C17.8 31 18.5 29 20 29C21.5 29 22.2 31 23 34C24 37.5 25.5 41.5 28 40C32 38 30.5 28 30.5 22.5C30.5 19 32 16 32 12.5C32 6.5 26.5 2 20 2Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 10C14 10 15 14 20 14C25 14 26 10 26 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleNavClick(href: string) {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-nav"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="w-9 h-9 text-teal group-hover:scale-110 transition-transform duration-200">
              <ToothIcon className="w-full h-full" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                Opal Dental
              </span>
              <span className="block text-xs text-teal font-semibold tracking-wide uppercase">
                Clinic
              </span>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-teal rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9570707077"
              className="flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>95707 07077</span>
            </a>
            <Button
              onClick={() => handleNavClick("#appointment")}
              className="bg-teal hover:bg-teal-dark text-white font-semibold px-5 h-9 rounded-full shadow-none transition-all duration-200"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="py-3 space-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-teal hover:bg-teal-light rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 px-2 space-y-2">
                  <a
                    href="tel:9570707077"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-teal"
                  >
                    <Phone className="w-4 h-4" />
                    95707 07077
                  </a>
                  <Button
                    onClick={() => handleNavClick("#appointment")}
                    className="w-full bg-teal hover:bg-teal-dark text-white font-semibold rounded-full"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-white via-[oklch(0.97_0.015_192)] to-[oklch(0.94_0.03_210)]"
    >
      {/* Subtle background blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl bg-[oklch(0.8_0.1_192)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl bg-[oklch(0.7_0.15_220)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-light text-teal text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Trusted Dental Care in Darbhanga
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Smile, <span className="text-teal">Our Priority</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed mb-8 max-w-lg">
              Trusted dental care in the heart of Darbhanga, Bihar — where your
              comfort, health, and smile always come first. From routine
              check-ups to advanced treatments, we&apos;re here for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => scrollTo("#appointment")}
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white font-semibold px-7 h-12 rounded-full shadow-md shadow-teal/20 transition-all duration-200 hover:shadow-lg hover:shadow-teal/30 hover:-translate-y-0.5"
              >
                Book an Appointment
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                onClick={() => scrollTo("#services")}
                variant="outline"
                size="lg"
                className="border-teal text-teal hover:bg-teal-light font-semibold px-7 h-12 rounded-full transition-all duration-200"
              >
                Our Services
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border/60">
              {[
                { value: "2000+", label: "Happy Patients" },
                { value: "8+", label: "Dental Services" },
                { value: "Expert", label: "Qualified Dentists" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-teal">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal/10 to-blue-500/5 transform rotate-3 scale-95"
                aria-hidden="true"
              />
              <img
                src="/assets/generated/hero-dental.dim_700x500.png"
                alt="Professional dental care at Opal Dental Clinic"
                className="relative rounded-3xl w-full shadow-2xl shadow-teal/15 object-cover"
                loading="eager"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center text-teal">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-foreground/50 font-medium">
                    Call to Book
                  </div>
                  <div className="font-display font-bold text-sm text-foreground">
                    95707 07077
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-light text-teal text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Why Opal Dental
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-foreground/55 text-base max-w-xl mx-auto">
            We combine expertise, technology, and compassion to deliver dental
            care you can trust.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/55 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-light text-teal text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            What We Offer
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Dental Services
          </h2>
          <p className="text-foreground/55 text-base max-w-xl mx-auto">
            Comprehensive dental care for the whole family — from preventive
            treatments to advanced restorative procedures.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-foreground mb-1.5 text-sm sm:text-base leading-snug">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Appointment Section ──────────────────────────────────────────────────────

function AppointmentSection() {
  return (
    <section
      id="appointment"
      className="py-16 lg:py-24 bg-gradient-to-br from-teal to-[oklch(0.45_0.12_210)] text-white relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 text-white text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            <Phone className="w-3.5 h-3.5" />
            Easy Booking
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Book Your Appointment
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-10 max-w-lg mx-auto">
            We&apos;re just a call away. To book your appointment, simply call
            us during our working hours and we&apos;ll get you scheduled.
          </p>

          {/* Phone number display */}
          <div className="inline-flex flex-col items-center bg-white/10 border border-white/20 rounded-3xl px-10 py-8 mb-8 backdrop-blur-sm">
            <p className="text-white/60 text-sm font-medium mb-2">Call Us At</p>
            <a
              href="tel:9570707077"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight hover:text-white/80 transition-colors group flex items-center gap-3"
              aria-label="Call 95707 07077"
            >
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 group-hover:animate-pulse" />
              95707 07077
            </a>
          </div>

          {/* Call to action button */}
          <div className="flex justify-center mb-12">
            <a href="tel:9570707077">
              <Button
                size="lg"
                className="bg-white text-teal hover:bg-white/90 font-bold px-10 h-14 rounded-full text-base sm:text-lg shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now to Book
              </Button>
            </a>
          </div>

          {/* Working hours */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-sm mx-auto backdrop-blur-sm">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Clock className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg">Working Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/70 text-sm font-medium">
                  Monday – Saturday
                </span>
                <span className="font-semibold text-sm">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/70 text-sm font-medium">
                  Sunday
                </span>
                <span className="font-semibold text-sm">
                  10:00 AM – 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[oklch(0.94_0.04_192)] to-[oklch(0.88_0.06_200)] rounded-3xl p-8 sm:p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "2000+",
                    label: "Happy Patients",
                    icon: <Heart className="w-5 h-5" />,
                  },
                  {
                    value: "8+",
                    label: "Services Offered",
                    icon: <Sparkles className="w-5 h-5" />,
                  },
                  {
                    value: "Expert",
                    label: "Qualified Dentists",
                    icon: <Star className="w-5 h-5" />,
                  },
                  {
                    value: "Mon–Sun",
                    label: "Available Weekly",
                    icon: <Clock className="w-5 h-5" />,
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-5 text-center shadow-card"
                  >
                    <div className="text-teal flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/50 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-teal-light -z-10"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-light text-teal text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Our Story
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Opal Dental Clinic
            </h2>
            <div className="space-y-4 text-foreground/60 leading-relaxed">
              <p>
                Opal Dental Clinic is a trusted dental practice located in the
                heart of Laheriasarai, Darbhanga, Bihar. Our mission is to
                deliver exceptional, patient-centered dental care in a
                comfortable and welcoming environment.
              </p>
              <p>
                We believe every patient deserves a healthy, confident smile.
                Our team of experienced, compassionate dentists combines the
                latest technology with personalized attention to ensure the best
                outcomes for each individual.
              </p>
              <p>
                From preventive care and children&apos;s dentistry to advanced
                treatments like dental implants and root canal therapy, we offer
                comprehensive services for the entire family. Conveniently
                located near Sharma Diagnostic in Benta, Darbhanga, we make
                quality dental care accessible to all.
              </p>
            </div>
            <div className="mt-8 flex items-start gap-3 p-4 bg-teal-light rounded-xl border border-teal/20">
              <MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/70">
                Krian Market Complex, Benta Rd, near Sharma Diagnostic, beside
                H.D.F.C ATM, Benta, Laheriasarai, Darbhanga, Bihar 846001
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-light text-teal text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Find Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact & Location
          </h2>
          <p className="text-foreground/55 text-base max-w-md mx-auto">
            We&apos;re conveniently located in Darbhanga. Stop by or give us a
            call — we&apos;d love to meet you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-3 text-lg">
              Our Address
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed mb-4">
              Krian Market Complex, Benta Rd,
              <br />
              near Sharma Diagnostic, beside H.D.F.C ATM,
              <br />
              Benta, Laheriasarai,
              <br />
              Darbhanga, Bihar 846001
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

          {/* Phone card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-3 text-lg">
              Phone
            </h3>
            <p className="text-sm text-foreground/60 mb-4">
              Call us to book an appointment or for any queries.
            </p>
            <a
              href="tel:9570707077"
              className="inline-flex items-center gap-2 text-xl font-display font-bold text-teal hover:text-teal-dark transition-colors"
              aria-label="Call 95707 07077"
            >
              <Phone className="w-5 h-5" />
              95707 07077
            </a>
          </motion.div>

          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-card border border-border sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-3 text-lg">
              Working Hours
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm py-2 border-b border-border">
                <span className="text-foreground/60">Monday – Saturday</span>
                <span className="font-semibold text-foreground">
                  9:00 AM – 8:00 PM
                </span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-foreground/60">Sunday</span>
                <span className="font-semibold text-foreground">
                  10:00 AM – 2:00 PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-teal to-[oklch(0.5_0.13_200)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white"
        >
          <div>
            <h3 className="font-display font-bold text-xl mb-1">
              Find us on the map
            </h3>
            <p className="text-white/70 text-sm">
              Located in Krian Market Complex near Sharma Diagnostic, Benta,
              Darbhanga
            </p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button
              size="lg"
              className="bg-white text-teal hover:bg-white/90 font-bold px-7 rounded-full h-11 whitespace-nowrap"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 text-teal">
                <ToothIcon className="w-full h-full" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">
                  Opal Dental Clinic
                </div>
                <div className="text-xs text-teal font-semibold tracking-wide">
                  Your Smile, Our Priority
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/55 mb-5">
              Trusted dental care for the whole family in Darbhanga, Bihar.
              Modern equipment, experienced dentists, affordable treatments.
            </p>
            <a
              href="tel:9570707077"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              95707 07077
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Book Appointment", href: "#appointment" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/55 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-white/55">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Krian Market Complex, Benta Rd, Laheriasarai, Darbhanga, Bihar
                  846001
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <a
                  href="tel:9570707077"
                  className="hover:text-teal transition-colors"
                >
                  95707 07077
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Clock className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <div>
                  <div>Mon–Sat: 9AM–8PM</div>
                  <div>Sun: 10AM–2PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <span>&copy; {year} Opal Dental Clinic. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-light transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesSection />
        <AppointmentSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
