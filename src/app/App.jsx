import Header from "@/components/Header";
import Home from "@/pages/Home";
import styled from "styled-components";

const Container = styled.div`
  width: 1080px;
  margin-inline: auto;
  border-radius: 8px;
  background-color: #fff;
`;

function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
