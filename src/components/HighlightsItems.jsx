import { HighlightCard } from "./HighlightCard";
import { HighlightContent } from "./HighlightContent";
import { HighlightThumb } from "./HighlightThumb";
export default function HighlightsItems({ items }) {
  return (
    <div
      className="row blog-active2 wow fadeInDown animated"
      data-animation="fadeInDown animated"
      data-delay=".2s"
    >
      {items.map((item, index) => (
        <HighlightCard key={index}>
          <HighlightThumb imageUrl={item.image} />
          <HighlightContent content={item} />
        </HighlightCard>
      ))}
    </div>
  );
}
