import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Collapse, ListGroup } from "react-bootstrap";
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
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
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

  // Function to group items from Sheety by category
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
    <Container className="main-container py-5">
      <Row className="d-flex justify-content-center" data-aos="fade-up">
        <Col md={2} xs={5} className="mb-4">
          <Button
            style={{ backgroundColor: activeButton === 'Food' ? '#ba4e07' : '', fontSize: "1.4rem" }}
            variant="outline-primary"
            className={`w-100 btn-lg ${activeButton === 'Food' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Food')}
          >
            Food
          </Button>
        </Col>
        <Col md={2} xs={5} className="mb-4">
          <Button
            style={{ backgroundColor: activeButton === 'Drinks' ? '#ba4e07' : '', fontSize: "1.4rem" }}
            variant="outline-primary"
            className={`w-100 btn-lg ${activeButton === 'Drinks' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Drinks')}
          >
            Drinks
          </Button>
        </Col>
      </Row>

      {category === "Food" && (
        <Row>
          <Col md={10} className="mx-auto">
            {foodMenu.map((cat) => (
              <Card key={cat.id} className="mb-3 text-light" style={{ backgroundColor: "transparent", border: "none" }}>
                <Card.Header
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleCategory(cat.id)}
                  style={{ cursor: "pointer", fontSize: "2rem", backgroundColor: "rgb(149, 115, 81)", border: "3px solid rgba(214, 207, 200, 0.93)" }}
                >
                  <h5 className="mb-0" style={{ fontSize: "1.4rem", color: "rgb(41, 28, 12)" }}>{cat.name}</h5>
                  <span>{expandedCategories[cat.id] ? "▲" : "▼"}</span>
                </Card.Header>
                <Collapse in={expandedCategories[cat.id]}>
                  <div>
                    <ListGroup variant="flush">
                      {cat.items.map((item) => (
                        <ListGroup.Item key={item.id} style={{ border: "1px solid white" }}>
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h6 className="mb-1 text-start">{item.name}</h6>
                              <p className="mb-0 small">{item.description}</p>
                            </div>
                            <span className="fw-bold badge bg-primary rounded-pill">{item.price}</span>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Collapse>
              </Card>
            ))}
          </Col>
        </Row>
      )}

      {category === "Drinks" && (
        <Row>
          <Col md={10} className="mx-auto">
            {drinksMenu.map((cat) => (
              <Card key={cat.id} className="mb-3 text-light" style={{ backgroundColor: "transparent", border: "none" }}>
                <Card.Header
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleCategory(cat.id)}
                  style={{ cursor: "pointer", fontSize: "2rem", backgroundColor: "rgb(149, 115, 81)", border: "3px solid rgba(214, 207, 200, 0.93)" }}
                >
                  <h5 className="mb-0" style={{ fontSize: "1.4rem", color: "rgb(41, 28, 12)" }}>{cat.name}</h5>
                  <span>{expandedCategories[cat.id] ? "▲" : "▼"}</span>
                </Card.Header>
                <Collapse in={expandedCategories[cat.id]}>
                  <div>
                    <ListGroup variant="flush">
                      {cat.items.map((item) => (
                        <ListGroup.Item key={item.id} style={{ border: "1px solid white" }}>
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h6 className="mb-1 text-start">{item.name}</h6>
                              <p className="mb-0 small">{item.description}</p>
                            </div>
                            <span className="fw-bold badge bg-primary rounded-pill">{item.price}</span>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Collapse>
              </Card>
            ))}
          </Col>
        </Row>
      )}

      {!category && (
        <Row className="mt-4" data-aos="fade-up">
          <Col className="text-center text-dark">
            <h4>Welcome to Our Restaurant</h4>
            <p>Please select a menu category above to see our offerings</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};
