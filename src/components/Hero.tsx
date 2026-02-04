import {
  Zap,
  Phone,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-gradient bg-grid overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-yellow/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-electric-blue-light font-medium">
                24/7 Emergency Service Available
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Seattle&apos;s Most{" "}
                <span className="text-gradient-electric">Trusted</span>{" "}
                Electricians
              </h1>
              <p className="text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
                Licensed, bonded &amp; insured professionals delivering safe,
                reliable electrical solutions for your home and business.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "Same-Day Service" },
                { icon: Star, text: "5-Star Rated" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-muted"
                >
                  <badge.icon className="w-4 h-4 text-electric-yellow" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12065550187"
                className="animate-pulse-glow inline-flex items-center justify-center gap-3 bg-electric-yellow hover:bg-electric-yellow-dark text-background font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                (206) 555-0187
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-surface-light hover:bg-surface-lighter border border-border text-foreground font-semibold px-8 py-4 rounded-xl text-lg transition-all group"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-surface-lighter border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-electric-blue">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-electric-yellow text-electric-yellow"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted">
                  500+ happy customers in Seattle
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Card */}
          <div className="relative">
            <div className="relative bg-surface border border-border rounded-2xl p-8 lg:p-10 glow-blue-sm">
              {/* Emergency Badge */}
              <div className="absolute -top-4 left-8 bg-red-500/90 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-2">
                <Zap className="w-3 h-3" />
                Emergency? We&apos;re On Our Way
              </div>

              <div className="space-y-6 mt-4">
                <h2 className="text-2xl font-bold">
                  Why PowerFlow Electric?
                </h2>

                <div className="space-y-4">
                  {[
                    "Licensed Master Electricians (WA #POWERE*835B1)",
                    "Upfront pricing — no surprises",
                    "Same-day service available",
                    "100% satisfaction guarantee",
                    "Free safety inspections",
                    "All work permitted & inspected",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                      <span className="text-muted">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted">Starting from</p>
                      <p className="text-3xl font-bold text-electric-yellow">
                        $89
                      </p>
                      <p className="text-xs text-muted">service call</p>
                    </div>
                    <a
                      href="#pricing"
                      className="bg-electric-blue/10 hover:bg-electric-blue/20 border border-electric-blue/30 text-electric-blue-light px-6 py-3 rounded-xl font-semibold transition-all text-sm"
                    >
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 glow-blue-sm animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric-yellow/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-electric-yellow" />
                </div>
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-xs text-muted">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-surface border border-border rounded-xl p-4 glow-blue-sm animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-xs text-muted">Jobs Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
