export default function SpeakerInfo({ speaker }) {
  return (
    <div className="col-lg-2">
      <div className="user">
        <div className="title">
          <img src="/src/assets/img/event_avatar_1.png" alt="img" />
          <h5>{speaker.name}</h5>
          <p>{speaker.role}</p>
        </div>
      </div>
    </div>
  );
}
