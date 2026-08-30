import React, { useState } from 'react';

export default function HeroLanding({ onGetStarted, openModule }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const streamPills = [
    'Aptitude Quiz',
    'Stream Recommendation',
    'Career Roadmap',
    'Skill Matching',
    'Personality Matrix',
  ];

  const opportunityPills = [
    'College Discovery',
    'Scholarship Radar 2026',
    'Open Source Books',
    'Cutoff Predictor',
  ];

  const handlePillClick = (pill) => {
    setSelectedTag(pill === selectedTag ? null : pill);
    if (pill === 'Aptitude Quiz' || pill === 'Stream Recommendation') {
      openModule('quiz');
    } else if (pill === 'College Discovery' || pill === 'Cutoff Predictor') {
      openModule('colleges');
    } else if (pill === 'Scholarship Radar 2026') {
      openModule('scholarships');
    }
  };

  return (
    <main className="hero-section">
      {/* Left Column */}
      <section className="hero-left">
        <p className="kicker">EVOLVIA 24 CAREER LAB</p>
        
        <h1 className="headline">
          Platform where<br />
          Potential meets<br />
          Career<br />
          Intelligence
        </h1>

        <p className="subheadline">
          A Perfect Platform to find a calm, focused and deeply understanding approach to career choices, stream selection and academic discovery.
        </p>

        {/* Section 1: Stream Discovery */}
        <div className="feature-group">
          <h2 className="feature-group-title">
            Career & Stream Finder 🚀
          </h2>
          <div className="pills-container">
            {streamPills.map((pill) => (
              <button
                key={pill}
                className={`pill ${selectedTag === pill ? 'active' : ''}`}
                onClick={() => handlePillClick(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Section 2: Opportunity Matrix */}
        <div className="feature-group">
          <h2 className="feature-group-title">
            Opportunity & Resources Matrix 🎯
          </h2>
          <div className="pills-container">
            {opportunityPills.map((pill) => (
              <button
                key={pill}
                className={`pill ${selectedTag === pill ? 'active' : ''}`}
                onClick={() => handlePillClick(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="action-buttons">
          <button 
            className="btn-primary"
            onClick={onGetStarted}
          >
            Let's Get Started
          </button>
          <button 
            className="btn-secondary"
            onClick={() => openModule('mentorship')}
          >
            1:1 Guidance & Support
          </button>
        </div>
      </section>

      {/* Right Column: Visual Mockup */}
      <section className="hero-right" aria-label="Evolvia Intelligence Preview">
        <div className="canvas-card-wrapper" onClick={onGetStarted} style={{ cursor: 'pointer' }}>
          {/* Ambient aesthetic dots */}
          <span className="ambient-dot dot-1"></span>
          <span className="ambient-dot dot-2"></span>
          <span className="ambient-dot dot-3"></span>
          <span className="ambient-dot dot-4"></span>
          <span className="ambient-dot dot-5"></span>

          {/* Overlapping Card 1 (Top Left) */}
          <div className="floating-card card-top">
            <div className="card-label">
              OPTIMIZED AND CURATED FOR CAREER DECISIONS
            </div>
            <div className="card-stat">
              50,000+
            </div>
            <p className="card-desc">
              Structured stream, scholarship & college evaluations.
            </p>
          </div>

          {/* Overlapping Card 2 (Bottom Right) */}
          <div className="floating-card card-bottom">
            <div className="card-label">
              EVOLVIA AI V2.4
            </div>
            <div className="card-badge-status">
              Now Guiding
            </div>
            <p className="card-highlight-text">
              Personalized stream assessment & open-source knowledge repository.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
