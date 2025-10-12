import React from 'react';

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-title">
                    <h2>Tentang Perusahaan</h2>
                    <p>Summarecon Bogor adalah pengembang properti terpercaya dengan pengalaman lebih dari 20 tahun dalam menghadirkan hunian berkualitas.</p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <h3>IT IS BEST at Summarecon</h3>
                        <p>Summarecon Bogor telah menjadi pilihan utama masyarakat Indonesia dalam mencari hunian idaman. Dengan komitmen untuk memberikan kualitas terbaik, kami terus berinovasi dalam setiap proyek yang kami kembangkan.</p>
                        <p>Visi kami adalah menciptakan lingkungan hunian yang tidak hanya nyaman tetapi juga meningkatkan kualitas hidup penghuninya melalui desain yang matang dan fasilitas lengkap.</p>
                        <p>Dengan lokasi strategis di kawasan Bogor yang asri dan sejuk, properti kami menjadi pilihan tepat untuk investasi jangka panjang maupun tempat tinggal yang menyenangkan.</p>
                        <a href="#contact" className="btn">Hubungi Kami</a>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Summarecon Bogor" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;