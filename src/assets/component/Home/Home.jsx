import React, { useEffect } from 'react';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import homeImage from '../image/home_image.jpg'; // Assuming the image is in the same directory and named 'home_image.jpg'

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="home-kontainer">
      <div className="boxx-1">
        <div className="content-satu" data-aos="fade-right" data-aos-duration="2000">
          <h1><span>Ngoding Bareng</span><br /> di Website Saya</h1>
          <p>Ini adalah halaman utama dari website yang menyediakan tutorial ngoding untuk pemula.</p>
        </div>

        <div className="content-dua" data-aos="fade-left" data-aos-duration="2000">
          <img src={homeImage} alt="Coding Illustration" />
        </div>

        <div className="content-tiga">
          <h2>List tutorial</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
