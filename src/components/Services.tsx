import {
  Home,
  Building2,
  Siren,
  Plug,
  Lightbulb,
  Cable,
  CircuitBoard,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description:
      "Complete home electrical services including wiring, panel upgrades, lighting installation, and code compliance. Keep your family safe.",
    features: ["Panel Upgrades", "Rewiring", "Lighting", "Code Updates"],
    color: "electric-blue" as const,
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description:
      "Full-service commercial electrician for offices, retail, restaurants, and industrial facilities. Minimize downtime, maximize safety.",
    features: ["Tenant Improvements", "3-Phase Power", "Data Cabling", "Lighting Design"],
    color: "electric-blue" as const,
  },
  {
    icon: Siren,
    title: "Emergency Services",
    description:
      "Power outage? Sparking wires? Burning smell? Our emergency team responds 24/7 with rapid dispatch across the Seattle metro area.",
    features: ["24/7 Dispatch", "60-Min Response", "Storm Damage", "Power Restore"],
    color: "electric-yellow" as const,
  },
  {
    icon: Plug,
    title: "EV Charger Installation",
    description:
      "Level 2 home EV charger installation for Tesla, Rivian, and all electric vehicles. Certified installers, clean work, done right.",
    features: ["Level 2 Chargers", "Tesla Wall Connector", "Load Balancing", "Permit Included"],
    color: "electric-blue" as const,
  },
  {
    icon: Lightbulb,
    title: "Lighting Solutions",
    description:
      "From recessed lighting to landscape illumination, we design and install lighting that transforms your space and cuts energy costs.",
    features: ["Recessed Lighting", "Under-Cabinet", "Outdoor/Landscape", "LED Retrofits"],
    color: "electric-blue" as const,
  },
  {
    icon: CircuitBoard,
    title: "Smart Home Wiring",
    description:
      "Future-proof your home with smart wiring for automation, security, entertainment, and energy management systems.",
    features: ["Home Automation", "Security Systems", "Whole-Home Audio", "Network Cabling"],
    color: "electric-blue" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-4 py-2 mb-6">
            <Cable className="w-4 h-4 text-electric-blue" />
            <span className="text-sm text-electric-blue-light font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Expert Electrical Services for{" "}
            <span className="text-gradient-electric">Every Need</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            From simple repairs to complex installations, our licensed
            electricians deliver safe, code-compliant work backed by our
            satisfaction guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface border border-border rounded-2xl p-8 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/5"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === "electric-yellow"
                    ? "bg-electric-yellow/10 border border-electric-yellow/20"
                    : "bg-electric-blue/10 border border-electric-blue/20"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "electric-yellow"
                      ? "text-electric-yellow"
                      : "text-electric-blue"
                  }`}
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="text-xs text-muted bg-surface-light rounded-lg px-3 py-2 text-center"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric-blue-light group-hover:text-electric-blue transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
