import React from 'react';

function Products() {
    const products = [
        {
            id: 1,
            name: "The Maple Golf Residence",
            image: "MapleResidence.png",
            description: "Hunian eksklusif dengan view lapangan golf yang memukau, dilengkapi fasilitas premium dan desain arsitektur modern.",
            features: [
                "View langsung ke lapangan golf dan gunung",
                "Fasilitas klubhouse lengkap",
                "Desain minimalis modern",
                "Area hijau yang luas",
                "Keamanan 24 jam"
            ]
        },
        {
            id: 2,
            name: "The Ebony Residence",
            image: "EbonyResidence.png",
            description: "Cluster mewah dengan konsep hunian modern yang elegan, dilengkapi dengan taman bermain dan area rekreasi keluarga.",
            features: [
                "Desain interior mewah",
                "Taman bermain anak",
                "Akses F&B area",
                "Akses cepat ke jalan tol",
                "Parkir luas dan aman"
            ]
        }
    ];

    return (
        <section className="products" id="products">
            <div className="container">
                <div className="section-title">
                    <h2>Produk Kami</h2>
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
                                <a href="#contact" className="btn btn-secondary">Info Lebih Lanjut</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;