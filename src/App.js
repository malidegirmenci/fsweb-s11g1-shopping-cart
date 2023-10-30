import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart,item])
  };
  const removeItem = (item) => {
    const remainingItems = cart.filter((i) => i.id !== item.id)
    setCart(remainingItems);
  }
  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      <div className="App">
        <CartContext.Provider value={{cart}}>
          <Navigation />
        </CartContext.Provider>
        {/* Routelar */}
        <main className="content">
          <Route exact path="/">
            <Products/>
          </Route>
          <CartContext.Provider value={{cart}}>
            <Route path="/cart">
              <ShoppingCart/>
            </Route>
          </CartContext.Provider>
        </main>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
