export default function EventDetails({ event }) {
  return (
    <>
      <ul
        data-animation="fadeInUp animated"
        data-delay=".2s"
        // style="animation-delay: 0.2s"
        className=""
      >
        <li>
          <i className="fas fa-map-marker-alt"></i> {event.location}
        </li>
        <li>
          <i className="far fa-clock"></i> {event.startTime} - {event.endTime}
        </li>
      </ul>
      <h2>{event.header}</h2>
      <p>{event.details}</p>
    </>
  );
}
