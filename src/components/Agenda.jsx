import { useState } from "react";
import DayNav from "./DayNav";
import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";
import SpeakerInfo from "./SpeakerInfo";
import EventDetails from "./EventDetails";
const eventAgenda = [
  {
    day: "First Day",
    date: "2024-07-10",
    events: [
      {
        startTime: "09:30",
        endTime: "10:30",
        header: "UX Design Trend Party 2019",
        details:
          "In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.",
        location: "Waterfront Hotel, London",
        speaker: {
          name: "Rosalina William",
          role: "UX Design",
          image: "https://example.com/path/to/rosalina-william.jpg",
        },
      },
      {
        startTime: "11:00",
        endTime: "12:00",
        header: "Advanced CSS Techniques",
        details:
          "This session covers advanced CSS techniques to create visually stunning web pages. Topics include CSS Grid, Flexbox, animations, and transitions.",
        location: "Conference Room A",
        speaker: {
          name: "John Doe",
          role: "Frontend Developer",
          image: "https://example.com/path/to/john-doe.jpg",
        },
      },
    ],
  },
  {
    day: "Second Day",
    date: "2024-07-11",
    events: [
      {
        startTime: "10:00",
        endTime: "11:00",
        header: "JavaScript Best Practices",
        details:
          "Learn the best practices for writing clean and maintainable JavaScript code. This session will cover tips and tricks for improving your JavaScript skills.",
        location: "Main Hall",
        speaker: {
          name: "Jane Smith",
          role: "Software Engineer",
          image: "https://example.com/path/to/jane-smith.jpg",
        },
      },
      {
        startTime: "13:00",
        endTime: "14:00",
        header: "Introduction to React",
        details:
          "Get started with React, a popular JavaScript library for building user interfaces. This session will cover the basics of React, including components, state, and props.",
        location: "Workshop Room B",
        speaker: {
          name: "Alex Johnson",
          role: "React Developer",
          image: "https://example.com/path/to/alex-johnson.jpg",
        },
      },
    ],
  },
];

function DayContent({ events }) {
  return (
    <div
      className="tab-content py-3 px-3 px-sm-0 wow fadeInDown animated"
      data-animation="fadeInDown animated"
      data-delay=".2s"
      id="nav-tabContent"
    >
      <div
        className="tab-pane fade active show"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        {events.map((event, index) => {
          return (
            <div className="row mb-30" key={index}>
              <SpeakerInfo speaker={event.speaker} />
              <EventCard>
                <EventDetails event={event} />
              </EventCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Agenda() {
  const [selectedDay, setSelectedDay] = useState(0);
  function handleSelectedEventDay(index) {
    setSelectedDay(index);
  }
  return (
    <div className="event fix pt-120 pb-120">
      <div className="container">
        <SectionTitle
          headText={"PROGRAM"}
          subHeadText={"Bootcamp and Hackathone Timeline"}
          titleAlign="center"
        />
        <div className="row">
          <div className="col-lg-12">
            <DayNav
              eventAgenda={eventAgenda}
              selectedDay={selectedDay}
              onDaySelect={handleSelectedEventDay}
            />
            <DayContent events={eventAgenda[selectedDay].events} />
          </div>
        </div>
      </div>
    </div>
  );
}
