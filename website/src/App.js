import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductListingPage.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(null);  
  const [filterByDepartment, setFilterByDepartment] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/products');
      setProducts(response.data);
      console.log(response)
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  const handleProductClick = (productId) => {
    console.log('Clicked product ID:', productId);
    window.location.href = 'https://www.google.com';
  };
  

  const handleFilterByDepartment = (department) => {
    setFilterByDepartment(department);
  };
 

  const filteredProducts = products.filter((product) => {
    if (filterByDepartment === null) {
      return true;
    } else {
      return product.department === filterByDepartment;
    }
  });
  


  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const handleSortByPrice = () => {
    setSortByPrice((prevSortByPrice) => {
      if (prevSortByPrice === 'asc') {
        return 'desc';
      }
      return 'asc';
    });
  };


  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    console.log('Checkout clicked!');
  };


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortByPrice === 'asc') {
      return a.price - b.price;
    } else if (sortByPrice === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
       <nav className="navbar">
          <div className="navbar-brand">
             <h1 >Product Listing Page</h1>
          </div>
          <div className="navbar-cart">
                    {/* <h2
                    style={{ marginLeft: 50 }}
                    >Cart:</h2> */}
                    {cartItems.length === 0 ? (
                      <p style={{ marginLeft: 50 }}>Cart is empty.</p>
                    ) : (
                      <ul>
                        {cartItems.map((item) => (
                          <li key={item.id}
                          className="cart-item"
                          >
                            {item.name} - ${item.price}
                            <button 
                            className="cart-item button"
                            onClick={() => handleRemoveFromCart(item.id)}>
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                      <div className="navbar-cart" >
                        <p>Total Price: ${calculateTotalPrice()}</p>
                        <button className="btn-checkout" onClick={handleCheckout}>Checkout</button>
                      </div>
                </div> 
        </nav>                  

       <div className="button-group">
        <button
          className={`sort-button ${
            sortByPrice === 'asc' ? 'active' : ''
          }`}
          onClick={handleSortByPrice}
        >
          Sort by Price &#9650;
        </button>
        <button
          className={`sort-button ${
            sortByPrice === 'desc' ? 'active' : ''
          }`}
          onClick={handleSortByPrice}
        >
          Sort by Price &#9660;
        </button>
        <button
          className={`filter-button ${
            filterByDepartment === null ? 'active' : ''
          }`}
          onClick={() => handleFilterByDepartment(null)}
        >
          All Departments
        </button>
        <button
          className={`filter-button ${
            filterByDepartment === 'Electronics' ? 'active' : ''
          }`}
          onClick={() => handleFilterByDepartment('Electronics')}
        >
          Electronics
        </button>
        <button
          className={`filter-button ${
            filterByDepartment === 'Clothing' ? 'active' : ''
          }`}
          onClick={() => handleFilterByDepartment('Clothing')}
        >
          Clothing
        </button>
        <button
          className={`filter-button ${
            filterByDepartment === 'Home' ? 'active' : ''
          }`}
          onClick={() => handleFilterByDepartment('Home')}
        >
          Home
        </button>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="product-item"
            // onClick={() => handleProductClick(product.id)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
              style={{ height: 80 }}
              onClick={() => handleProductClick(product.id)}
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

           
    </div>
  );
};

export default App;
