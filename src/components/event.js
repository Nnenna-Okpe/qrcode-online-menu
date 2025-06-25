import React from 'react';

export const EventPage = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #fdfcfb, #e2d1c3)',
        minHeight: '100vh',
        fontFamily: 'Poppins, sans-serif',
        padding: '2rem 1rem',
      }}
    >
      {/* Hero Section */}
      <section className="text-center text-dark mb-5">
        <h1 className="display-3 fw-bold">🌸 Daisy Life Event</h1>
        <p className="lead text-secondary">
          A day of wellness, connection, and inspiration in the heart of NYC.
        </p>
        <p className="fw-semibold">March 25, 2023 • Central Park, NYC</p>
        <a
          href="https://www.instagram.com/daisylifeng/"
          className="btn btn-lg btn-outline-dark mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Follow Us on Instagram
        </a>
      </section>

      {/* Image + Description Section */}
      <div className="container mb-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Event"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <div className="bg-white rounded-4 shadow p-4">
              <h4 className="fw-bold mb-3">✨ What’s This About?</h4>
              <p>
                Immerse yourself in a transformative day filled with community, purpose, and joy. Our goal is to foster connection, self-care, and shared growth.
              </p>
              <ul className="list-unstyled mt-3">
                <li>✅ Interactive Workshops</li>
                <li>✅ Guest Speakers</li>
                <li>✅ Networking & Vibes</li>
                <li>✅ Food & Giveaways</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <section className="container mb-5">
        <h2 className="text-center fw-bold mb-4">📅 Event Schedule</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {[
            "10:00 AM - Registration",
            "11:00 AM - Opening Ceremony",
            "12:00 PM - Wellness Workshop",
            "1:00 PM - Lunch & Chill",
            "2:00 PM - Guest Speaker",
            "3:00 PM - Networking",
            "4:00 PM - Closing Vibes",
          ].map((item, index) => (
            <div key={index} className="col">
              <div className="p-3 bg-white shadow rounded-3 text-center">
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expectation Highlights */}
      <section className="container mb-5">
        <h2 className="text-center fw-bold mb-4">🌟 What to Expect</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 text-center">
          {[
            { icon: '🧘‍♀️', text: 'Wellness & Mindfulness' },
            { icon: '🎤', text: 'Inspiring Talks' },
            { icon: '🤝', text: 'Real Connections' },
            { icon: '🍴', text: 'Delicious Refreshments' },
          ].map((item, index) => (
            <div key={index} className="col">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h1>{item.icon}</h1>
                <p className="fw-semibold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-muted pt-5 border-top">
        <p className="mb-1">Contact: <a href="mailto:info@daisylife.com">info@daisylife.com</a></p>
        <p className="small">&copy; {new Date().getFullYear()} Daisy Life. All rights reserved.</p>
      </footer>
    </div>
  );
};

