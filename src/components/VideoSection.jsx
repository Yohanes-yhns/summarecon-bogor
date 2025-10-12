import React from 'react';

function VideoSection() {
    const videoId = "EEIoz_glpz4";
    
    return (
        <section className="video-only-section">
            <div className="video-fullscreen">
                <div className="video-wrapper">
                    <iframe 
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
                        title="Virtual Tour Summarecon Bogor"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;