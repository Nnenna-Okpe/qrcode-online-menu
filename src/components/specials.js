import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";

export const Specials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 576); // Bootstrap xs breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const specialMenu = [
    {
      id: "special1",
      name: "Greek Salad",
      img: "/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
      price: "$15.99",
      description: "Salad with seasonal vegetables in a light garlic sauce.",
    },
    {
      id: "special2",
      name: "Pasta Primavera",
      img: "/images/chad-montano-eeqbbemH9-c-unsplash.jpg",
      price: "$12.99",
      description: "Fluffy pancakes served warm, perfect with syrup or toppings.",
    },
    {
      id: "special3",
      name: "Chicken Alfredo",
      img: "images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg",
      price: "$14.99",
      description: "Creamy egg salad made with boiled eggs and light seasoning.",
    },
  ];

  return (
    <div className="specials-container py-5">
      <Container>
        {isMobile ? (
          <Carousel interval={4000} fade>
            {specialMenu.map((item) => (
              <Carousel.Item key={item.id}>
                <Card className="shadow-sm border-0 rounded bg-white text-dark text-center p-3">
                  <Card.Img variant="top" src={item.img} style={{ maxHeight: '280px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text className="badge bg-primary rounded-pill">{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Row>
            {specialMenu.map((item) => (
              <Col key={item.id} md={4} className="mb-4" data-aos="fade-up">
                <Card className="shadow-sm border-0 rounded bg-white text-dark">
                  <Card.Body>
                    <Card.Img variant="top" src={item.img} className="mb-3" style={{ maxHeight: '280px', objectFit: 'cover' }} />
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text className="badge bg-primary rounded-pill">{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};
