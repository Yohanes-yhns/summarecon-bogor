import React, { useState } from 'react';

function Maps() {
    const [activeMap, setActiveMap] = useState(1);

    const mapLocations = [
        {
            id: 1,
            name: "The Maple Golf Residence",
            // URL embed untuk iframe
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.200919197064!2d106.85251337511019!3d-6.6219459933722895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c7000de60b17%3A0x81ec0de7a41ee593!2sThe%20Maple%20Residence%20Cluster%20of%20Summarecon%20Bogor!5e0!3m2!1sen!2sid!4v1760260642658!5m2!1sen!2sid"
        },
        {
            id: 2,
            name: "The Ebony Residence",
            // URL embed untuk iframe
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.187622885381!2d106.84505447975772!3d-6.623601576277232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c7005f04dea3%3A0x463b15bea0f36294!2sThe%20Ebony%20Residence!5e0!3m2!1sen!2sid!4v1760260553675!5m2!1sen!2sid"
        }

    ];

    return (
        <section className="maps" id="maps">
            <div className="container">
                <div className="section-title">
                    <h2>Lokasi Strategis</h2>
                    <p>Setiap cluster kami berada di lokasi strategis dengan akses mudah ke fasilitas publik dan pusat kota.</p>
                </div>
                <div className="maps-container">
                    <div className="map-buttons">
                        {mapLocations.map(location => (
                            <button 
                                key={location.id} 
                                className={`btn ${activeMap === location.id ? '' : 'btn-secondary'}`}
                                onClick={() => setActiveMap(location.id)}
                            >
                                {location.name}
                            </button>
                        ))}
                    </div>
                    <div className="map-display">
                        <iframe 
                            src={mapLocations.find(loc => loc.id === activeMap).src}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Lokasi"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Maps;