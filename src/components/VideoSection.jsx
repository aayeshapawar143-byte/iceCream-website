function VideoSection() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      <h2>🍦 Ice Cream Video</h2>

      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/8Qbax_1szSs"
        title="Ice Cream Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>
  );
}

export default VideoSection;