import { useEffect, useRef } from 'react';
import AboutUs from '../components/AboutUs';
import GeometricPattern from '../components/GeometricPattern';
import useScrollAnimation from '../hooks/useScrollAnimation';

export const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    // Add staggered animation to feature cards
    if (featuresVisible) {
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-in');
        }, index * 100);
      });
    }
  }, [featuresVisible]);

  useEffect(() => {
    // Animate hero on load
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('hero-animated');
      }
    }, 100);
  }, []);

  return (
    <div className="home-page">
      <section className="hero" ref={heroRef}>
        <GeometricPattern type="hexagon" opacity={0.15} />
        <div className="hero-content">
          <h1 className="hero-title">Transform Complex Data<br />Into Clear Solutions</h1>
          <p className="hero-description">
            We build custom analytics platforms, AI implementations, and data architectures 
            that turn your information challenges into competitive advantages.
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => window.location.href = 'mailto:contact@rubic.ltd'}>
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      <section 
        className={`features ${featuresVisible ? 'features-visible' : ''}`} 
        ref={featuresRef as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <h2 className="features-title">How We Help</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="5" y="5" width="30" height="30" stroke="var(--accent-blue-deep)" strokeWidth="2"/>
                  <rect x="10" y="10" width="20" height="20" fill="var(--accent-blue-deep)" opacity="0.2"/>
                  <rect x="15" y="15" width="10" height="10" fill="var(--accent-blue-deep)"/>
                </svg>
              </div>
              <h3>Custom Analytics Solutions</h3>
              <p>
                From OLAP cubes to real-time dashboards, we design and build analytics 
                platforms tailored to your specific business needs and data challenges.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <polygon points="20,5 35,15 35,25 20,35 5,25 5,15" stroke="var(--accent-blue-deep)" strokeWidth="2" fill="none"/>
                  <circle cx="20" cy="20" r="5" fill="var(--accent-blue-deep)"/>
                </svg>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>
                Deploy intelligent systems from chatbots to advanced drift detection. 
                We make AI practical and accessible for businesses of any size.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M10 20 L20 10 L30 20 L20 30 Z" stroke="var(--accent-blue-deep)" strokeWidth="2" fill="none"/>
                  <path d="M15 20 L20 15 L25 20 L20 25 Z" fill="var(--accent-blue-deep)" opacity="0.5"/>
                </svg>
              </div>
              <h3>Technical Consulting</h3>
              <p>
                Navigate complex architectural decisions with confidence. We provide expert 
                guidance on data engineering, system design, and technology selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach">
        <div className="container">
          <h2 className="approach-title">Our Approach</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="approach-number">01</div>
              <h3>Direct Partnership</h3>
              <p>As a boutique consultancy, you work directly with our founders—no layers of account managers or junior developers.</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">02</div>
              <h3>Rapid Iteration</h3>
              <p>Small team, big impact. We move fast, adapt quickly, and deliver working solutions in weeks, not months.</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">03</div>
              <h3>Clear Communication</h3>
              <p>Well-documented code, transparent project management, and regular updates keep you informed at every step.</p>
            </div>
            <div className="approach-item">
              <div className="approach-number">04</div>
              <h3>Modern Stack</h3>
              <p>Deep expertise in JavaScript ecosystems, cloud architectures, and cutting-edge development practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <h2 className="capabilities-title">Technical Capabilities</h2>
          <div className="capabilities-content">
            <div className="capability-category">
              <h4>Data & Analytics</h4>
              <ul>
                <li>OLAP cube design</li>
                <li>Real-time data pipelines</li>
                <li>Business intelligence dashboards</li>
                <li>Custom visualization tools</li>
              </ul>
            </div>
            <div className="capability-category">
              <h4>AI & Automation</h4>
              <ul>
                <li>ML model deployment</li>
                <li>Drift detection systems</li>
                <li>Natural language processing</li>
                <li>Intelligent chatbots</li>
              </ul>
            </div>
            <div className="capability-category">
              <h4>Engineering</h4>
              <ul>
                <li>System architecture design</li>
                <li>API development</li>
                <li>Database optimization</li>
                <li>Cloud infrastructure</li>
              </ul>
            </div>
            <div className="capability-category">
              <h4>Consulting</h4>
              <ul>
                <li>Technology assessment</li>
                <li>Solution architecture</li>
                <li>Best practices implementation</li>
                <li>Team augmentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div 
        className={`about-wrapper ${aboutVisible ? 'about-visible' : ''}`}
        ref={aboutRef as React.RefObject<HTMLDivElement>}
      >
        <AboutUs />
      </div>
    </div>
  );
};