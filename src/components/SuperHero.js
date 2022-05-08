import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
const SuperHero = () => {
     return (
          <div>
               <Container>
                    <br />
                    <h1 className='text-white text-center'>
                         SuperHero Movievs
                    </h1>
                    <br />
                    <Row>
                         <Col md='4' className='movieWrapper' id="superhero">
                              <Card className="bg-dark text-white movieImages">
                                   <Image src={antman} alt="Dune" className='images' />
                                   <div className='p-2 m-2'>
                                        <Card.Title className='text-center'>Dune</Card.Title>
                                        <Card.Text className='text-left'>
                                             This is a wider card with supporting
                                        </Card.Text>
                                        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                   </div>
                              </Card>
                         </Col>
                         <Col md='4' className='movieWrapper'>
                              <Card className="bg-dark text-white movieImages">
                                   <Image src={avenger} alt="Dune" className='images' />
                                   <div className='p-2 m-2'>
                                        <Card.Title className='text-center'>Dune</Card.Title>
                                        <Card.Text className='text-left'>
                                             This is a wider card with supporting
                                        </Card.Text>
                                        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                   </div>
                              </Card>
                         </Col>
                         <Col md='4' className='movieWrapper'>
                              <Card className="bg-dark text-white movieImages">
                                   <Image src={batman} alt="Dune" className='images' />
                                   <div className='p-2 m-2'>
                                        <Card.Title className='text-center'>Dune</Card.Title>
                                        <Card.Text className='text-left'>
                                             This is a wider card with supporting
                                        </Card.Text>
                                        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                   </div>
                              </Card>
                         </Col>
                    </Row>
               </Container>
          </div>
     )
}
export default SuperHero