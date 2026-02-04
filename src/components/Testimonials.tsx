import { Star, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Capitol Hill, Seattle",
    rating: 5,
    text: "PowerFlow upgraded our entire electrical panel and installed recessed lighting throughout the house. They were professional, clean, and finished ahead of schedule. The upfront pricing was exactly what we paid — no surprises. Highly recommend!",
    service: "Panel Upgrade & Lighting",
  },
  {
    name: "David & Lisa K.",
    location: "Bellevue, WA",
    rating: 5,
    text: "We had a power outage at 11pm on a Saturday night. Called PowerFlow and they had someone at our door within 45 minutes. Turned out to be a critical wiring issue that could have been dangerous. So grateful for their fast response!",
    service: "Emergency Service",
  },
  {
    name: "Mark T.",
    location: "Redmond, WA",
    rating: 5,
    text: "Best EV charger installation experience ever. They handled everything — permits, installation, inspection. My Tesla Wall Connector was up and running in one day. Clean work, fair price, and they even explained the load balancing setup.",
    service: "EV Charger Installation",
  },
  {
    name: "Jennifer R.",
    location: "Ballard, Seattle",
    rating: 5,
    text: "We remodeled our 1940s craftsman and PowerFlow handled all the electrical. They brought the entire house up to code, installed new circuits for the kitchen, and added smart switches throughout. Meticulous, knowledgeable, and a pleasure to work with.",
    service: "Whole Home Rewire",
  },
  {
    name: "Robert Chen",
    location: "Kirkland, WA",
    rating: 5,
    text: "As a restaurant owner, I needed someone I could trust for our commercial electrical needs. PowerFlow has been our go-to for 3 years. They work around our schedule, keep things running, and their preventive maintenance has saved us from costly shutdowns.",
    service: "Commercial Electrical",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-surface relative"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-yellow/10 border border-electric-yellow/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-electric-yellow" />
            <span className="text-sm text-electric-yellow font-medium">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our Customers{" "}
            <span className="text-gradient-electric">Say</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our customers across
            the Seattle area have to say about PowerFlow Electric.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-surface-light border border-border rounded-2xl p-8 hover:border-electric-blue/30 transition-colors ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-electric-yellow text-electric-yellow"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-electric-blue/20" />
              </div>

              <p className="text-muted leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-electric-blue">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-surface border border-border rounded-lg px-3 py-1.5 text-muted">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-2 bg-surface-light border border-border rounded-2xl p-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-electric-yellow text-electric-yellow"
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="text-foreground font-bold">4.9/5.0</span> average
              rating across 500+ reviews on Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
