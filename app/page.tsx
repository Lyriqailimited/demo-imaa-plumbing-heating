export default function Home() {
  const calendarLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book"
  return (
    <main style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc' }}>
      <section style={{ background: 'linear-gradient(135deg, #B90007 0%, #B90007 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 9999, padding: '6px 16px', fontSize: 14, color: 'white', marginBottom: 24 }}>
            London
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
            IMAA Plumbing & Heating
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: 32, lineHeight: 1.6 }}>
            London's trusted 24/7 plumbing & heating experts with 4.9-star reviews
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#widget" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)' }}>
              Try AI Receptionist
            </a>
            <a href="tel:+447428223052" style={{ background: 'rgba(0,0,0,0.2)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)' }}>
              Call +44 7428 223052
            </a>
          </div>
        </div>
      </section>
      <section id="widget" style={{ padding: '80px 24px', background: '#0f172a' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Talk to Our AI Receptionist</h2>
          <p style={{ color: '#94a3b8', marginBottom: 32 }}>Available 24/7 to answer your questions instantly</p>
          <iframe src="/widget.html" title="AI Voice Receptionist" width="100%" height="600" style={{ border: 'none', borderRadius: 12 }} />
        </div>
      </section>
      <section style={{ padding: '80px 24px', background: '#0c1426' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Our Services</h2>
          <p style={{ color: '#94a3b8', marginBottom: 48 }}>Comprehensive solutions across London</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            <div key="plumbing" style={{ background: '#132f4c', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(37, 99, 235, 0.2)', borderRadius: 12, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🔧</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>plumbing</h3>
            </div>
            <div key="heating" style={{ background: '#132f4c', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(37, 99, 235, 0.2)', borderRadius: 12, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🔧</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>heating</h3>
            </div>
            <div key="emergency call-outs" style={{ background: '#132f4c', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(37, 99, 235, 0.2)', borderRadius: 12, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🔧</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>emergency call-outs</h3>
            </div>
            <div key="installations" style={{ background: '#132f4c', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(37, 99, 235, 0.2)', borderRadius: 12, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🔧</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>installations</h3>
            </div>
            <div key="repairs" style={{ background: '#132f4c', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(37, 99, 235, 0.2)', borderRadius: 12, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🔧</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>repairs</h3>
            </div>
            <div key="maintenance" style={{ background: '#132f4c', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(37, 99, 235, 0.2)', borderRadius: 12, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🔧</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>maintenance</h3>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 24px', background: '#0f172a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>Why an AI Receptionist?</h2>
          <p style={{ color: '#94a3b8', marginBottom: 48 }}>Never miss a customer enquiry</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { icon: '🕐', title: '24/7 Availability', desc: 'Your AI receptionist never sleeps.' },
              { icon: '📅', title: 'Instant Booking', desc: 'Customers book instantly without waiting on hold.' },
              { icon: '📞', title: 'Never Miss a Call', desc: 'Every enquiry gets a professional response.' },
            ].map((f) => (
              <div key={f.title} style={{ background: '#132f4c', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 16, padding: 32 }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #B90007 0%, #B90007 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>Ready to grow your business?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 32, lineHeight: 1.6 }}>Book a free demo call and see how an AI receptionist can transform your business.</p>
          <a href={calendarLink} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '16px 40px', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)' }}>Book a Demo Call</a>
        </div>
      </section>
    </main>
  )
}
