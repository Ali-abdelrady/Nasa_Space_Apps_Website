export default function VideoModal({ onCloseVideo, videoUrl }) {
  return (
    <div
      className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
      tabIndex="-1"
      style={{ overflow: "hidden auto" }}
      onClick={onCloseVideo}
    >
      <div className="mfp-container mfp-s-ready mfp-iframe-holder">
        <div className="mfp-content">
          <div className="mfp-iframe-scaler">
            <button className="mfp-close" onClick={onCloseVideo}>
              ×
            </button>
            <iframe
              className="mfp-iframe"
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mfp-preloader">Loading...</div>
      </div>
    </div>
  );
}
