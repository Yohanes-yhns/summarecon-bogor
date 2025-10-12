import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Summarecon Bogor</h3>
                        <p>Perusahaan properti terpercaya dengan komitmen memberikan hunian berkualitas untuk keluarga Indonesia.</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>Produk Kami</h3>
                        <a href="#">The Maple Golf Residence</a>
                        <a href="#">The Ebony Residence</a>
                        <a href="#">Proyek Mendatang</a>
                    </div>
                    <div className="footer-column">
                        <h3>Tautan Cepat</h3>
                        <a href="#home">Beranda</a>
                        <a href="#about">Tentang</a>
                        <a href="#products">Produk</a>
                        <a href="#maps">Lokasi</a>
                        <a href="#contact">Kontak</a>
                    </div>
                    <div className="footer-column">
                        <h3>Kontak</h3>
                        <p><i className="fas fa-map-marker-alt"></i>Jl. Bukit Geulis, Nagrak, Kec. Sukaraja, Kabupaten Bogor, Jawa Barat 16710</p>
                        <p><i className="fas fa-phone"></i> 082211555091</p>
                        <p><i className="fas fa-envelope"></i> info@summareconbogor.com</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 Summarecon Bogor. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;