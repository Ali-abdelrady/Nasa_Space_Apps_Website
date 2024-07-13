import { useState } from "react";
import Agenda from "../components/Agenda";
import HighlightsSection from "../components/HighlightsSection";
import Insights from "../components/Insights";
import IntroVideo from "../components/IntroVideo";
import Overlay from "../components/Overlay";
import VideoModal from "../components/VideoModal";

export default function HomePage() {
  //This state check if the video is opened
  const [isOpen, setIsOpen] = useState(false);
  function handleVideoOpen() {
    setIsOpen(true);
  }
  function handleVideoClose() {
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <VideoModal
            onCloseVideo={handleVideoClose}
            videoUrl={"https://www.youtube.com/embed/_36gRYM_ogo"}
          />
        </>
      )}
      <Agenda />
      <HighlightsSection />
      <IntroVideo
        onOpenVideo={handleVideoOpen}
        backgroundImageUrl={
          "https://as2.ftcdn.net/v2/jpg/04/22/83/31/1000_F_422833176_1uHUdBZhu1VLwtL7bRa1aPYACEDRJtuA.jpg"
        }
      />
      <Insights />
    </>
  );
}
