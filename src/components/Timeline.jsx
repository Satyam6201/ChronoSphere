import React from 'react';
import EventCard from './EventCard';
import '../styles/Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Timeline;
