import React from 'react';

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-title">
                    <h2>Summarecon Bogor</h2>
                    <p>Summarecon Bogor adalah pengembang properti terpercaya dengan pengalaman lebih dari 20 tahun dalam menghadirkan hunian berkualitas.</p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <h3>About Us</h3>
                        <p>Summarecon Bogor merupakan kawasan hunian modern yang memadukan keindahan alam pegunungan dengan konsep kota mandiri yang lengkap dan berkelas.</p>
                        <p>Dikelilingi panorama hijau dan udara sejuk khas Bogor, kawasan ini dilengkapi fasilitas unggulan seperti clubhouse eksklusif, area komersial, taman tematik, dan akses mudah ke tol Jagorawi.</p>
                        <p>Setiap cluster dirancang dengan arsitektur elegan dan lingkungan yang asri, menjadikan Summarecon Bogor pilihan sempurna untuk keluarga yang menginginkan kenyamanan, keamanan, dan gaya hidup modern di tengah alam yang menenangkan.</p>
                        <a href="#contact" className="btn">Hubungi Kami</a>
                    </div>
                    <div className="about-image">
                        <img src="/Logo-SMRC.png" alt="Summarecon Bogor" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;