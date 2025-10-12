import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Summarecon Bogor</h3>
                        <p>Perusahaan properti terpercaya dengan komitmen memberikan hunian berkualitas untuk keluarga Indonesia.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Produk Kami</h3>
                        <Link to="/maple-golf-residence" className="footer-link">
                            The Maple Golf Residence
                        </Link>
                        <Link to="/ebony-residence" className="footer-link">
                            The Ebony Residence
                        </Link>
                    </div>
                    <div className="footer-column">
                        <h3>Tautan Cepat</h3>
                        <a href="/">Beranda</a>
                        <a href="/#about">Tentang</a>
                        <a href="/#products">Produk</a>
                        <a href="/#maps">Lokasi</a>
                        <a href="/#contact">Kontak</a>
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