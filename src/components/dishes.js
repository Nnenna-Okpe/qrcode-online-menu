import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Collapse } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";

export const Dishes = () => {
  const [category, setCategory] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeButton, setActiveButton] = useState("Food");
  const [foodMenu, setFoodMenu] = useState([]);
  const [drinksMenu, setDrinksMenu] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    // Fetch food from Sheety API
    fetch("https://script.google.com/macros/s/AKfycbyOKm3dYoFyDzKQnTqjQxnnRyS_kYyMfEJSqwPRkRfYn5gAv84MbMcfRFNHfEETRrOnYQ/exec?sheet=food")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const grouped = groupItemsByCategory(data);
          setFoodMenu(grouped);
        } else {
          console.warn("Expected an array for food data but got:", data);
        }
      })
      .catch((err) => console.error("Food fetch error:", err));

    // Fetch drinks from Sheety API
    fetch("https://script.google.com/macros/s/AKfycbyOKm3dYoFyDzKQnTqjQxnnRyS_kYyMfEJSqwPRkRfYn5gAv84MbMcfRFNHfEETRrOnYQ/exec?sheet=drinks")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
           console.log("Drinks raw data:", data);
          const grouped = groupItemsByCategory(data);
          setDrinksMenu(grouped);
        } else {
          console.warn("Expected an array for drinks data but got:", data);
        }
      })
      .catch((err) => console.error("Drinks fetch error:", err));
  }, []);

  const groupItemsByCategory = (items) => {
    if (!Array.isArray(items)) {
      console.warn("groupItemsByCategory expected an array but got:", items);
      return [];
    }

    const grouped = {};
    items.forEach((item) => {
      const key = item.Category || "Others";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push({
        id: item.id,
        name: item.Name,
        price: item.Price,
        description: item.Description,
      });
    });

    return Object.entries(grouped).map(([name, groupItems], idx) => ({
      id: `cat-${idx}`,
      name,
      items: groupItems,
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

  const renderMenuItems = (menu) => (
    <Row className="justify-content-center">
      <Col lg={8}>
        {menu.map((cat) => (
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
                backdropFilter: "blur(4px)",
              }}
            >
              <h3
                className="mb-0"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#343a40",
                  fontSize: "1.6rem",
                }}
              >
                {cat.name}
              </h3>
              <span style={{ fontSize: "1.2rem" }}>
                {expandedCategories[cat.id] ? "−" : "+"}
              </span>
            </div>
            <Collapse in={expandedCategories[cat.id]}>
              <div>
                {cat.items.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="menu-item mb-3"
                    style={{
                      padding: "20px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <div style={{ flex: 3 }}>
                        <h4
                          className="mb-2"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.3rem",
                            color: "#343a40",
                          }}
                        >
                          {item.name}
                        </h4>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "0.95rem" }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div style={{ flex: 1, textAlign: "right" }}>
                        <span
                          className="price"
                          style={{
                            display: "inline-block",
                            padding: "5px 10px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "20px",
                            fontWeight: 600,
                            color: "#ba4e07",
                            fontSize: "1.1rem",
                          }}
                        >
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
  );

  return (
    <Container
      className="menu-container"
      style={{
        maxWidth: "1200px",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderRadius: "16px",
        padding: "40px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="text-center mb-5">
        <h2
          className="display-4 mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#2a2a2a",
            fontWeight: 700,
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Our Menu
        </h2>
        <div className="d-flex justify-content-center">
          {["Food", "Drinks"].map((btn) => (
            <Button
              key={btn}
              variant="link"
              className={`menu-category-btn mx-2 ${
                activeButton === btn ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(btn)}
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: activeButton === btn ? "#ba4e07" : "#6c757d",
                textDecoration: "none",
                borderBottom:
                  activeButton === btn ? "3px solid #ba4e07" : "none",
                paddingBottom: "5px",
                transition: "all 0.3s ease",
              }}
            >
              {btn}
            </Button>
          ))}
        </div>
      </div>

      {category === "Food" && renderMenuItems(foodMenu)}
      {category === "Drinks" && renderMenuItems(drinksMenu)}

      {!category && (
        <Row className="mt-5" data-aos="fade-up">
          <Col className="text-center">
            <div
              className="welcome-message"
              style={{
                padding: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                backdropFilter: "blur(4px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#343a40",
                  marginBottom: "20px",
                }}
              >
                Welcome to Our Restaurant
              </h3>
              <p className="lead" style={{ color: "#6c757d" }}>
                Please select a menu category above to explore our culinary
                offerings
              </p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};
