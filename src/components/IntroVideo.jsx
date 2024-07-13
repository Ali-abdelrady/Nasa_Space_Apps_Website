let videoStyle = {
  backgroundImage: "url({backgroundImageUrl})",
  visibility: "visible",
  animationName: "fadeInUp",
};
export default function IntroVideo({ onOpenVideo, backgroundImageUrl }) {
  videoStyle = { ...videoStyle, backgroundImage: `url(${backgroundImageUrl})` };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="s-video-wrap wow fadeInUp  animated"
            data-animation="fadeInUp animated"
            data-delay=".2s"
            style={videoStyle}
          >
            <div className="s-video-content mb-80">
              <a
                className="popup-video mb-50"
                onClick={onOpenVideo}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-play" style={{ color: "white" }}></i>
              </a>
              <h2>Intro Video</h2>
              <p>The issue with any content strategy is time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
