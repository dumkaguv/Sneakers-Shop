import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import Home from "@/pages/Home";
import Favorites from "@/pages/Favorites";
import styled from "styled-components";
import { ItemsProvider } from "@/contexts/ItemsContext";
import { CartProvider } from "@/contexts/CartContext";

const Container = styled.div`
  max-width: 1080px;
  margin-inline: auto;
  border-radius: 8px;
  background-color: #fff;
`;

function App() {
  return (
    <Router>
      <Container>
        <ItemsProvider>
          <CartProvider>
            <Header />
            <Drawer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </CartProvider>
        </ItemsProvider>
      </Container>
    </Router>
  );
}

export default App;
