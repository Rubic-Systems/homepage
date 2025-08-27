import { useEffect } from 'react';
import GeometricPattern from '../components/GeometricPattern';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/jotwell.css';

export const Jotwell = () => {
  const { theme, toggleTheme } = useTheme();
  
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
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          )}
        </button>
        <div className="container">
          <div className="jotwell-hero-content">
            <div className="app-icon">
              <div className="app-icon-placeholder">J</div>
            </div>
            <h1 className="jotwell-title">Jotwell</h1>
            <p className="jotwell-tagline">Transform PDFs into Interactive Learning Experiences</p>
            <p className="jotwell-description">
              The ultimate PDF annotation app designed for the Apple ecosystem. 
              Draw, highlight, and take notes with AI-powered study tools that help you 
              learn faster and retain more.
            </p>
            <button className="app-store-button" onClick={handleAppStoreClick}>
              <span className="button-text">Coming Soon</span>
            </button>
          </div>
        </div>
      </section>

      {/* Primary Features - Alternating Sections */}
      <section className="jotwell-primary-features">
        <div className="container">
          <h2>Powerful Features for Modern Learning</h2>
          
          {/* Core Annotation Features */}
          <div className="feature-alternating">
            <div className="feature-content">
              <div className="feature-icon-large">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3>Natural Annotation with Apple Pencil</h3>
              <p>Experience the most responsive PDF annotation on iPad. Our PencilKit integration delivers pixel-perfect precision with pressure sensitivity and palm rejection.</p>
              <ul className="feature-list">
                <li>Multi-layer annotations with full undo/redo history</li>
                <li>Highlight, draw, add sticky notes and text comments</li>
                <li>Freehand drawings, shapes, and arrows</li>
                <li>Offline-first design for use anywhere</li>
                <li>Batch operations for efficient document management</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="annotation-demo">
                <div className="textbook-page">
                  <div className="text-line"></div>
                  
                  {/* Text line with wavy underline */}
                  <div className="text-line with-underline">
                    <svg className="wavy-underline drawing-2" viewBox="0 0 50 20" preserveAspectRatio="none">
                      <path 
                        d="M 5,15 Q 10,12 15,15 T 25,15 T 35,15 T 45,15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="underline-path"
                      />
                    </svg>
                  </div>
                  
                  {/* Text line with star in margin */}
                  <div className="text-line short with-star">
                    <svg className="star-mark drawing-3" viewBox="0 0 30 30">
                      <path 
                        d="M 15,7 L 15,23"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="star-line-1"
                      />
                      <path 
                        d="M 7,11 L 23,19"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="star-line-2"
                      />
                      <path 
                        d="M 23,11 L 7,19"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="star-line-3"
                      />
                      <path 
                        d="M 8,14 L 22,14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="star-line-4"
                      />
                      <path 
                        d="M 10,20 L 20,10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="star-line-5"
                      />
                    </svg>
                  </div>
                  
                  <div className="textbook-image-section">
                    <div className="textbook-image"></div>
                    <div className="image-text-wrap">
                      <div className="text-line"></div>
                      <div className="text-line"></div>
                      <div className="text-line short"></div>
                    </div>
                  </div>
                  
                  {/* Text line with circle annotation */}
                  <div className="text-line with-circle">
                    <svg className="hand-drawn-circle drawing-1" viewBox="0 0 120 30" preserveAspectRatio="none">
                      <path 
                        d="M 10,15 Q 15,8 30,7 T 60,8 Q 85,9 95,15 Q 96,20 85,23 Q 70,24 50,23 T 15,22 Q 8,19 10,15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="circle-path"
                      />
                    </svg>
                  </div>
                  
                  {/* Text line with exclamation */}
                  <div className="text-line with-exclamation">
                    <svg className="exclamation-mark drawing-4" viewBox="0 0 20 40">
                      <path 
                        d="M 9.5,5 Q 10,13 10.5,22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="exclamation-line"
                      />
                      <circle 
                        cx="10" 
                        cy="29" 
                        r="2"
                        fill="currentColor"
                        className="exclamation-dot"
                      />
                    </svg>
                  </div>
                  
                  <div className="textbook-figure">
                    <div className="figure-box"></div>
                    <div className="caption-line"></div>
                  </div>
                  
                  <div className="text-line"></div>
                  
                  {/* Bottom area with smiley */}
                  <div className="text-line short">
                    <svg className="smiley-face drawing-5" viewBox="0 0 40 40">
                      <path d="M 5.5,20 Q 5,10 14,6 T 35,20 Q 35,30 26,34 T 5.5,20" fill="none" stroke="currentColor" strokeWidth="2" className="smiley-circle"/>
                      <circle cx="14" cy="15" r="2" fill="currentColor" className="smiley-eye-left"/>
                      <circle cx="26" cy="15" r="2" fill="currentColor" className="smiley-eye-right"/>
                      <path d="M 12,24 Q 18,31 28,23.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="smiley-mouth"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Powered Study Tools */}
          <div className="feature-alternating reverse">
            <div className="feature-content">
              <div className="feature-icon-large">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
                </svg>
              </div>
              <h3>AI-Powered Study Assistant</h3>
              <p>Transform your annotations into powerful learning tools with our integrated AI features. Generate summaries, quizzes, and flashcards from your notes instantly.</p>
              <ul className="feature-list">
                <li>Generate comprehensive summaries from highlights</li>
                <li>Create interactive quizzes from your materials</li>
                <li>Automatic flashcard generation for review</li>
                <li>Multiple summary types: brief, detailed, key points</li>
                <li>Smart content insights and learning suggestions</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="ai-showcase">
                <div className="ai-demo-card">
                  <div className="ai-demo-header">AI Summary</div>
                  <div className="ai-demo-content">
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line short"></div>
                    <div className="skeleton-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document Organization */}
          <div className="feature-alternating">
            <div className="feature-content">
              <div className="feature-icon-large">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Smart Document Organization</h3>
              <p>Keep your learning materials perfectly organized with our intuitive folder system and powerful search capabilities. Find any document or annotation instantly.</p>
              <ul className="feature-list">
                <li>Nested folder hierarchy with unlimited depth</li>
                <li>Custom tags and smart collections</li>
                <li>Lightning-fast search across all documents</li>
                <li>Visual thumbnails for quick navigation</li>
                <li>Sort by date, name, or custom order</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="folder-demo">
                <div className="folder-structure">
                  <div className="folder-item">📁 Course Materials</div>
                  <div className="folder-item nested">📁 Physics 101</div>
                  <div className="folder-item nested">📁 Chemistry</div>
                  <div className="folder-item">📁 Research Papers</div>
                  <div className="folder-item">📁 Personal Notes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Features Grid */}
      <section className="jotwell-secondary-features">
        <div className="container">
          <div className="features-grid-compact">
            <div className="jotwell-feature-card">
              <div className="jotwell-feature-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h4>Document Templates</h4>
              <p>Start with pre-designed templates for note-taking, Cornell notes, and study guides to boost your productivity.</p>
            </div>
            <div className="jotwell-feature-card">
              <div className="jotwell-feature-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                </svg>
              </div>
              <h4>Technical Excellence</h4>
              <p>Built with SwiftData for reliability, optimized for large PDFs, with native performance you can feel.</p>
            </div>
            <div className="jotwell-feature-card">
              <div className="jotwell-feature-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h4>Privacy First</h4>
              <p>Your documents stay yours. All data is stored locally on your device with optional iCloud backup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="jotwell-how-it-works">
        <div className="container">
          <h2>How Jotwell Works</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <h3>Import</h3>
              <p>Add PDFs from Files, email, or any app</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3>Annotate</h3>
              <p>Mark up with Apple Pencil or touch</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3>Enhance</h3>
              <p>Generate summaries and study materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="jotwell-use-cases">
        <div className="container">
          <h2>Perfect For Every Learner</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <div className="use-case-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>Students</h3>
              <p>Annotate lecture slides directly, generate study guides from your highlights, and ace your exams with AI-generated practice questions.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3>Professionals</h3>
              <p>Review documents efficiently with reusable annotation templates and batch process multiple files for maximum productivity.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11H3"/>
                  <path d="M21 11h-6"/>
                  <path d="M12 2v6"/>
                  <path d="M12 14v8"/>
                  <circle cx="12" cy="11" r="3"/>
                </svg>
              </div>
              <h3>Researchers</h3>
              <p>Organize your entire research library with smart collections, powerful search, and AI-powered insights from your annotations.</p>
            </div>
            <div className="use-case">
              <div className="use-case-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                </svg>
              </div>
              <h3>Educators</h3>
              <p>Create annotated materials for students, build interactive study guides, and export beautifully marked-up PDFs for distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="jotwell-testimonials">
        <div className="container">
          <h2>What Beta Users Are Saying</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-quote">
                "Jotwell transformed how I study. The AI summaries save me hours of review time, and the Apple Pencil integration feels completely natural."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MS</div>
                <div className="author-info">
                  <div className="author-name">Maria S.</div>
                  <div className="author-role">Medical Student</div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-quote">
                "The organization features are incredible. I can finally keep all my research papers in one place and find exactly what I need instantly."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JL</div>
                <div className="author-info">
                  <div className="author-name">James L.</div>
                  <div className="author-role">PhD Candidate</div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-quote">
                "Finally, a PDF app that understands how professionals actually work. The batch operations and templates are game-changers."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <div className="author-info">
                  <div className="author-name">Alex K.</div>
                  <div className="author-role">Consultant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="jotwell-cta">
        <div className="container">
          <h2>Be Among the First to Experience Jotwell</h2>
          <p>Sign up for early access and shape the future of digital learning</p>
          <button className="app-store-button-large" onClick={handleAppStoreClick}>
            <span className="button-text">Join Beta Waitlist</span>
          </button>
          <p className="requirements">
            Requires iOS 17.0 or later • Optimized for iPad with Apple Pencil
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
            <a href="/privacy">Privacy Policy</a> • <a href="/terms">Terms of Service</a> • 
            <a href="/" className="rubic-logo-link" aria-label="Back to Rubic Systems">
              A product by Rubic Systems, LLC.
              <img 
                src="/RS_logo-nobg.png" 
                alt="Rubic Systems Logo" 
                className="rubic-footer-logo"
              />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};