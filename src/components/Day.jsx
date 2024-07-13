export default function Day({ event, index, selectedDay, onDaySelect }) {
  return (
    <a
      className={`nav-item nav-link ${
        index === selectedDay ? "active show" : ""
      }`}
      style={{ cursor: "pointer" }}
      id="nav-home-tab"
      data-toggle="tab"
      role="tab"
      aria-selected="true"
      onClick={() => onDaySelect(index)}
    >
      <img src="/src/assets/img/t-icon.png" alt="img" className="drk-icon" />
      <img src="/src/assets/img/t-w-icon1.png" alt="img" className="lgt-icon" />
      <div className="nav-content">
        <strong>{event.day}</strong>
        <span>{event.date}</span>
      </div>
    </a>
  );
}
