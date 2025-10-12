import React from 'react';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Hubungi Kami</h2>
                    <p>Kami siap membantu mewujudkan impian Anda memiliki rumah idaman. Hubungi kami untuk informasi lebih lanjut.</p>
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