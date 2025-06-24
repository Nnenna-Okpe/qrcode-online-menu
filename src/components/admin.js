// /pages/Admin.js
import { useState, useEffect } from 'react';

export const Admin = () => {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });

  const handleLogin = () => {
    if (password === 'mySecret123') {
      setAccessGranted(true);
      localStorage.setItem('auth', 'granted');
    } else {
      alert('Wrong password');
    }
  };

  // If already logged in (even after page refresh)
  useEffect(() => {
    if (localStorage.getItem('auth') === 'granted') {
      setAccessGranted(true);
    }
  }, []);
  
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   fetch("https://api.sheety.co/6787270b4098f00a976fbdb86a6ef202/menuSheet/food", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    food: formData,  // "food" must match the tab/endpoint name in Sheety
  }),
})
.then((res) => res.json())
.then((data) => {
  console.log('Sheety response:', data);
  alert('Item added!');
  setFormData({
    name: '',
    price: '',
    description: '',
    category: '',
  });
})
.catch((err) => {
  console.error('Error:', err);
  alert('Something went wrong.');
});
  };


  if (!accessGranted) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Admin Login</h2>
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Enter</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to Admin Dashboard</h2>
      {/* Admin functionality will go here */}
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="dishName">Dish name</label>
            <input 
              type="text" 
              name="name"
              id="dishName" 
              placeholder="Enter dish name" 
              value={formData.name}
              className="form-control mb-2"
                style={{ maxWidth: '400px' }}
                onChange={handleChange}
            />
            <label htmlFor="dishPrice">Dish Price</label>
            <input 
              type="text" 
              name="price"
              id="dishPrice" 
              placeholder="Enter dish name" 
              value={formData.price}
              className="form-control mb-2"
                style={{ maxWidth: '400px' }}
                onChange={handleChange}
            />
           <label htmlFor="dishDescription">Description</label>
            <input 
              type="text" 
              name="description"
              id="dishDescription" 
              placeholder="Enter description" 
              value={formData.description}
              className="form-control mb-2"
                style={{ maxWidth: '400px' }}
                onChange={handleChange}
            />
            <label htmlFor="dishcategory">Category</label>
            <input 
              type="text" 
              name="category"
              id="dishcategory" 
              placeholder="Enter dish name" 
              value={formData.category}
              className="form-control mb-2"
                style={{ maxWidth: '400px' }}
                onChange={handleChange}
            />
        </div>
         <button type="submit">Submit</button>
      </form>
    </div>
  );
};

