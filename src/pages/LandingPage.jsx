import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <h1>CA Final Practice Platform</h1>
        <p>Master your CA Final exams with comprehensive practice questions from past papers</p>
      </div>

      <div className="subject-cards">
        <Link to="/indirect-tax" className="subject-card blue-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 5</div>
            <h2>Indirect Tax Laws</h2>
            <p>GST, Customs & Foreign Trade Policy</p>
            <div className="subject-stats">
              <span>25 MCQs</span>
              <span>•</span>
              <span>5 Case Studies</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>

        <Link to="/afm" className="subject-card orange-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 2</div>
            <h2>Advanced Financial Management</h2>
            <p>Portfolio, Derivatives & Foreign Exchange</p>
            <div className="subject-stats">
              <span>20 MCQs</span>
              <span>•</span>
              <span>3 Case Studies</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

