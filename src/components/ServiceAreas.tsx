import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  {
    name: "Seattle",
    neighborhoods: [
      "Capitol Hill",
      "Ballard",
      "Fremont",
      "Green Lake",
      "Queen Anne",
      "Wallingford",
      "University District",
      "Beacon Hill",
    ],
  },
  {
    name: "Eastside",
    neighborhoods: [
      "Bellevue",
      "Kirkland",
      "Redmond",
      "Woodinville",
      "Bothell",
      "Issaquah",
      "Sammamish",
      "Mercer Island",
    ],
  },
  {
    name: "South King County",
    neighborhoods: [
      "Renton",
      "Kent",
      "Tukwila",
      "Federal Way",
      "Auburn",
      "SeaTac",
      "Burien",
      "Des Moines",
    ],
  },
  {
    name: "North Sound",
    neighborhoods: [
      "Shoreline",
      "Edmonds",
      "Lynnwood",
      "Mountlake Terrace",
      "Kenmore",
      "Lake Forest Park",
      "Mill Creek",
      "Everett",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-electric-blue" />
            <span className="text-sm text-electric-blue-light font-medium">
              Service Areas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Serving the Greater{" "}
            <span className="text-gradient-electric">Seattle Area</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            From downtown Seattle to the Eastside and beyond, our licensed
            electricians provide fast, reliable service throughout the Puget
            Sound region.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.name}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-electric-blue/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                </div>
                <h3 className="text-lg font-bold">{area.name}</h3>
              </div>
              <div className="space-y-2.5">
                {area.neighborhoods.map((hood) => (
                  <div
                    key={hood}
                    className="flex items-center gap-2.5 text-sm text-muted"
                  >
                    <CheckCircle className="w-4 h-4 text-electric-blue/60 shrink-0" />
                    <span>{hood}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-surface border border-border rounded-2xl p-6 sm:p-8">
            <p className="text-muted">
              Don&apos;t see your area?{" "}
              <span className="text-foreground font-medium">
                Call us — we likely cover it!
              </span>
            </p>
            <a
              href="tel:+12065550187"
              className="bg-electric-blue hover:bg-electric-blue-dark text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
