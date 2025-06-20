"use client"

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import "aos/dist/aos.css";
import AOS from "aos";
import { Dishes } from './dishes';
import { Specials } from './specials';

const backgroundImage = "/images/victoria-shes-UC0HZdUitWY-unsplash.jpg"

export const Home = () => {
  // Add animation effect on scroll

    useEffect(() => {
    AOS.init({ duration: 2000,  easing: "ease-in-out", once: true}); 
  }, []);

  return (
    <div className="restaurant-page">
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h1
            className="display-2 fw-bold mb-4"
            data-aos="fade-up"
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
              letterSpacing: "2px",
            }}
          >
            CULINARY EXCELLENCE
          </h1>
          <p
            className="lead fs-4 mb-5"
             data-aos="fade-up"
            style={{
              maxWidth: "700px",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            Experience the art of fine dining with our exquisite menu crafted by award-winning chefs
          </p>
        </Container>
      </div>

      {/* Featured Section */}
      <section className="py-5" id="menu" style={{ backgroundColor: "rgba(248, 249, 250, 1)" }}>
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <p className="text-primary fw-bold mb-2" data-aos="fade-up">SIGNATURE DISHES</p>
              <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">Our Menu Highlights</h2>
              <p className="lead mb-5" data-aos="fade-up" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Discover our chef's selection of exquisite dishes that blend traditional flavors with modern culinary
                techniques
              </p>
            </Col>
               < Specials data-aos="fade-up"/>
               <div className="text-center mt-5">
            <Dishes data-aos="fade-up" />
          </div>
          </Row>
        </Container>
      </section>


      {/* Custom CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .btn-primary {
            background-color: #d4a373;
            border-color: #d4a373;
          }
          
          .btn-primary:hover {
            background-color: #c49a6c;
            border-color: #c49a6c;
          }
          
          .btn-outline-primary {
            color: #d4a373;
            border-color: #d4a373;
          }
          
          .btn-outline-primary:hover {
            background-color: #d4a373;
            border-color: #d4a373;
          }
          
          .text-primary {
            color: #d4a373 !important;
          }
          
          .bg-primary {
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
