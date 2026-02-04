import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-electric-yellow" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight tracking-tight">
                  Power<span className="text-electric-blue">Flow</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted leading-none">
                  Electric
                </span>
              </div>
            </a>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Seattle&apos;s trusted electricians since 2009. Licensed, bonded, and
              insured for your protection.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-surface-light border border-border flex items-center justify-center text-muted hover:text-electric-blue hover:border-electric-blue/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-surface-light border border-border flex items-center justify-center text-muted hover:text-electric-blue hover:border-electric-blue/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-surface-light border border-border flex items-center justify-center text-muted hover:text-electric-blue hover:border-electric-blue/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Residential Electrical",
                "Commercial Electrical",
                "Emergency Services",
                "EV Charger Installation",
                "Lighting Solutions",
                "Smart Home Wiring",
                "Panel Upgrades",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-muted hover:text-electric-blue-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-electric-blue mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+12065550187"
                    className="text-sm text-muted hover:text-electric-blue-light transition-colors"
                  >
                    (206) 555-0187
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-electric-blue mt-0.5 shrink-0" />
                <a
                  href="mailto:info@powerflowelectric.com"
                  className="text-sm text-muted hover:text-electric-blue-light transition-colors"
                >
                  info@powerflowelectric.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-electric-blue mt-0.5 shrink-0" />
                <p className="text-sm text-muted">
                  4521 Rainier Ave S<br />
                  Seattle, WA 98118
                </p>
              </div>
            </div>
          </div>

          {/* Hours & License */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5">
              Business Hours
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-electric-blue mt-0.5 shrink-0" />
                <div className="text-sm text-muted space-y-1">
                  <p>Mon - Fri: 7:00 AM - 7:00 PM</p>
                  <p>Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: Emergency Only</p>
                  <p className="text-electric-yellow font-medium">
                    24/7 Emergency Service
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-electric-yellow mt-0.5 shrink-0" />
                  <div className="text-sm text-muted space-y-1">
                    <p className="font-medium text-foreground">License Info</p>
                    <p>WA License #POWERE*835B1</p>
                    <p>Bonded & Insured</p>
                    <p>Master Electrician</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} PowerFlow Electric. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-muted hover:text-electric-blue-light transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-muted hover:text-electric-blue-light transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs text-muted hover:text-electric-blue-light transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
