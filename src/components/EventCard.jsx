import ActionButtons from "./ActionButtons";
import Circal from "./Circal";
export default function EventCard({ children }) {
  return (
    <div className="col-lg-10">
      <div className="event-list-content fix">
        {children}
        <ActionButtons />
        <Circal />
      </div>
    </div>
  );
}
