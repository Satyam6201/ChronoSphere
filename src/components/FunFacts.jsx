import React, { useState, useEffect, useRef } from 'react';
import '../styles/FunFacts.css';

const facts = [
  "🧯 The Great Fire of London lasted four days in 1666.",
  "🐇 Napoleon was once attacked by a horde of rabbits.",
  "🧴 Ancient Romans used urine to bleach clothes.",
  "🏛️ Oxford University is older than the Aztec Empire.",
  "⚔️ Genghis Khan's empire was larger than the Roman Empire.",
  "🚀 The first email was sent in 1971 by Ray Tomlinson.",
  "🧬 DNA was discovered in 1869, long before its role was understood.",
  "📜 The Library of Alexandria was one of the largest in the ancient world.",
  "🕯️ The shortest war in history lasted only 38 minutes (Anglo-Zanzibar War).",
  "🌍 Maps used to put Jerusalem at the center of the world in medieval times.",
  "⏳ Cleopatra lived closer in time to the moon landing than to the Great Pyramid's construction.",
];

const FunFacts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [likes, setLikes] = useState(Array(facts.length).fill(0));
  const [theme, setTheme] = useState('dark');
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Reset fade effect on fact change
    setFade(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setFade(true), 100);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const getRandomFact = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
  };

  const copyFact = () => {
    navigator.clipboard.writeText(facts[currentIndex]);
    alert('Fact copied to clipboard!');
  };

  const addLike = () => {
    setLikes((prev) => {
      const updated = [...prev];
      updated[currentIndex]++;
      return updated;
    });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      getRandomFact();
    }
  };

  return (
    <div
      className={`fun-facts-card ${theme}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-live="polite"
    >
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle dark/light theme"
      >
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <h2 className="fun-title">🧠 Fun Historical Fact</h2>

      <p className={`fun-fact-text ${fade ? 'fade-in' : 'fade-out'}`}>
        {facts[currentIndex]}
      </p>

      <div className="fun-fact-controls">
        <button className="fun-fact-btn" onClick={getRandomFact} aria-label="Show another fact">
          Show Another Fact
        </button>
        <button className="fun-fact-btn" onClick={copyFact} aria-label="Copy fact to clipboard">
          📋 Copy Fact
        </button>
        <button
          className="fun-fact-btn like-btn"
          onClick={addLike}
          aria-label="Like this fact"
        >
          ❤️ Like ({likes[currentIndex]})
        </button>
      </div>

      <div className="fact-progress">
        Facts viewed: {currentIndex + 1} / {facts.length}
      </div>
    </div>
  );
};

export default FunFacts;
