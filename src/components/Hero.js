import { Container, Row, Col, Button } from 'react-bootstrap';
const Hero = () => {
     return (
          <div className='hero'>
               <Container className='text-white  d-flex justify-content-center align-item-center '>
                    <Row>
                         <Col>
                              <div className='title'>NONTON GRATIS</div>
                              <div className='title'>GAK PAKAI KARCIS</div>
                              <div className='buttonHero mt-4 text-center'>
                                   <Button variant='dark'>Lihat Semua List</Button>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </div>
     )
}

export default Hero