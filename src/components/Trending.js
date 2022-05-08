import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import duneImages from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
const Trending = () => {
     return (
          <div>
               <Container>
                    <br />
                    <h1 className='text-white text-center'>
                         Trending Movievs
                    </h1>
                    <br />
                    <Row>
                         <Col md='4' className='movieWrapper' id='Tranding'>
                              <Card className="bg-dark text-white movieImages">
                                   <Image src={duneImages} alt="Dune" className='images' />
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
                                   <Image src={everything} alt="Dune" className='images' />
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
                                   <Image src={infinite} alt="Dune" className='images' />
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
export default Trending