import Day from "./Day";

export default function DayNav({ eventAgenda, selectedDay, onDaySelect }) {
  return (
    <nav
      className="wow fadeInDown animated"
      data-animation="fadeInDown animated"
      data-delay=".2s"
    >
      <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
        {eventAgenda.map((event, index) => (
          <Day
            event={event}
            selectedDay={selectedDay}
            index={index}
            key={index}
            onDaySelect={onDaySelect}
          />
        ))}
      </div>
    </nav>
  );
}
