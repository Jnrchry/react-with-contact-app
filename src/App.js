import "./App.css";
import { Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">React with Contact App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
