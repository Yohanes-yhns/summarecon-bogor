import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function EbonyDetail() {
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
    id: 2,
    name: "The Ebony Residence",
    tagline: "Kemewahan Modern dalam Setiap Detail",
    description:
      "The Ebony Residence merupakan cluster mewah dengan desain kontemporer yang elegan. Setiap aspek dirancang untuk memberikan kenyamanan maksimal dan gaya hidup eksklusif bagi penghuninya.",
    images: ["https://res.cloudinary.com/daqiwll92/image/upload/v1760340754/EbonyResidence_lnlu9h.png", "https://res.cloudinary.com/daqiwll92/image/upload/v1760342297/Screenshot_2025-10-12_at_22.09.09_pfjq3v.png", "https://res.cloudinary.com/daqiwll92/image/upload/v1760342298/Screenshot_2025-10-12_at_22.13.35_uhiwcp.png"],
    location: "Jl. Bukit Geulis, Nagrak, Kec. Sukaraja, Kabupaten Bogor",
  };

  return (
    <div className="product-detail-page ebony-detail">
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
            src={product.images[1]}
            alt={product.name}
            className="main-image"
          />
          <img
            src={product.images[0]}
            alt={product.name}
            className="main-image"
          />
        </div>

        {/* Gallery */}
        <div className="gallery-section">
          <h3>Galeri The Ebony Residence</h3>
          <div className="gallery-grid">
            {product.images.slice(2).map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="simple-description-section">
          <h3>Type 7 Brown Premium</h3>
          <p>Land Area: 98m2 | Building Area: 107m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>3+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342518/Screenshot_2025-10-13_at_15.01.22_ndpa75.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

        <div className="simple-description-section">
          <h3>Type 7 Brown Premium Attic</h3>
          <p>Land Area: 98m2 | Building Area: 136m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>4+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z" />
            </svg>
            <p>+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342621/Screenshot_2025-10-13_at_15.03.10_plsd9b.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

        <div className="simple-description-section">
          <h3>Type 7 Red Premium</h3>
          <p>Land Area: 98m2 | Building Area: 107m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>3+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342674/Screenshot_2025-10-13_at_15.04.22_k7qewx.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

        <div className="simple-description-section">
          <h3>Type 7 Red Premium Attic</h3>
          <p>Land Area: 98m2 | Building Area: 136m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>4+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z" />
            </svg>
            <p>+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342733/Screenshot_2025-10-13_at_15.05.17_mu54qo.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

         <div className="simple-description-section">
          <h3>Type 9 Brown Premium</h3>
          <p>Land Area: 126m2 | Building Area: 138m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>3+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342792/Screenshot_2025-10-13_at_15.06.19_f8zkii.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

        <div className="simple-description-section">
          <h3>Type 9 Brown Premium Attic</h3>
          <p>Land Area: 126m2 | Building Area: 175m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>4+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z" />
            </svg>
            <p>+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342854/Screenshot_2025-10-13_at_15.07.21_vkql64.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

        <div className="simple-description-section">
          <h3>Type 9 Red Premium</h3>
          <p>Land Area: 126m2 | Building Area: 138m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>3+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342894/Screenshot_2025-10-13_at_15.08.02_cd6cih.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

        <div className="simple-description-section">
          <h3>Type 9 Red Premium Attic</h3>
          <p>Land Area: 126m2 | Building Area: 175m2</p>

          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
            </svg>
            <p>3+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z" />
            </svg>
            <p>4+1</p>
          </div>
          <div className="room-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8e5601ff"
            >
              <path d="M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z" />
            </svg>
            <p>+1</p>
          </div>

          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760342894/Screenshot_2025-10-13_at_15.08.02_cd6cih.png" alt="Type 7 Brown Premium" />
          </div>
        </div>

        <div className="simple-description-section">
          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760343037/Screenshot_2025-10-13_at_15.10.19_ymvyrj.png" alt="Type 7 Brown Premium" />
          </div>
        </div>
        <div className="simple-description-section">
          <div className="description-image">
            <img src="https://res.cloudinary.com/daqiwll92/image/upload/v1760343092/Screenshot_2025-10-13_at_15.11.18_vcwhfs.png" alt="Type 7 Brown Premium" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EbonyDetail;
