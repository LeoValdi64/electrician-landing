import {
  Shield,
  FileCheck,
  CalendarCheck,
  BadgeDollarSign,
  Clock,
  Award,
  Headphones,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "WA State licensed master electricians. Fully bonded and insured for your complete protection and peace of mind.",
  },
  {
    icon: FileCheck,
    title: "Free Estimates",
    description:
      "Transparent, upfront pricing with detailed written estimates. No hidden fees, no surprises — ever.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day Service",
    description:
      "Need it done today? We offer same-day service for most electrical repairs and installations in the Seattle area.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description:
      "Premium quality work at fair, competitive prices. We provide real value without cutting corners on safety.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "We respect your time. Our electricians arrive in scheduled windows and keep you updated every step of the way.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description:
      "100% satisfaction guaranteed on all work. If you're not happy, we'll make it right — that's our promise.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Electrical emergencies don't wait, and neither do we. Our dispatch team is available around the clock.",
  },
  {
    icon: Wrench,
    title: "Clean & Professional",
    description:
      "Uniformed technicians who wear boot covers, lay down drop cloths, and leave your space cleaner than they found it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-surface relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-yellow/10 border border-electric-yellow/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-electric-yellow" />
            <span className="text-sm text-electric-yellow font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The PowerFlow{" "}
            <span className="text-gradient-electric">Difference</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            We&apos;re not just electricians — we&apos;re your neighbors. Family-owned
            and operated in Seattle for over 15 years.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 lg:mb-20">
          {[
            { value: "15+", label: "Years in Business" },
            { value: "10,000+", label: "Jobs Completed" },
            { value: "4.9", label: "Average Rating" },
            { value: "60min", label: "Avg. Response Time" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-surface-light border border-border rounded-xl p-6"
            >
              <p className="text-3xl lg:text-4xl font-bold text-electric-blue mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group text-center p-6 rounded-2xl hover:bg-surface-light transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-electric-blue/20 transition-colors">
                <reason.icon className="w-7 h-7 text-electric-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
