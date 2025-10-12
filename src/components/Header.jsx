import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleNavigation = (sectionId) => {
        // Tutup mobile menu jika terbuka
        setMenuActive(false);

        // Jika sudah di homepage, scroll ke section
        if (location.pathname === '/') {
            const element = document.querySelector(sectionId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        } else {
            // Jika di halaman lain, navigasi ke homepage dulu
            navigate('/');
            // Tunggu sampai homepage load, lalu scroll ke section
            setTimeout(() => {
                const element = document.querySelector(sectionId);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    };

    const handleHomeClick = () => {
        setMenuActive(false);
        navigate('/');
    };

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <button onClick={handleHomeClick} className="logo-btn">
                            <h1>Summarecon<span>Bogor</span></h1>
                        </button>
                    </div>
                    <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                        <li>
                            <button onClick={handleHomeClick} className="nav-link">
                                Beranda
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigation('#about')} className="nav-link">
                                Tentang
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigation('#products')} className="nav-link">
                                Produk
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigation('#maps')} className="nav-link">
                                Lokasi
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigation('#contact')} className="nav-link">
                                Kontak
                            </button>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;