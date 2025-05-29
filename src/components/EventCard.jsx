import React, { useState } from 'react';
import '../styles/EventCard.css';

const categoryColors = {
  Ancient: '#F9A825',
  Medieval: '#6D4C41',
  Modern: '#29B6F6',
  Future: '#AB47BC',
};

const EventCard = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="event-card" tabIndex={0}>
      <img src={event.image} alt={event.title} />
      <div className="event-content">
        <div className="event-header">
          <h3>{event.title}</h3>
          <span
            className="category-badge"
            style={{ backgroundColor: categoryColors[event.category] || '#888' }}
          >
            {event.category}
          </span>
        </div>

        <p className={`event-description ${expanded ? 'expanded' : ''}`}>
          {expanded ? event.description : `${event.description.substring(0, 100)}...`}
        </p>
        <button
          className="read-more-btn"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>

        <div className="event-meta">
          <span>📅 {event.year < 0 ? `${-event.year} BC` : event.year}</span>
          <span>📍 {event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
