import React, { useState, useEffect } from 'react';
import './App.css';
// Minimal redesign: components replaced with a streamlined single-page layout

function App() {
  const [resumeAvailable, setResumeAvailable] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!cancelled && res.ok) setResumeAvailable(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const headerStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(17,17,17,0.45) 0%, rgba(17,17,17,0.25) 100%), url(${process.env.PUBLIC_URL}/header-background.jpg)`,
  };

  return (
    <div className="minimal-app">
      <header className="site-header" style={headerStyle}>
        <div className="container">
          <h1 className="brand">Maxwell Conway</h1>
          <p className="tagline">Developer</p>
        </div>
      </header>

      <main className="container site-main">
        <div className="content-wrapper">
          <section className="cards">
            <a
              className="card card-green"
              href="https://music.maxconway.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title">music.maxconway.com</div>
              <div className="card-sub">React music player</div>
            </a>

            <a
              className="card card-green"
              href="https://stream.maxconway.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title">stream.maxconway.com</div>
              <div className="card-sub">Netflix-style streaming (WIP)</div>
            </a>

            <a
              className="card card-green"
              href="https://screengrab.maxconway.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title">screengrab.maxconway.com</div>
              <div className="card-sub">Random movie screenshots</div>
            </a>

            <a
              className="card card-green"
              href="https://eldenring.maxconway.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title">eldenring.maxconway.com</div>
              <div className="card-sub">Elden Ring weapons & spells</div>
            </a>

            <a
              className="card card-green"
              href="https://gamernet.maxconway.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title">gamernet.maxconway.com</div>
              <div className="card-sub">Gaming social network</div>
            </a>

            <a
              className="card card-green"
              href="https://stemtool.maxconway.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title">stemtool.maxconway.com</div>
              <div className="card-sub">AI music stem separation</div>
            </a>
          </section>

          <section className="resume-section">
            <h2 className="section-title">Resume</h2>
            {resumeAvailable ? (
              <div className="resume-box">
                <div className="resume-toolbar">
                  <button
                    type="button"
                    className="btn btn-outline"
                    aria-expanded={showPreview}
                    onClick={() => setShowPreview((v) => !v)}
                  >
                    {showPreview ? 'Hide Preview' : 'Preview Inline'}
                  </button>
                  <div className="resume-actions">
                    <a className="btn btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">
                      Open in new tab
                    </a>
                    <a className="btn download-btn" href="/resume.pdf" download>
                      Download PDF
                    </a>
                  </div>
                </div>

                {showPreview && (
                  <div className="resume-preview">
                    <iframe
                      className="pdf-frame"
                      title="Resume PDF Preview"
                      src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
                    />
                    <div className="pdf-fallback">
                      If the preview doesn't display, use "Open in new tab".
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="resume-box resume-placeholder">
                <p>Place your resume file at <code>public/resume.pdf</code> to display it here.</p>
              </div>
            )}
          </section>

          <section className="contact-section">
            <h2 className="section-title">Contact</h2>
            <div className="contact-list">
              <div className="contact-item">
                <span className="label">Email</span>
                <a href="mailto:maxconway23@gmail.com">maxconway23@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="label">Location</span>
                <span>Atlanta, GA</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>  Maxwell Conway</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
