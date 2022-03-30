import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" className="shadow">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://ar.academianumen.com/wp-content/uploads/2020/08/cropped-LOGO-NUMEN-academy-01-200x56.png"
            width="auto"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
