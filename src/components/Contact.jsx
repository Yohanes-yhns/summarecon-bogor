import React from 'react';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-title-contact">
                    <h2>Hubungi Kami</h2>
                    <p>Kami siap membantu mewujudkan impian Anda memiliki rumah idaman. Hubungi kami untuk informasi lebih lanjut.</p>
                </div>
                
                {/* Foto Sales Property */}
                <div className="sales-profile">
                    <div className="sales-photo">
                        <img src="/Gio.jpeg" alt="Sales Property Summarecon Bogor" />
                    </div>
                    <div className="sales-info">
                        <div className="sales-badge">Konsultan Properti</div>
                        <h3>Tim Professional Summarecon Bogor</h3>
                        <p>Tim sales profesional kami siap membantu Anda menemukan hunian impian dengan pelayanan terbaik dan informasi yang lengkap tentang The Maple Golf Residence dan The Ebony Residence.</p>
                       
                    </div>
                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Alamat</h3>
                        <p>Jl. Bukit Geulis, Nagrak, Kec. Sukaraja, Kabupaten Bogor, Jawa Barat 16710</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <h3>Telepon</h3>
                        <p>082211555091</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p>info@summareconbogor.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;