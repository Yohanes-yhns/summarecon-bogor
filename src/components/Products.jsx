import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "The Maple Golf Residence",
            image: "https://res.cloudinary.com/daqiwll92/image/upload/v1760440103/WhatsApp_Image_2025-10-14_at_18.05.14_rvgtcs.jpg",
            description: "Hunian eksklusif dengan view lapangan golf yang memukau, dilengkapi fasilitas premium dan desain arsitektur modern.",
            features: [
                "View langsung ke lapangan golf",
                "Fasilitas klubhouse lengkap",
                "Desain minimalis modern",
                "Area hijau yang luas",
                "Keamanan 24 jam"
            ]
        },
        {
            id: 2,
            name: "The Ebony Residence", 
            image: "https://res.cloudinary.com/daqiwll92/image/upload/v1760426403/WhatsApp_Image_2025-10-12_at_17.34.40_ajx6yo.jpg",
            description: "Cluster mewah dengan konsep hunian modern yang elegan, dilengkapi dengan taman bermain dan area rekreasi keluarga.",
            features: [
                "Desain interior mewah",
                "Taman bermain anak", 
                "Kolam renang keluarga",
                "Area barbecue",
                "Parkir luas dan aman"
            ]
        }
    ];

    return (
        <section className="products" id="products">
            <div className="container">
                <div className="section-title">
                    <h2>Discover Your Dream Home</h2>
                    <p>Temukan hunian impian Anda di antara pilihan cluster eksklusif kami dengan fasilitas terbaik.</p>
                </div>
                <div className="product-grid">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <ul className="product-features">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check"></i> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button 
                                    onClick={() => navigate(product.id === 1 ? '/maple-golf-residence' : '/ebony-residence')}
                                    className="btn btn-secondary"
                                >
                                    Info Lebih Lanjut
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;