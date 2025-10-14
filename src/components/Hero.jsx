// import React from 'react';

// function Hero() {
//     return (
//         <section className="hero" id="home">
//             <div className="container">
//                 <div className="hero-content">
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Summarecon Bogor</h1>
          <p className="hero-description">
            Step into a community built for growth, comfort, and connection.
            Discover modern architecture surrounded by serene landscapes — a
            perfect balance between nature and city life.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-explore">
              Explore Our Project
            </a>
            <a
              href="https://wa.me/6282211555091"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Sekarang
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/daqiwll92/image/upload/v1760340377/BG_tjgbdb.jpg"
            alt="Summarecon Bogor"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
