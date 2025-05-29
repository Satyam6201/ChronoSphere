import React, { useState } from 'react';
import Timeline from '../components/Timeline';
import EraFilter from '../components/EraFilter';
import TimeMachineSlider from '../components/TimeMachineSlider';
import MapView from '../components/MapView';
import FunFacts from '../components/FunFacts';
import eventsData from '../data/eventsData';
import '../styles/Home.css';

const Home = () => {
  const [selectedEra, setSelectedEra] = useState('All'); 

  const handleEraChange = (era) => {
    setSelectedEra(era);
  };

  const filteredEvents =
    selectedEra === 'All'
      ? eventsData
      : eventsData.filter((event) => event.category === selectedEra);

  return (
    <div className="home-container">
      <h1>🕰️ TimeTravel UI</h1>
      <p className="home-subtitle">
        Travel through time, explore historic eras, and visualize events on a world map.
      </p>

      {/* Intro Card */}
      <div className="intro-section">
        <div className="home-glass-card">
          <h2>🌍 Explore History Interactively</h2>
          <p>
            Use filters to navigate through time periods. Drag the time slider to jump across centuries.
            Discover global events and visualize them on an interactive map.
          </p>
        </div>
      </div>

      {/* Era Filter Section */}
      <section className="era-filter-section">
        <EraFilter selectedEra={selectedEra} onEraChange={handleEraChange} />
      </section>

      {/* Time Slider */}
      <section className="slider-section">
        <TimeMachineSlider />
      </section>

      {/* Timeline of Events */}
      <section className="timeline-section">
        <h2>📜 Timeline of Events</h2>
        <Timeline events={filteredEvents} />
      </section>

      {/* Map View */}
      <section className="map-section">
        <h2>🗺️ Interactive Global Map</h2>
        <p className="map-desc">Each event is pinned geographically to enhance your exploration!</p>
        <MapView events={filteredEvents} />
      </section>

      {/* Fun Facts */}
      <section className="fun-facts-section">
        <FunFacts />
      </section>

      {/* Footer */}
      <section className="footer">
        <p>Made with ❤️ by Satyam Kumar Mishra • © 2025 TimeTravel UI</p>
      </section>
    </div>
  );
};

export default Home;
