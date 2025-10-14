import React, { useEffect, useRef, useState } from "react";

function VideoSection() {
  const videoId = "EEIoz_glpz4";
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-only-section">
      <div className="video-fullscreen">
        <div className="video-wrapper" ref={iframeRef}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=${isVisible ? 1 : 0}&mute=1`}
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
