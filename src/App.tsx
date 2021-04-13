import { FunctionComponent } from "react";
import AddClient from "./components/add-client/AddClient";
import ClientsList from "./components/clients/ClientsList";
import Header from "./components/header/Header";
import Container from "./components/UI/Container";

const App: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Container>
        <ClientsList />
      </Container>
      <AddClient />
    </div>
  );
};

export default App;
