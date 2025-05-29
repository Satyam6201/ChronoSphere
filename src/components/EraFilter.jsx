import React from 'react';

const eras = ['All', 'Ancient', 'Medieval', 'Modern', 'Space Age', 'Future'];

const EraFilter = ({ onEraChange, selectedEra }) => {
  return (
    <div className="era-filter">
      {eras.map((era) => (
        <button
          key={era}
          onClick={() => onEraChange(era)}
          className={selectedEra === era ? 'active' : ''}
        >
          {era}
        </button>
      ))}
    </div>
  );
};

export default EraFilter;
