import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
import homeImage from '../image/home_image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-kontainer">
      <div className="boxx-1">
        <div className="content-satu" data-aos="fade-right"  data-aos-duration="3000"> 
          <h1><span>Ngoding Bareng</span><br /> di Website Saya</h1>
          <p>Ini adalah halaman utama dari website yang menyediakan tutorial ngoding untuk pemula.</p>
        </div>
        <div className="content-dua">
          <img src={homeImage} alt="Coding Illustration" />
        </div>

        <div className="content-tiga">
          <h2>List tutorial</h2>
          <div className="card-container">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Belajar Ngoding #1</Card.Title>
                <Card.Img src={homeImage} style={{ width: '100%', height: 'auto' }} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Belajar Ngoding #2</Card.Title>
                <Card.Img src={homeImage} style={{ width: '100%', height: 'auto' }} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Belajar Ngoding #3</Card.Title>
                <Card.Img src={homeImage} style={{ width: '100%', height: 'auto' }} />
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
