export function HighlightContent({ content }) {
  return (
    <div className="blog-content">
      <div className="b-meta mb-20">
        <span style={{ color: "#ff007a" }}>{content.date}</span>
      </div>
      <h4>{content.author}</h4>
      <p>{content.description}</p>
    </div>
  );
}
