import React from 'react';

const TimeMachineSlider = () => {
  return (
    <div className="time-slider">
      <input type="range" min="0" max="2500" step="50" />
      <div className="slider-label">Use slider to jump in time</div>
    </div>
  );
};

export default TimeMachineSlider;
