import React from "react";
import { useNavigate } from "react-router-dom";

function MapleDetail() {
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "The Maple Golf Residence",
    tagline: "Hunian Eksklusif dengan View Lapangan Golf",
    description:
      "The Maple Golf Residence menghadirkan konsep hunian eksklusif yang memadukan kemewahan modern dengan ketenangan alam. Setiap unit dirancang untuk memberikan pengalaman hidup terbaik dengan view langsung ke lapangan golf yang memukau.",
    images: ["/MapleResidence.png", "/GP1Maple.png", "/MG1.png"],
    location: "Jl. Bukit Geulis, Nagrak, Kec. Sukaraja, Kabupaten Bogor",
  };

  return (
    <div className="product-detail-page maple-detail">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <button onClick={() => navigate("/")} className="breadcrumb-link">
            Beranda
          </button>
          <span> / </span>
          <button className="breadcrumb-link">Produk</button>
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
              src="/Type12.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Type12STD.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Type12Hoek.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Type12Irre.png"
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
              src="/Type15.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Type15STD.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Type15HOEK.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Optional</h3>
          <div className="description-image">
          <img
              src="/HomeLift.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Lift.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/AGD.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/D&P.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Deck.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/D&P12.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Specifications & Price</h3>
          <div className="description-image">
          <img
              src="/Spec.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Price.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/HL.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
        <div className="simple-description-section">
          <h3>Promo</h3>
          <div className="description-image">
          <img
              src="/PromoBCA.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
            <img
              src="/Mandiri.png"
              alt="Tipe 12 The Maple Golf Residence"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapleDetail;
