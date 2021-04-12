import React from "react";
import ClientsList from "./components/clients/ClientsList";
import Header from "./components/header/Header";
import Container from "./components/UI/Container";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <ClientsList />
      </Container>
    </div>
  );
}

export default App;
