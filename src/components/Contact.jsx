import React, { useState, useEffect } from "react";

function Contact() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451524/WhatsApp_Image_2025-10-14_at_20.56.04_deodce.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451524/WhatsApp_Image_2025-10-14_at_20.58.02_h3tftt.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451524/WhatsApp_Image_2025-10-14_at_20.58.03_orxesq.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451524/WhatsApp_Image_2025-10-14_at_20.58.04_mdmcgo.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451526/WhatsApp_Image_2025-10-14_at_20.58.04_1_z53a0i.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451526/WhatsApp_Image_2025-10-14_at_20.58.05_1_zm0wih.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451528/WhatsApp_Image_2025-10-14_at_21.03.46_lnjghl.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451528/WhatsApp_Image_2025-10-14_at_21.02.28_bupedb.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451530/WhatsApp_Image_2025-10-14_at_20.58.06_dunrw4.jpg",
    "https://res.cloudinary.com/daqiwll92/image/upload/v1760451530/WhatsApp_Image_2025-10-14_at_20.58.05_uzyvyp.jpg"
  ];

  // Auto slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title-contact">
          <h2>Hubungi Kami</h2>
          <p>
            Kami siap membantu mewujudkan impian Anda memiliki rumah idaman.
            Hubungi kami untuk informasi lebih lanjut.
          </p>
        </div>

        {/* Profil Sales */}
        <div className="sales-profile">
          <div className="sales-photo">
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760340878/Gio_ywfyju.jpg"
              alt="Sales Property Summarecon Bogor"
            />
          </div>
          <div className="sales-info">
            <div className="sales-badge">Konsultan Properti</div>
            <h3>Tim Professional Summarecon Bogor</h3>
            <p>
              Tim sales profesional kami siap membantu Anda menemukan hunian
              impian dengan pelayanan terbaik dan informasi yang lengkap tentang
              The Maple Golf Residence dan The Ebony Residence.
            </p>

            <div className="sales-social-media">
              <a
                href="https://www.instagram.com/summareconbogor.gio?igsh=MWJmbXRkZnYyZXk1Nw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@summareconbogor.gio"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-tiktok"></i>
                <span>TikTok</span>
              </a>
              <a
                href="https://wa.me/6282211555091"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* SLIDER SERAH TERIMA */}
        <div className="handover-section">
          <h3>Galeri Serah Terima</h3>
          <div className="slider-container">
            <button className="prev-btn" onClick={prevSlide}>
              &#10094;
            </button>

            <div className="slider">
              <img
                src={images[currentIndex]}
                alt={`Serah Terima ${currentIndex + 1}`}
                className="slide-image"
              />
            </div>

            <button className="next-btn" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div>

        {/* Info Kontak */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Alamat</h3>
            <p>
              Jl. Bukit Geulis, Nagrak, Kec. Sukaraja, Kabupaten Bogor, Jawa
              Barat 16710
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <h3>Telepon</h3>
            <p>082211555091</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>send2aldogiov@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
