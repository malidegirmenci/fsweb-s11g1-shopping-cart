import { Route } from "react-router-dom";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
function App() {
  return (
    <ProductProvider >
      <div className="App">
        <CartProvider >
          <Navigation />
          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </CartProvider>
      </div>
    </ProductProvider>
  );
}

export default App;
