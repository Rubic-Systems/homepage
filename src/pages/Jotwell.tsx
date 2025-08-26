import { useEffect } from 'react';
import GeometricPattern from '../components/GeometricPattern';

export const Jotwell = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleAppStoreClick = () => {
    // Replace with actual App Store URL when available
    window.open('https://apps.apple.com/app/jotwell', '_blank');
  };

  return (
    <div className="jotwell-page">
      {/* Hero Section */}
      <section className="jotwell-hero">
        <GeometricPattern type="dots" opacity={0.1} />
        <div className="container">
          <div className="jotwell-hero-content">
            <div className="app-icon">
              <div className="app-icon-placeholder">J</div>
            </div>
            <h1 className="jotwell-title">Jotwell</h1>
            <p className="jotwell-tagline">Smart PDF Annotations for iPad & iPhone</p>
            <p className="jotwell-description">
              Transform your PDFs into interactive notebooks. Draw, highlight, and take notes 
              directly on documents with Apple Pencil support and AI-powered learning tools.
            </p>
            <button className="app-store-button" onClick={handleAppStoreClick}>
              <svg className="app-store-logo" viewBox="0 0 120 40" width="120" height="40">
                <rect width="120" height="40" rx="6" fill="black"/>
                <text x="60" y="25" textAnchor="middle" fill="white" fontSize="14" fontFamily="system-ui">
                  Download on the App Store
                </text>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="jotwell-features">
        <div className="container">
          <h2>Designed for Apple Devices</h2>
          <div className="jotwell-features-grid">
            <div className="jotwell-feature">
              <div className="jotwell-feature-icon">✏️</div>
              <h3>Apple Pencil Support</h3>
              <p>Natural writing experience with full pressure sensitivity and palm rejection</p>
            </div>
            <div className="jotwell-feature">
              <div className="jotwell-feature-icon">📚</div>
              <h3>Smart Organization</h3>
              <p>Organize documents in folders, tag for easy search, and sync across all devices</p>
            </div>
            <div className="jotwell-feature">
              <div className="jotwell-feature-icon">🎯</div>
              <h3>Powerful Annotations</h3>
              <p>Highlight, draw, add sticky notes, and record audio notes that sync with your annotations</p>
            </div>
            <div className="jotwell-feature">
              <div className="jotwell-feature-icon">🤖</div>
              <h3>AI-Powered Tools</h3>
              <p>Generate summaries, create study questions, and get intelligent insights from your notes</p>
            </div>
            <div className="jotwell-feature">
              <div className="jotwell-feature-icon">👥</div>
              <h3>Social Learning</h3>
              <p>Share annotations, see popular highlights, and collaborate with fellow learners</p>
            </div>
            <div className="jotwell-feature">
              <div className="jotwell-feature-icon">🔒</div>
              <h3>Privacy First</h3>
              <p>Your documents are encrypted and private by default. You control what you share</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="jotwell-use-cases">
        <div className="container">
          <h2>Perfect For</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <h3>📚 Students</h3>
              <p>Take notes directly on lecture slides and textbooks</p>
            </div>
            <div className="use-case">
              <h3>💼 Professionals</h3>
              <p>Review and mark up business documents efficiently</p>
            </div>
            <div className="use-case">
              <h3>🔬 Researchers</h3>
              <p>Annotate academic papers and organize research</p>
            </div>
            <div className="use-case">
              <h3>📖 Readers</h3>
              <p>Highlight and note important passages in ebooks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="jotwell-cta">
        <div className="container">
          <h2>Experience the Future of Digital Annotation</h2>
          <p>Available now on the App Store for iPhone and iPad</p>
          <button className="app-store-button-large" onClick={handleAppStoreClick}>
            <svg className="app-store-logo" viewBox="0 0 140 48" width="140" height="48">
              <rect width="140" height="48" rx="8" fill="black"/>
              <text x="70" y="28" textAnchor="middle" fill="white" fontSize="16" fontFamily="system-ui">
                Download on the App Store
              </text>
            </svg>
          </button>
          <p className="requirements">
            Requires iOS 15.0 or later • Optimized for Apple Pencil
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="jotwell-footer">
        <div className="container">
          <p>
            Questions? Contact us at{' '}
            <a href="mailto:support@jotwell.app">support@jotwell.app</a>
          </p>
          <p className="footer-links">
            <a href="/privacy">Privacy Policy</a> • <a href="/terms">Terms of Service</a>
          </p>
        </div>
      </section>
    </div>
  );
};