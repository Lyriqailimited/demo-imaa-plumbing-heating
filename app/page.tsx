export default function Home() {
  const services = [
    "Plumbing",
    "Heating",
    "Emergency Call-outs",
    "Installations",
    "Repairs",
    "Maintenance",
  ]

  const features = [
    {
      title: "24/7 Availability",
      description: "Our AI receptionist never sleeps. Answer customer queries at 3am or over the weekend — every call handled instantly.",
      icon: "🕐",
    },
    {
      title: "Instant Booking",
      description: "Customers can book appointments right from the conversation. No hold music, no missed opportunities.",
      icon: "📅",
    },
    {
      title: "Never Miss a Call",
      description: "Every enquiry captured, every lead followed up. Stop losing business to voicemail.",
      icon: "📞",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-6 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #B90007 0%, #7A0005 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IMAA Plumbing &amp; Heating</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            London&apos;s trusted 24/7 plumbing &amp; heating experts with 4.9-star reviews
          </p>
          <a
            href="#widget"
            className="inline-block bg-white text-[#B90007] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Speak to Our AI Receptionist
          </h2>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="w-3 h-3 rounded-full mb-3"
                  style={{ background: "#B90007" }}
                />
                <h3 className="font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6" style={{ background: "#fdf2f2" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Let AI handle your calls so your team can focus on the job.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to automate your calls?</h2>
        <p className="text-gray-500 mb-8">Book a free demo call with our team and see it live.</p>
        <a
          href="#book"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          style={{ background: "#B90007" }}
        >
          Book a Demo Call
        </a>
      </section>
    </main>
  )
}
