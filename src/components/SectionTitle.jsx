export default function SectionTitle({
  titleAlign = "",
  headText,
  subHeadText,
}) {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-12 col-lg-12">
        <div className={`section-title mb-80 text-${titleAlign}`}>
          <span
            className="wow fadeInUp animated"
            data-animation="fadeInUp animated"
            data-delay=".2s"
          >
            {subHeadText}
          </span>
          <h2
            className="wow fadeInUp animated"
            data-animation="fadeInUp animated"
            data-delay=".2s"
          >
            {headText}
          </h2>
        </div>
      </div>
    </div>
  );
}
