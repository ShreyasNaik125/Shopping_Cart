import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Cart from './pages/Cart'
import Shop from './pages/Shop'
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
