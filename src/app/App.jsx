import Header from "@/components/Header";
import Home from "@/pages/Home";
import styled from "styled-components";
import { ItemsProvider } from "@/contexts/ItemsContext";
import { CartProvider } from "@/contexts/CartContext";

const Container = styled.div`
  width: 1080px;
  margin-inline: auto;
  border-radius: 8px;
  background-color: #fff;
`;

function App() {
  return (
    <Container>
      <ItemsProvider>
        <CartProvider>
          <Header />
          <Home />
        </CartProvider>
      </ItemsProvider>
    </Container>
  );
}

export default App;
