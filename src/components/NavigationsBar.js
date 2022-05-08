import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
     return (
          <Navbar variant="dark">
               <Container>
                    <Navbar.Brand href="/">FILM</Navbar.Brand>
                    <Nav>
                         <Nav.Link href="#Tranding">Trending</Nav.Link>
                         <Nav.Link href="#superhero">Hero</Nav.Link>
                    </Nav>
               </Container>
          </Navbar>
     )
}

export default NavigationBar