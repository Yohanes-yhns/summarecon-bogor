import React, { useState } from 'react';

function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <h1>Summarecon<span>Bogor</span></h1>
                    </div>
                    <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                        <li><a href="#home">Beranda</a></li>
                        <li><a href="#about">Tentang</a></li>
                        <li><a href="#products">Produk</a></li>
                        <li><a href="#maps">Lokasi</a></li>
                        <li><a href="#contact">Kontak</a></li>
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