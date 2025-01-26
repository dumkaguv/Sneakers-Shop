import Header from "@/components/Header";
import Home from "@/pages/Home";
import styled from "styled-components";
import { ItemsProvider } from "@/contexts/ItemsContext";

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
        <Header />
        <Home />
      </ItemsProvider>
    </Container>
  );
}

export default App;
