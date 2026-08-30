import React, { useState } from 'react';
import { 
  Compass, 
  GraduationCap, 
  Award, 
  Users, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Star, 
  BookOpen, 
  Sparkles, 
  X, 
  ChevronRight,
  Filter,
  Check
} from 'lucide-react';
import { quizQuestions, streamResultsData, collegesData, scholarshipsData, counselorsData } from '../data/mockData';

export default function Dashboard({ activeModal, setActiveModal }) {
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScores, setUserScores] = useState({ pcm: 0, pcb: 0, comm: 0, arts: 0 });
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [topStreamResult, setTopStreamResult] = useState(null);

  // College Explorer State
  const [collegeSearch, setCollegeSearch] = useState('');
  const [selectedStreamFilter, setSelectedStreamFilter] = useState('All');
  const [selectedCollegeModal, setSelectedCollegeModal] = useState(null);

  // Scholarship State
  const [scholarshipSearch, setScholarshipSearch] = useState('');
  const [scholarshipCategoryFilter, setScholarshipCategoryFilter] = useState('All');
  const [appliedScholarships, setAppliedScholarships] = useState([]);

  // Mentorship State
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [studentNote, setStudentNote] = useState('');

  // Handle Quiz Option Selection
  const handleAnswerQuiz = (option) => {
    const newScores = {
      pcm: userScores.pcm + option.score.pcm,
      pcb: userScores.pcb + option.score.pcb,
      comm: userScores.comm + option.score.comm,
      arts: userScores.arts + option.score.arts,
    };
    setUserScores(newScores);

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate top result
      let maxScore = -1;
      let topKey = 'pcm';
      Object.entries(newScores).forEach(([key, val]) => {
        if (val > maxScore) {
          maxScore = val;
          topKey = key;
        }
      });
      setTopStreamResult(streamResultsData[topKey]);
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserScores({ pcm: 0, pcb: 0, comm: 0, arts: 0 });
    setQuizCompleted(false);
    setTopStreamResult(null);
  };

  // Filter Colleges
  const filteredColleges = collegesData.filter((col) => {
    const matchesSearch = col.name.toLowerCase().includes(collegeSearch.toLowerCase()) || 
                          col.location.toLowerCase().includes(collegeSearch.toLowerCase());
    const matchesStream = selectedStreamFilter === 'All' || col.stream.toLowerCase().includes(selectedStreamFilter.toLowerCase());
    return matchesSearch && matchesStream;
  });

  // Filter Scholarships
  const filteredScholarships = scholarshipsData.filter((sch) => {
    const matchesSearch = sch.name.toLowerCase().includes(scholarshipSearch.toLowerCase()) ||
                          sch.stream.toLowerCase().includes(scholarshipSearch.toLowerCase());
    const matchesCategory = scholarshipCategoryFilter === 'All' || 
                            sch.category.toLowerCase().includes(scholarshipCategoryFilter.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleApplyScholarship = (id) => {
    if (!appliedScholarships.includes(id)) {
      setAppliedScholarships([...appliedScholarships, id]);
    }
  };

  const handleBookSession = (e) => {
    e.preventDefault();
    if (selectedCounselor && selectedSlot) {
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Dashboard Top Header */}
      <div className="dashboard-header">
        <div className="dashboard-kicker">EVOLVIA CAREER INTELLIGENCE PORTAL</div>
        <h1 className="dashboard-title">Your Career Launchpad</h1>
        <p className="dashboard-subtitle">
          Assess your strengths, explore top colleges, claim scholarships, and get 1-on-1 personalized mentorship.
        </p>
      </div>

      {/* 4 Main Core Cards Grid */}
      <div className="dashboard-cards-grid">
        {/* Card 1: Attempt Quiz */}
        <div 
          className="dashboard-action-card card-quiz"
          onClick={() => setActiveModal('quiz')}
        >
          <div className="card-top-row">
            <div className="card-icon-bubble">
              <Compass size={24} />
            </div>
            <span className="card-badge">AI Assessment</span>
          </div>
          <h3 className="card-heading">Attempt Stream Quiz</h3>
          <p className="card-body-text">
            Take a 5-question psychometric aptitude test to discover whether Science (PCM/PCB), Commerce, or Humanities fits your passions best.
          </p>
          <div className="card-feature-pills">
            <span>5 Min Quiz</span>
            <span>Aptitude Match</span>
            <span>Career Roadmaps</span>
          </div>
          <button className="card-action-btn">
            {quizCompleted ? 'View Your Result' : 'Start Assessment'} <ArrowRight size={16} />
          </button>
        </div>

        {/* Card 2: College Info */}
        <div 
          className="dashboard-action-card card-college"
          onClick={() => setActiveModal('colleges')}
        >
          <div className="card-top-row">
            <div className="card-icon-bubble">
              <GraduationCap size={24} />
            </div>
            <span className="card-badge">500+ Institutes</span>
          </div>
          <h3 className="card-heading">College Directory & Cutoffs</h3>
          <p className="card-body-text">
            Search top universities, NIRF rankings, placement records, entrance exam cutoffs, and campus highlights across all streams.
          </p>
          <div className="card-feature-pills">
            <span>NIRF Rankings</span>
            <span>Cutoff Analyzer</span>
            <span>Placement Stats</span>
          </div>
          <button className="card-action-btn">
            Explore Colleges <ArrowRight size={16} />
          </button>
        </div>

        {/* Card 3: Scholarship Info */}
        <div 
          className="dashboard-action-card card-scholarship"
          onClick={() => setActiveModal('scholarships')}
        >
          <div className="card-top-row">
            <div className="card-icon-bubble">
              <Award size={24} />
            </div>
            <span className="card-badge">Active 2026</span>
          </div>
          <h3 className="card-heading">Scholarship Radar</h3>
          <p className="card-body-text">
            Browse verified merit-based and need-based scholarships worth up to ₹2,00,000 to fund your higher education.
          </p>
          <div className="card-feature-pills">
            <span>Merit & Means</span>
            <span>Eligibility Filter</span>
            <span>Direct Apply</span>
          </div>
          <button className="card-action-btn">
            View Scholarships <ArrowRight size={16} />
          </button>
        </div>

        {/* Card 4: 1-on-1 Guidance */}
        <div 
          className="dashboard-action-card card-mentorship"
          onClick={() => setActiveModal('mentorship')}
        >
          <div className="card-top-row">
            <div className="card-icon-bubble">
              <Users size={24} />
            </div>
            <span className="card-badge">Top Mentors</span>
          </div>
          <h3 className="card-heading">1-to-1 Career Guidance</h3>
          <p className="card-body-text">
            Book a dedicated 30-minute 1-on-1 strategy call with verified counselors from IIT, IIM, BITS & NID to resolve your career doubts.
          </p>
          <div className="card-feature-pills">
            <span>Verified Experts</span>
            <span>Custom Roadmap</span>
            <span>Video Call</span>
          </div>
          <button className="card-action-btn">
            Book 1:1 Session <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Quick Resource Banner */}
      <div className="resource-strip-card">
        <div className="resource-strip-left">
          <BookOpen size={24} className="resource-icon" />
          <div>
            <h4>Looking for Open-Source Books & Self-Paced Curriculums?</h4>
            <p>Access our curated index of free, high-quality textbooks, research papers, and beginner coding roadmaps.</p>
          </div>
        </div>
        <button 
          className="btn-secondary"
          onClick={() => {
            alert('Open Source Library: Over 120+ free textbooks & study guides in Physics, Calculus, Economics, and Design are indexed in Evolvia.');
          }}
        >
          Browse Open Library
        </button>
      </div>

      {/* ================= MODAL: ATTEMPT STREAM QUIZ ================= */}
      {activeModal === 'quiz' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-dialog-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
              <X size={18} />
            </button>

            {!quizCompleted ? (
              <div className="quiz-container">
                <div className="quiz-header-bar">
                  <span className="quiz-step-badge">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                  <div className="quiz-progress-track">
                    <div 
                      className="quiz-progress-fill" 
                      style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h2 className="quiz-question-title">
                  {quizQuestions[currentQuestionIndex].question}
                </h2>

                <div className="quiz-options-list">
                  {quizQuestions[currentQuestionIndex].options.map((option, idx) => (
                    <button
                      key={idx}
                      className="quiz-choice-btn"
                      onClick={() => handleAnswerQuiz(option)}
                    >
                      <div className="choice-number">{String.fromCharCode(65 + idx)}</div>
                      <div className="choice-text">{option.text}</div>
                      <ChevronRight size={18} className="choice-arrow" />
                    </button>
                  ))}
                </div>

                <div className="quiz-footer-hint">
                  <span>💡 Tip: Choose the answer that reflects what you naturally enjoy, not what others expect.</span>
                </div>
              </div>
            ) : (
              /* Quiz Result Screen */
              <div className="quiz-result-container">
                <div className="result-header">
                  <div className="result-icon-celebrate">🎉</div>
                  <span className="kicker">ASSESSMENT COMPLETE</span>
                  <h2 className="result-stream-title">{topStreamResult.title}</h2>
                  <div className="result-match-pill">
                    <Sparkles size={14} /> {topStreamResult.matchScore} Compatibility • {topStreamResult.badge}
                  </div>
                  <p className="result-description">{topStreamResult.description}</p>
                </div>

                <div className="result-grid">
                  <div className="result-box">
                    <h4>🎯 Top Career Pathways</h4>
                    <ul>
                      {topStreamResult.topCareers.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="result-box">
                    <h4>🎓 Recommended Degrees</h4>
                    <ul>
                      {topStreamResult.recommendedDegrees.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="result-box">
                    <h4>🏛️ Target Institutes</h4>
                    <ul>
                      {topStreamResult.topInstitutes.map((inst, i) => (
                        <li key={i}>{inst}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="result-box">
                    <h4>📚 Curated Open Source Books</h4>
                    <ul>
                      {topStreamResult.books.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="result-actions">
                  <button className="btn-secondary" onClick={handleResetQuiz}>
                    Retake Quiz
                  </button>
                  <button 
                    className="btn-primary"
                    onClick={() => setActiveModal('mentorship')}
                  >
                    Discuss Result with a 1:1 Mentor
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= MODAL: COLLEGE EXPLORER ================= */}
      {activeModal === 'colleges' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-dialog-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
              <X size={18} />
            </button>

            <div className="modal-header-section">
              <span className="kicker">HIGHER EDUCATION DIRECTORY</span>
              <h2 className="modal-title-bold">Explore Top Colleges & Cutoffs</h2>
              <p className="modal-subtitle-text">Verified NIRF rankings, cutoff trends, fee breakdowns, and placement analytics.</p>
            </div>

            {/* Filter Bar */}
            <div className="explorer-controls">
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search college by name, city, or stream..."
                  value={collegeSearch}
                  onChange={(e) => setCollegeSearch(e.target.value)}
                  className="search-field"
                />
              </div>

              <div className="stream-filter-pills">
                {['All', 'Engineering', 'Medical', 'Commerce', 'Design'].map((stream) => (
                  <button
                    key={stream}
                    className={`filter-pill ${selectedStreamFilter === stream ? 'active' : ''}`}
                    onClick={() => setSelectedStreamFilter(stream)}
                  >
                    {stream}
                  </button>
                ))}
              </div>
            </div>

            {/* Colleges Grid */}
            <div className="items-cards-list">
              {filteredColleges.map((college) => (
                <div key={college.id} className="college-card-item">
                  <div className="college-header-row">
                    <div>
                      <span className="college-rank-badge">{college.nirfRank}</span>
                      <h3 className="college-name">{college.name}</h3>
                      <p className="college-location">📍 {college.location} • {college.stream}</p>
                    </div>
                    <span className="college-type-pill">{college.badge}</span>
                  </div>

                  <div className="college-stats-grid">
                    <div className="college-stat">
                      <span className="stat-label">Average Package</span>
                      <span className="stat-value">{college.avgPackage}</span>
                    </div>
                    <div className="college-stat">
                      <span className="stat-label">Cutoff Criteria</span>
                      <span className="stat-value">{college.cutoff}</span>
                    </div>
                    <div className="college-stat">
                      <span className="stat-label">Annual Fees</span>
                      <span className="stat-value">{college.fees}</span>
                    </div>
                  </div>

                  <div className="college-tags-row">
                    {college.tags.map((t, i) => (
                      <span key={i} className="college-mini-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}

              {filteredColleges.length === 0 && (
                <div className="empty-state">
                  <p>No colleges found matching "{collegeSearch}". Try a different search keyword.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: SCHOLARSHIPS RADAR ================= */}
      {activeModal === 'scholarships' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-dialog-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
              <X size={18} />
            </button>

            <div className="modal-header-section">
              <span className="kicker">FINANCIAL AID & FELLOWSHIPS</span>
              <h2 className="modal-title-bold">Scholarship Radar 2026</h2>
              <p className="modal-subtitle-text">Curated merit, need-based, and STEM scholarships for undergraduate and higher secondary students.</p>
            </div>

            {/* Category Filter */}
            <div className="explorer-controls">
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search scholarship name or stream..."
                  value={scholarshipSearch}
                  onChange={(e) => setScholarshipSearch(e.target.value)}
                  className="search-field"
                />
              </div>

              <div className="stream-filter-pills">
                {['All', 'Merit', 'Need-Based', 'STEM', 'Women in Tech'].map((cat) => (
                  <button
                    key={cat}
                    className={`filter-pill ${scholarshipCategoryFilter === cat ? 'active' : ''}`}
                    onClick={() => setScholarshipCategoryFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Scholarships List */}
            <div className="items-cards-list">
              {filteredScholarships.map((sch) => (
                <div key={sch.id} className="scholarship-card-item">
                  <div className="sch-top-row">
                    <div>
                      <span className="sch-category-badge">{sch.category}</span>
                      <h3 className="sch-name">{sch.name}</h3>
                      <p className="sch-stream">Target: {sch.stream}</p>
                    </div>
                    <div className="sch-grant-box">
                      <span className="sch-grant-label">Grant Amount</span>
                      <span className="sch-grant-value">{sch.grantAmount}</span>
                    </div>
                  </div>

                  <div className="sch-details-row">
                    <div className="sch-detail-item">
                      <span className="detail-label">Eligibility</span>
                      <span className="detail-val">{sch.eligibility}</span>
                    </div>
                    <div className="sch-detail-item">
                      <span className="detail-label">Application Deadline</span>
                      <span className="detail-val">⏳ {sch.deadline}</span>
                    </div>
                  </div>

                  <div className="sch-action-row">
                    <span className="status-indicator">● {sch.status}</span>
                    {appliedScholarships.includes(sch.id) ? (
                      <button className="applied-badge" disabled>
                        <Check size={14} /> Checklist Saved
                      </button>
                    ) : (
                      <button 
                        className="btn-primary mini"
                        onClick={() => handleApplyScholarship(sch.id)}
                      >
                        Apply / Save Guide
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: 1-ON-1 GUIDANCE ================= */}
      {activeModal === 'mentorship' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-dialog-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
              <X size={18} />
            </button>

            <div className="modal-header-section">
              <span className="kicker">EXPERT ADVISORY</span>
              <h2 className="modal-title-bold">Book 1:1 Career Guidance</h2>
              <p className="modal-subtitle-text">Connect for a private 30-minute consultation with vetted academic and industry advisors.</p>
            </div>

            {!bookingConfirmed ? (
              <div className="mentorship-booking-flow">
                <h3 className="section-subheading">Step 1: Select Your Counselor</h3>
                <div className="counselors-grid">
                  {counselorsData.map((counselor) => (
                    <div 
                      key={counselor.id}
                      className={`counselor-card ${selectedCounselor?.id === counselor.id ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedCounselor(counselor);
                        setSelectedSlot(counselor.availableSlots[0]);
                      }}
                    >
                      <div className="counselor-top">
                        <img src={counselor.avatar} alt={counselor.name} className="counselor-avatar" />
                        <div>
                          <h4 className="counselor-name">{counselor.name}</h4>
                          <p className="counselor-role">{counselor.role}</p>
                        </div>
                      </div>
                      <p className="counselor-creds">{counselor.credentials}</p>
                      <div className="counselor-meta">
                        <span>⭐ {counselor.rating}</span>
                        <span>• {counselor.experience}</span>
                      </div>
                      <div className="counselor-specialty">
                        🎯 {counselor.specialty}
                      </div>
                    </div>
                  ))}
                </div>

                {selectedCounselor && (
                  <div className="booking-details-form">
                    <h3 className="section-subheading">Step 2: Choose Date & Time Slot</h3>
                    <div className="slots-row">
                      {selectedCounselor.availableSlots.map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`slot-pill ${selectedSlot === slot ? 'active' : ''}`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          <Clock size={14} /> {slot}
                        </button>
                      ))}
                    </div>

                    <div className="form-group" style={{ marginTop: '1.25rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        What primary career question or stream choice would you like to discuss?
                      </label>
                      <textarea
                        rows={2}
                        className="custom-textarea"
                        placeholder="e.g. Confused between Computer Science (PCM) and Economics/Data Analytics..."
                        value={studentNote}
                        onChange={(e) => setStudentNote(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="booking-actions">
                      <button 
                        className="btn-primary" 
                        onClick={handleBookSession}
                        disabled={!selectedSlot}
                      >
                        Confirm 1:1 Strategy Call with {selectedCounselor.name}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Booking Confirmed State */
              <div className="booking-confirmed-card">
                <div className="confirmed-icon">
                  <CheckCircle2 size={48} color="#16A34A" />
                </div>
                <h3>1:1 Session Confirmed!</h3>
                <p className="confirmed-desc">
                  Your 30-minute 1-on-1 strategy call with <strong>{selectedCounselor?.name}</strong> is scheduled.
                </p>
                <div className="confirmed-details-box">
                  <div><strong>Slot:</strong> {selectedSlot}</div>
                  <div><strong>Platform:</strong> Google Meet (Link emailed to your registered ID)</div>
                  <div><strong>Counselor:</strong> {selectedCounselor?.role}</div>
                  {studentNote && <div><strong>Your Topic:</strong> "{studentNote}"</div>}
                </div>
                <button 
                  className="btn-primary"
                  onClick={() => {
                    setBookingConfirmed(false);
                    setActiveModal(null);
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
