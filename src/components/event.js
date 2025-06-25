"use client"

import { useState } from "react"

export const EventPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const cateringPackages = [
    {
      id: 1,
      name: "Essential Package",
      price: "10,000 per person",
      minGuests: 20,
      description: "Perfect for intimate gatherings and small corporate events",
      includes: [
        "Choice of 2 appetizers",
        "2 main course options",
        "1 dessert option",
        "Basic table setup",
        "Professional service staff",
        "2-hour service window",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Premium Package",
      price: "20,000 per person",
      minGuests: 30,
      description: "Our most popular choice for weddings and special celebrations",
      includes: [
        "Choice of 4 appetizers",
        "3 main course options",
        "2 dessert options",
        "Premium table setup & linens",
        "Professional service staff",
        "4-hour service window",
        "Complimentary champagne toast",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Luxury Package",
      price: "30,000 per person",
      minGuests: 50,
      description: "Ultimate dining experience for high-end events and galas",
      includes: [
        "Unlimited appetizer selection",
        "5 main course options",
        "3 dessert options + dessert station",
        "Luxury table setup & premium linens",
        "Dedicated event coordinator",
        "Professional service staff",
        "6-hour service window",
        "Open bar service",
        "Live cooking stations",
      ],
      popular: false,
    },
  ]

  const pastEvents = [
    {
      id: 1,
      title: "Johnson Wedding Reception",
      type: "Wedding",
      guests: 150,
      date: "October 2023",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Elegant outdoor wedding reception with Italian-inspired menu and live cooking stations.",
      package: "Premium Package",
    },
    {
      id: 2,
      title: "TechCorp Annual Gala",
      type: "Corporate Event",
      guests: 300,
      date: "September 2023",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Sophisticated corporate gala with multi-course plated dinner and premium bar service.",
      package: "Luxury Package",
    },
    {
      id: 3,
      title: "Smith Family Reunion",
      type: "Private Party",
      guests: 75,
      date: "August 2023",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Fun family gathering with BBQ buffet and outdoor games setup.",
      package: "Essential Package",
    },
    {
      id: 4,
      title: "Grand Opening Celebration",
      type: "Corporate Event",
      guests: 200,
      date: "July 2023",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Business grand opening with cocktail reception and hors d'oeuvres stations.",
      package: "Premium Package",
    },
    {
      id: 5,
      title: "Martinez Anniversary Party",
      type: "Anniversary",
      guests: 100,
      date: "June 2023",
      image:
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Golden anniversary celebration with elegant plated dinner and live music.",
      package: "Premium Package",
    },
    {
      id: 6,
      title: "Charity Fundraiser Dinner",
      type: "Fundraiser",
      guests: 250,
      date: "May 2023",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Formal fundraising dinner with silent auction and premium wine pairings.",
      package: "Luxury Package",
    },
  ]

  const handleQuoteRequest = (pkg) => {
    setSelectedPackage(pkg)
  }

  return (
    <div className="bg-light">

      {/* Hero Section */}
      <div
        className="position-relative vh-100 d-flex align-items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
              <span className="badge bg-warning text-dark fs-6 mb-3 px-3 py-2">Premium Catering Services</span>
              <h1 className="display-2 fw-bold mb-4">Making Your Events Unforgettable</h1>
              <p className="lead fs-4 mb-5">
                From intimate gatherings to grand celebrations, we provide exceptional catering services that will
                delight your guests and create lasting memories.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="#pricing" className="btn btn-warning btn-lg px-4 py-3 fw-bold">
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark fs-6 mb-2">What We Do</span>
            <h2 className="display-4 fw-bold text-dark mb-3">Our Catering Services</h2>
            <div className="bg-warning mx-auto mb-3" style={{ width: "60px", height: "4px" }}></div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-heart text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Wedding Catering</h5>
                  <p className="card-text text-muted">
                    Make your special day perfect with our elegant wedding catering services, from intimate ceremonies
                    to grand receptions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-building text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Corporate Events</h5>
                  <p className="card-text text-muted">
                    Professional catering for business meetings, conferences, galas, and corporate celebrations of all
                    sizes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-birthday-cake text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Private Parties</h5>
                  <p className="card-text text-muted">
                    Birthday parties, anniversaries, family reunions, and other private celebrations made delicious and
                    memorable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-graduation-cap text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Graduation Events</h5>
                  <p className="card-text text-muted">
                    Celebrate academic achievements with our special graduation party catering packages and menu
                    options.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-hands-helping text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Fundraisers</h5>
                  <p className="card-text text-muted">
                    Support your cause with our fundraising event catering, designed to impress donors and supporters.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-utensils text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Custom Events</h5>
                  <p className="card-text text-muted">
                    Have a unique event in mind? We create custom catering solutions tailored to your specific needs and
                    vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark fs-6 mb-2">Our Packages</span>
            <h2 className="display-4 fw-bold text-dark mb-3">Catering Packages & Pricing</h2>
            <div className="bg-warning mx-auto mb-3" style={{ width: "60px", height: "4px" }}></div>
            <p className="lead text-muted">
              Choose the perfect package for your event. All packages include professional service staff and setup.
            </p>
          </div>
          <div className="row g-4">
            {cateringPackages.map((pkg) => (
              <div key={pkg.id} className="col-lg-4">
                <div className={`card h-100 border-0 shadow ${pkg.popular ? "border-warning border-3" : ""}`}>
                  {pkg.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <span className="badge bg-warning text-dark px-3 py-2 fs-6">Most Popular</span>
                    </div>
                  )}
                  <div className="card-body p-4 text-center">
                    <h4 className="card-title fw-bold mb-3">{pkg.name}</h4>
                    <div className="mb-3">
                      <span className="display-5 fw-bold text-warning">{pkg.price}</span>
                      <small className="text-muted d-block">Minimum {pkg.minGuests} guests</small>
                    </div>
                    <p className="text-muted mb-4">{pkg.description}</p>
                    <ul className="list-unstyled text-start mb-4">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check text-warning me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark fs-6 mb-2">Our Work</span>
            <h2 className="display-4 fw-bold text-dark mb-3">Recent Events We've Catered</h2>
            <div className="bg-warning mx-auto mb-3" style={{ width: "60px", height: "4px" }}></div>
            <p className="lead text-muted">Take a look at some of the amazing events we've had the pleasure to cater</p>
          </div>
          <div className="row g-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-warning text-dark">{event.type}</span>
                      <small className="text-muted">{event.date}</small>
                    </div>
                    <h5 className="card-title fw-bold mb-2">{event.title}</h5>
                    <p className="card-text text-muted mb-3">{event.description}</p>
                    <div className="d-flex justify-content-between align-items-center small text-muted">
                      <span>
                        <i className="fas fa-users text-warning me-1"></i>
                        {event.guests} guests
                      </span>
                      <span className="fw-semibold">{event.package}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .btn-warning {
            background-color: #d4a373;
            border-color: #d4a373;
          }
          
          .btn-warning:hover {
            background-color: #c49a6c;
            border-color: #c49a6c;
          }
          
          .btn-outline-warning {
            color: #d4a373;
            border-color: #d4a373;
          }
          
          .btn-outline-warning:hover {
            background-color: #d4a373;
            border-color: #d4a373;
          }
          
          .text-warning {
            color: #d4a373 !important;
          }
          
          .bg-warning {
            background-color: #d4a373 !important;
          }
          
          .card {
            transition: transform 0.3s ease;
          }
          
          .card:hover {
            transform: translateY(-10px);
          }
        `,
        }}
      />
    </div>
  )
}

