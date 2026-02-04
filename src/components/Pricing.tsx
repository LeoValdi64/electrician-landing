import {
  Check,
  Zap,
  Home,
  Building2,
  Star,
  Phone,
} from "lucide-react";

const packages = [
  {
    icon: Home,
    name: "Residential Basic",
    price: "$89",
    unit: "service call",
    description:
      "Perfect for simple repairs, troubleshooting, and minor electrical work around the home.",
    features: [
      "Diagnostic & troubleshooting",
      "Outlet & switch repairs",
      "Light fixture installation",
      "GFCI outlet installation",
      "Ceiling fan installation",
      "Smoke detector install/replace",
    ],
    popular: false,
    cta: "Book Service",
  },
  {
    icon: Zap,
    name: "Home Pro",
    price: "$249",
    unit: "starting at",
    description:
      "Comprehensive electrical services for upgrades, renovations, and larger home projects.",
    features: [
      "Everything in Basic",
      "Panel upgrades (100A/200A)",
      "Circuit additions",
      "Whole-home rewiring",
      "Recessed lighting packages",
      "EV charger installation",
      "Smart home wiring",
      "Dedicated appliance circuits",
    ],
    popular: true,
    cta: "Get Free Estimate",
  },
  {
    icon: Building2,
    name: "Commercial",
    price: "Custom",
    unit: "per project",
    description:
      "Tailored commercial electrical solutions for businesses of all sizes. Volume discounts available.",
    features: [
      "Tenant improvements",
      "3-phase power systems",
      "Emergency/backup generators",
      "Commercial lighting design",
      "Code compliance upgrades",
      "Preventive maintenance plans",
      "Data & network cabling",
      "Priority scheduling",
    ],
    popular: false,
    cta: "Request Quote",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-electric-blue" />
            <span className="text-sm text-electric-blue-light font-medium">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Honest Pricing,{" "}
            <span className="text-gradient-electric">No Surprises</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            We believe in upfront, transparent pricing. Every job comes with a
            written estimate before work begins. No hidden fees, ever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-surface border rounded-2xl p-8 flex flex-col ${
                pkg.popular
                  ? "border-electric-blue/50 glow-blue-sm"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-electric-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    pkg.popular
                      ? "bg-electric-blue/20 border border-electric-blue/30"
                      : "bg-surface-light border border-border"
                  }`}
                >
                  <pkg.icon
                    className={`w-6 h-6 ${
                      pkg.popular ? "text-electric-blue" : "text-muted"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-electric-yellow">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted">/{pkg.unit}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check
                      className={`w-4 h-4 shrink-0 ${
                        pkg.popular
                          ? "text-electric-blue"
                          : "text-electric-blue/60"
                      }`}
                    />
                    <span className="text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={pkg.name === "Commercial" ? "#contact" : "tel:+12065550187"}
                className={`block text-center font-semibold py-3.5 px-6 rounded-xl transition-all text-sm ${
                  pkg.popular
                    ? "bg-electric-blue hover:bg-electric-blue-dark text-white"
                    : "bg-surface-light hover:bg-surface-lighter border border-border text-foreground"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-surface border border-border rounded-2xl p-6">
            <Phone className="w-5 h-5 text-electric-yellow shrink-0" />
            <p className="text-sm text-muted">
              Not sure which package is right for you?{" "}
              <a
                href="tel:+12065550187"
                className="text-electric-blue-light font-semibold hover:underline"
              >
                Call us for a free consultation
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
