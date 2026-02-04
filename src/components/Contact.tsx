"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-yellow/10 border border-electric-yellow/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-electric-yellow" />
            <span className="text-sm text-electric-yellow font-medium">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get{" "}
            <span className="text-gradient-electric">Started?</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Get your free estimate today. Call us or fill out the form below and
            we&apos;ll get back to you within 2 hours.
          </p>
        </div>

        {/* Phone CTA - Prominent */}
        <div className="max-w-2xl mx-auto mb-12">
          <a
            href="tel:+12065550187"
            className="flex items-center justify-center gap-4 bg-electric-yellow hover:bg-electric-yellow-dark text-background font-bold py-6 px-8 rounded-2xl text-2xl sm:text-3xl transition-all animate-pulse-glow"
          >
            <Phone className="w-8 h-8" />
            (206) 555-0187
          </a>
          <p className="text-center text-sm text-muted mt-3">
            Available 24/7 for emergencies
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Zap className="w-5 h-5 text-electric-yellow" />
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a
                      href="tel:+12065550187"
                      className="text-electric-blue-light hover:underline text-sm"
                    >
                      (206) 555-0187
                    </a>
                    <p className="text-xs text-muted mt-0.5">24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a
                      href="mailto:info@powerflowelectric.com"
                      className="text-electric-blue-light hover:underline text-sm"
                    >
                      info@powerflowelectric.com
                    </a>
                    <p className="text-xs text-muted mt-0.5">
                      Response within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Office</p>
                    <p className="text-sm text-muted">
                      4521 Rainier Ave S<br />
                      Seattle, WA 98118
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Hours</p>
                    <div className="text-sm text-muted space-y-0.5">
                      <p>Mon - Fri: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-surface border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-muted max-w-md mx-auto">
                    Thank you for contacting PowerFlow Electric. We&apos;ll get
                    back to you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-electric-blue-light font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold mb-2">
                    Request a Free Estimate
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-colors"
                        placeholder="(206) 555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      required
                      className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option>Residential Electrical</option>
                      <option>Commercial Electrical</option>
                      <option>Emergency Service</option>
                      <option>EV Charger Installation</option>
                      <option>Lighting Installation</option>
                      <option>Panel Upgrade</option>
                      <option>Smart Home Wiring</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-colors resize-none"
                      placeholder="Describe your electrical needs, preferred timeline, and any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-electric-blue hover:bg-electric-blue-dark text-white font-semibold py-4 px-8 rounded-xl transition-all hover:shadow-lg hover:shadow-electric-blue/25 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Request
                  </button>

                  <p className="text-xs text-muted text-center">
                    By submitting this form, you agree to be contacted by
                    PowerFlow Electric regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
