import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function MapleDetail() {
  const navigate = useNavigate();

  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleHomeClick = () => {
    navigate("/");
    // Scroll to top setelah navigasi
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // 🔥 DAN FUNGSI INI UNTUK TOMBOL PRODUK 🔥
  const handleProductsClick = () => {
    navigate("/");
    // Tunggu sebentar lalu scroll ke section products
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        window.scrollTo({
          top: productsSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const product = {
    id: 1,
    name: "The Maple Golf Residence",
    tagline: "Hunian Eksklusif dengan View Lapangan Golf",
    description:
      "The Maple Golf Residence menghadirkan konsep hunian eksklusif yang memadukan kemewahan modern dengan ketenangan alam. Setiap unit dirancang untuk memberikan pengalaman hidup terbaik dengan view langsung ke lapangan golf yang memukau.",
    images: ["https://res.cloudinary.com/daqiwll92/image/upload/v1760340650/MapleResidence_nm6oz5.png", "https://res.cloudinary.com/daqiwll92/image/upload/v1760341023/GP1_kzvcvb.png", "https://res.cloudinary.com/daqiwll92/image/upload/v1760341077/Screenshot_2025-10-12_at_21.11.33_yfpfzt.png"],
    location: "Jl. Bukit Geulis, Nagrak, Kec. Sukaraja, Kabupaten Bogor",
  };

  return (
    <div className="product-detail-page maple-detail">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <button onClick={handleHomeClick} className="breadcrumb-link">
            Beranda
          </button>
          <span> / </span>
          <button onClick={handleProductsClick} className="breadcrumb-link">
            Produk
          </button>
          <span> / </span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>

        {/* Product Header */}
        <div className="product-detail-header">
          <h1>{product.name}</h1>
          <p className="tagline">{product.tagline}</p>
          <p className="description">{product.description}</p>
        </div>

        {/* Main Image */}
        <div className="main-image-section">
          <img
            src={product.images[0]}
            alt={product.name}
            className="main-image"
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className="main-image"
          />
        </div>

        {/* Gallery */}
        <div className="gallery-section">
          <h3>Galeri The Maple Golf Residence</h3>
          <div className="gallery-grid">
            {product.images.slice(2).map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Type 12</h3>
          <p>
            12x22 STD, 12x22 HOEK, 12x20 IRREULAR
          </p>
          <div className="description-image">
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341230/Screenshot_2025-10-13_at_14.40.04_aesosj.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341350/Type12STD_sddsrc.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341430/Type12Hoek_kny6nx.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341493/Screenshot_2025-10-12_at_21.31.04_cewc4a.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Type 15</h3>
          <p>
            15x25 STD, 15x25 HOEK
          </p>
          <div className="description-image">
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341550/Type15_maujte.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341659/Type15STD_poxwrz.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341726/Type15Hoek_p0mazm.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Optional</h3>
          <div className="description-image">
          <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341797/HomeLift_nmvluv.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341838/Screenshot_2025-10-12_at_21.43.39_fjxlsv.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341888/AGD_kqgpzn.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341921/Screenshot_2025-10-12_at_21.48.48_k7xz06.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760341976/Screenshot_2025-10-12_at_21.49.38_jzftxw.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342066/Screenshot_2025-10-12_at_21.50.52_mixwtb.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Specifications & Price</h3>
          <div className="description-image">
          <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342099/Screenshot_2025-10-12_at_21.54.03_vksiee.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342139/Screenshot_2025-10-12_at_21.54.55_lvctoc.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342185/Screenshot_2025-10-12_at_21.56.08_uc9itt.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Promo</h3>
          <div className="description-image">
          <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342233/Screenshot_2025-10-12_at_21.58.02_gqela2.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342237/Screenshot_2025-10-12_at_21.58.52_ei0ygf.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapleDetail;
