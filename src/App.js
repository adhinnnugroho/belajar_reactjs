// import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationsBar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';
import "./style/home.css";

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar />
        <Hero />
      </div>
      <div className='Trending'>
        <Trending />
      </div>
      <div className='SuperHero'>
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
