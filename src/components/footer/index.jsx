import { Container, Navbar } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <div className="mx-auto text-bg-dark">© 2020 Copyright</div>
      </Container>
    </Navbar>
  );
};
export default FooterComponent;
