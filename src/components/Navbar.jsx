import React from 'react';
import { Compass, Sparkles, BookOpen, GraduationCap, Users } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, openModule }) {
  return (
    <header className="navbar">
      <div 
        className="logo" 
        onClick={() => setCurrentView('landing')}
        style={{ cursor: 'pointer' }}
      >
        <span>Evolvia</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <button 
              className={`nav-link-btn ${currentView === 'landing' ? 'active' : ''}`}
              onClick={() => setCurrentView('landing')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={`nav-link-btn ${currentView === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentView('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              className="nav-link-btn"
              onClick={() => {
                setCurrentView('dashboard');
                openModule('quiz');
              }}
            >
              Stream Quiz
            </button>
          </li>
          <li>
            <button 
              className="nav-link-btn"
              onClick={() => {
                setCurrentView('dashboard');
                openModule('colleges');
              }}
            >
              Colleges
            </button>
          </li>
          <li>
            <button 
              className="nav-link-btn"
              onClick={() => {
                setCurrentView('dashboard');
                openModule('scholarships');
              }}
            >
              Scholarships
            </button>
          </li>
          <li>
            <button 
              className="nav-link-btn"
              onClick={() => {
                setCurrentView('dashboard');
                openModule('mentorship');
              }}
            >
              1:1 Guidance
            </button>
          </li>
        </ul>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {currentView === 'landing' ? (
          <button 
            className="nav-cta"
            onClick={() => setCurrentView('dashboard')}
          >
            Try Evolvia
          </button>
        ) : (
          <button 
            className="nav-cta secondary"
            onClick={() => setCurrentView('landing')}
          >
            Back to Home
          </button>
        )}
      </div>
    </header>
  );
}
