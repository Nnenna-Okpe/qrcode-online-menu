import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Collapse } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "aos/dist/aos.css";
import AOS from "aos";

export const Dishes = () => {
  const [category, setCategory] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeButton, setActiveButton] = useState('Food');
  const [foodMenu, setFoodMenu] = useState([]);
  const [drinksMenu, setDrinksMenu] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

    useEffect(() => {
    // Fetch food from Sheety API
    fetch("https://api.sheety.co/6787270b4098f00a976fbdb86a6ef202/menuSheet/food")
      .then((res) => res.json())
      .then((data) => {
        const grouped = groupItemsByCategory(data.food);
        setFoodMenu(grouped);
      });

    // Fetch drinks from Sheety API
    fetch("https://api.sheety.co/6787270b4098f00a976fbdb86a6ef202/menuSheet/drinks")
      .then((res) => res.json())
      .then((data) => {
        const grouped = groupItemsByCategory(data.drinks);
        setDrinksMenu(grouped);
      });
  }, []);

  const groupItemsByCategory = (items) => {
    const grouped = {};
    items.forEach(item => {
      const key = item.category || "Others";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push({
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
      });
    });

    return Object.entries(grouped).map(([name, items], index) => ({
      id: `cat-${index}`,
      name,
      items
    }));
  };

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setActiveButton(categoryName);
    setExpandedCategories({});
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
      <Container className="menu-container" style={{ 
        maxWidth: '1200px',
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderRadius: "16px",
        padding: "40px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}>
        <div className="text-center mb-5">
          <h2 className="display-4 mb-3" style={{ 
            fontFamily: "'Playfair Display', serif",
            color: "#2a2a2a",
            fontWeight: 700,
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
          }}>
            Our Menu
          </h2>
          <div className="d-flex justify-content-center">
            <Button
              variant="link"
              className={`menu-category-btn mx-2 ${activeButton === 'Food' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Food')}
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: activeButton === 'Food' ? '#ba4e07' : '#6c757d',
                textDecoration: 'none',
                borderBottom: activeButton === 'Food' ? '3px solid #ba4e07' : 'none',
                paddingBottom: '5px',
                transition: 'all 0.3s ease'
              }}
            >
              Food
            </Button>
            <Button
              variant="link"
              className={`menu-category-btn mx-2 ${activeButton === 'Drinks' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Drinks')}
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: activeButton === 'Drinks' ? '#ba4e07' : '#6c757d',
                textDecoration: 'none',
                borderBottom: activeButton === 'Drinks' ? '3px solid #ba4e07' : 'none',
                paddingBottom: '5px',
                transition: 'all 0.3s ease'
              }}
            >
              Drinks
            </Button>
          </div>
        </div>

        {/* Rest of your component remains the same */}
        {category === "Food" && (
          <Row className="justify-content-center">
            <Col lg={8}>
              {foodMenu.map((cat) => (
                <div key={cat.id} className="mb-4">
                  <div 
                    className="d-flex justify-content-between align-items-center mb-3 category-header"
                    onClick={() => toggleCategory(cat.id)}
                    style={{
                      cursor: "pointer",
                      padding: "15px 20px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      backdropFilter: "blur(4px)"
                    }}
                  >
                    <h3 className="mb-0" style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: "#343a40",
                      fontSize: "1.8rem"
                    }}>
                      {cat.name}
                    </h3>
                    <span style={{ fontSize: "1.2rem" }}>
                      {expandedCategories[cat.id] ? "−" : "+"}
                    </span>
                  </div>
                  <Collapse in={expandedCategories[cat.id]}>
                    <div>
                      {cat.items.map((item) => (
                        <div key={item.id} className="menu-item mb-3" style={{
                          padding: "20px",
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          borderRadius: "8px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                          transition: "all 0.3s ease",
                          backdropFilter: "blur(4px)"
                        }}>
                          <div className="d-flex justify-content-between">
                            <div style={{ flex: 3 }}>
                              <h4 className="mb-2" style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.3rem",
                                color: "#343a40"
                              }}>
                                {item.name}
                              </h4>
                              <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                                {item.description}
                              </p>
                            </div>
                            <div style={{ flex: 1, textAlign: 'right' }}>
                              <span className="price" style={{
                                display: "inline-block",
                                padding: "5px 10px",
                                backgroundColor: "#f8f9fa",
                                borderRadius: "20px",
                                fontWeight: 600,
                                color: "#ba4e07",
                                fontSize: "1.1rem"
                              }}>
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Collapse>
                </div>
              ))}
            </Col>
          </Row>
        )}

        {category === "Drinks" && (
          <Row className="justify-content-center">
            <Col lg={8}>
              {drinksMenu.map((cat) => (
                <div key={cat.id} className="mb-4">
                  <div 
                    className="d-flex justify-content-between align-items-center mb-3 category-header"
                    onClick={() => toggleCategory(cat.id)}
                    style={{
                      cursor: "pointer",
                      padding: "15px 20px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      backdropFilter: "blur(4px)"
                    }}
                  >
                    <h3 className="mb-0" style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: "#343a40",
                      fontSize: "1.8rem"
                    }}>
                      {cat.name}
                    </h3>
                    <span style={{ fontSize: "1.2rem" }}>
                      {expandedCategories[cat.id] ? "−" : "+"}
                    </span>
                  </div>
                  <Collapse in={expandedCategories[cat.id]}>
                    <div>
                      {cat.items.map((item) => (
                        <div key={item.id} className="menu-item mb-3" style={{
                          padding: "20px",
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          borderRadius: "8px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                          transition: "all 0.3s ease",
                          backdropFilter: "blur(4px)"
                        }}>
                          <div className="d-flex justify-content-between">
                            <div style={{ flex: 3 }}>
                              <h4 className="mb-2" style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.3rem",
                                color: "#343a40"
                              }}>
                                {item.name}
                              </h4>
                              <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                                {item.description}
                              </p>
                            </div>
                            <div style={{ flex: 1, textAlign: 'right' }}>
                              <span className="price" style={{
                                display: "inline-block",
                                padding: "5px 10px",
                                backgroundColor: "#f8f9fa",
                                borderRadius: "20px",
                                fontWeight: 600,
                                color: "#ba4e07",
                                fontSize: "1.1rem"
                              }}>
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Collapse>
                </div>
              ))}
            </Col>
          </Row>
        )}

        {!category && (
          <Row className="mt-5" data-aos="fade-up">
            <Col className="text-center">
              <div className="welcome-message" style={{
                padding: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                backdropFilter: "blur(4px)"
              }}>
                <h3 style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: "#343a40",
                  marginBottom: "20px"
                }}>
                  Welcome to Our Restaurant
                </h3>
                <p className="lead" style={{ color: "#6c757d" }}>
                  Please select a menu category to explore our culinary offerings
                </p>
                <div className="d-flex justify-content-center mt-4">
                  <Button
                    variant="outline-primary"
                    className="mx-2"
                    onClick={() => handleCategoryClick('Food')}
                    style={{
                      borderColor: "#ba4e07",
                      color: "#ba4e07",
                      fontWeight: 500
                    }}
                  >
                    View Food Menu
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="mx-2"
                    onClick={() => handleCategoryClick('Drinks')}
                    style={{
                      borderColor: "#ba4e07",
                      color: "#ba4e07",
                      fontWeight: 500
                    }}
                  >
                    View Drinks Menu
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>

  );
};
