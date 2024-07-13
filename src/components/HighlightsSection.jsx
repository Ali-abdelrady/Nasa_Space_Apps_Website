import HighlightsItems from "./HighlightsItems";
import SectionTitle from "./SectionTitle";

const highlights = {
  header: {
    title: "News Feeds",
    // navigation: {
    //   leftArrow: "←",
    //   rightArrow: "→",
    // },
  },
  items: [
    {
      image: "https://www.spaceappscairo.com/img/Antony%20Blinken.jpg",
      author: "Mr. Mark Jernigan",
      date: "2023-07-08",
      description: "Envi. Control & Life Support Manager at NASA",
    },
    {
      image: "https://www.spaceappscairo.com/img/Tahani%20Amer.jpg",
      author: "Dr. Tahani Amer",
      date: "2023-07-09",
      description: "Program Executive at NASA",
    },
    {
      image: "https://www.spaceappscairo.com/img/Mark%20Jernigan.jpg",
      author: "Mr. Antony Blinken",
      date: "2023-07-10",
      description: "United States Secretary of State",
    },
  ],
};
export default function HighlightsSection() {
  return (
    <section id="blog" className="blog-area p-relative fix pt-100 pb-80">
      <div className="container">
        <SectionTitle
          headText={"CAIRO’S HIGHLIGHTS"}
          subHeadText={"Nasa"}
          titleAlign="center"
        />
        <HighlightsItems items={highlights.items} />
      </div>
    </section>
  );
}
