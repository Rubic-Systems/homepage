import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/tkyo.css';

interface RepoData {
  stars: number;
  license: string;
  size: string;
}

interface PackageData {
  version: string;
}

export const Tkyo = () => {
  const { theme, toggleTheme } = useTheme();
  const [repoData, setRepoData] = useState<RepoData>({ stars: 0, license: '', size: '' });
  const [packageData, setPackageData] = useState<PackageData>({ version: '' });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch GitHub repo data
    fetch('https://api.github.com/repos/open-source-labs/tkyo-drift')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          // Convert size from KB to a readable format
          const sizeInKB = data.size;
          let sizeStr = '';
          if (sizeInKB < 1024) {
            sizeStr = `${sizeInKB} KB`;
          } else {
            sizeStr = `${(sizeInKB / 1024).toFixed(1)} MB`;
          }
          
          setRepoData({
            stars: data.stargazers_count,
            license: data.license?.spdx_id || '',
            size: sizeStr
          });
        }
      })
      .catch(() => {
        // Silently fail - will show "..." in UI
      });
    
    // Fetch NPM package data
    fetch('https://registry.npmjs.org/tkyodrift')
      .then(res => res.json())
      .then(data => {
        if (data['dist-tags']?.latest) {
          setPackageData({
            version: data['dist-tags'].latest
          });
        }
      })
      .catch(() => {
        // Silently fail - will show "..." in UI
      });
  }, []);

  const handleGitHubClick = () => {
    window.open('https://github.com/open-source-labs/tkyo-drift', '_blank');
  };

  return (
    <div className="tkyo-page">
      {/* Compact Hero Section */}
      <section className="tkyo-hero-compact">
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
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="tkyo-title">TKYODrift</h1>
              <p className="tkyo-subtitle">AI Drift Detection Library</p>
              <p className="tkyo-description">
                Lightweight CLI tool and library for detecting when AI models degrade over time. 
                Tracks semantic, conceptual, and lexical drift using embeddings and scalar metrics.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={handleGitHubClick}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </button>
                <a href="https://www.npmjs.com/package/tkyodrift" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z"/>
                  </svg>
                  NPM Package
                </a>
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-label">Version</span>
                <span className="stat-value">{packageData.version || '...'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">License</span>
                <span className="stat-value">{repoData.license || '...'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Stars</span>
                <span className="stat-value">{repoData.stars || '...'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Size</span>
                <span className="stat-value">{repoData.size || '...'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="tkyo-features-compact">
        <div className="container">
          <h2>How It Works</h2>
          <div className="workflow-simple">
            <div className="workflow-item">
              <div className="workflow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <h3>1. Capture</h3>
              <p>Collect AI inputs/outputs</p>
            </div>
            
            <div className="workflow-item">
              <div className="workflow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>2. Analyze</h3>
              <p>Generate embeddings</p>
            </div>
            
            <div className="workflow-item">
              <div className="workflow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                </svg>
              </div>
              <h3>3. Detect</h3>
              <p>Identify drift patterns</p>
            </div>
          </div>
          
          <div className="features-grid-compact">
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18m-9-9v18"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Data Drift Detection</h3>
                <p>Monitors when input distributions change over time as user behavior evolves.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>No Database Required</h3>
                <p>Lightweight, in-memory drift detection that doesn't require external storage.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Semantic Drift Tracking</h3>
                <p>Detects changes in meaning and context of language in AI interactions.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Embedding Analysis</h3>
                <p>Uses HuggingFace Transformers (@xenova/transformers) for semantic analysis.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Multiple Metrics</h3>
                <p>Cosine similarity, Euclidean distance, entropy, and text-based metrics.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Non-Blocking</h3>
                <p>Asynchronous processing with minimal performance impact on production systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="tkyo-quickstart">
        <div className="container">
          <h2>Quick Start</h2>
          <div className="quickstart-grid">
            <div className="code-section">
              <div className="code-header">Installation</div>
              <pre className="code-block bash">
                <code>
                  <span className="cmd">npm</span> <span className="arg">install</span> <span className="pkg">tkyodrift</span>
                  {'\n\n'}
                  <span className="comment"># Install Python dependencies</span>
                  {'\n'}
                  <span className="cmd">pip</span> <span className="arg">install</span> <span className="flag">-r</span> <span className="path">./node_modules/tkyo-drift/requirements.txt</span>
                </code>
              </pre>
              
              <div className="code-header">Basic Usage</div>
              <pre className="code-block js">
                <code>
                  <span className="keyword">import</span> <span className="var">tkyoDrift</span> <span className="keyword">from</span> <span className="string">'tkyodrift'</span>;
                  {'\n\n'}
                  <span className="comment">// One-off input analysis</span>
                  {'\n'}
                  <span className="func">tkyoDrift</span>(<span className="var">userSubmission</span>, <span className="string">'input'</span>);
                  {'\n\n'}
                  <span className="comment">// inputType can be 'input', 'output', 'system', etc.</span>
                  {'\n'}
                  <span className="comment">// Runs asynchronously and logs drift metrics automatically</span>
                </code>
              </pre>
              
              <div className="code-header">Training Data</div>
              <pre className="code-block js">
                <code>
                  <span className="comment">// Batch training data embedding</span>
                  {'\n'}
                  <span className="func">tkyoDriftSetTraining</span>(<span className="var">dataPath</span>, <span className="string">'input'</span>, <span className="string">'userInputText'</span>);
                </code>
              </pre>
            </div>
            
            <div className="info-section">
              <h3>Key Capabilities</h3>
              <ul className="capabilities-list">
                <li>CLI tool for quick analysis</li>
                <li>Library for integration</li>
                <li>Batch processing support</li>
                <li>Multiple embedding models</li>
                <li>Customizable thresholds</li>
                <li>Export drift reports</li>
              </ul>
              
              <h3>Dependencies</h3>
              <ul className="dependencies-list">
                <li>@xenova/transformers</li>
                <li>chalk (CLI coloring)</li>
                <li>cli-table3 (CLI tables)</li>
                <li>Minimal footprint</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLI Output Examples */}
      <section className="tkyo-cli-output">
        <div className="container">
          <h2>CLI Output Examples</h2>
          <div className="cli-images-grid">
            <div className="cli-image-item">
              <h3>Drift Log Output</h3>
              <img 
                src="https://github.com/open-source-labs/tkyo-drift/raw/dev/tkyo-drift/assets/printLogCLI.png" 
                alt="TKYODrift CLI log output showing drift metrics"
                loading="lazy"
              />
            </div>
            <div className="cli-image-item">
              <h3>Scalar Metrics Output</h3>
              <img 
                src="https://github.com/open-source-labs/tkyo-drift/raw/dev/tkyo-drift/assets/printScalarCLI.png" 
                alt="TKYODrift CLI scalar metrics output"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tkyo-footer-compact">
        <div className="container">
          <div className="footer-content-split">
            <div className="footer-section footer-left">
              <h4>Links</h4>
              <div className="footer-links">
                <a href="https://github.com/open-source-labs/tkyo-drift" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://github.com/open-source-labs/tkyo-drift/issues" target="_blank" rel="noopener noreferrer">Issues</a>
                <a href="https://www.npmjs.com/package/tkyodrift" target="_blank" rel="noopener noreferrer">NPM</a>
              </div>
            </div>
            <div className="footer-section footer-right">
              <h4>Rubic Systems</h4>
              <a href="https://rubicsystems.com" className="rubic-link">
                rubicsystems.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};