import React from 'react';

function WhatsAppFloat() {
    const phoneNumber = "6282211555091";
    const message = "Halo, saya tertarik dengan properti Summarecon Bogor. Bisa minta informasi lebih lanjut?";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
            <i className="fab fa-whatsapp"></i>
        </a>
    );
}

export default WhatsAppFloat;