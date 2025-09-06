import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/docketeer.css';

interface RepoData {
  stars: number;
  license: string;
  size: string;
}

export const Docketeer = () => {
  const { theme, toggleTheme } = useTheme();
  const [repoData, setRepoData] = useState<RepoData>({ stars: 0, license: '', size: '' });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add class to body for subdomain-specific styling
    document.body.classList.add('docketeer-subdomain');
    
    // Fetch GitHub repo data
    fetch('https://api.github.com/repos/open-source-labs/Docketeer-Extension')
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
    
    // Cleanup: remove class when component unmounts
    return () => {
      document.body.classList.remove('docketeer-subdomain');
    };
  }, []);

  const handleGitHubClick = () => {
    window.open('https://github.com/open-source-labs/Docketeer-Extension', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://docketeer.io/', '_blank');
  };

  return (
    <div className="docketeer-page">
      {/* Compact Hero Section */}
      <section className="docketeer-hero-compact">
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
              <h1 className="docketeer-title">Docketeer</h1>
              <p className="docketeer-subtitle">Docker Desktop Extension</p>
              <p className="docketeer-description">
                A developer-friendly application that provides a single interface for container and network 
                management as well as metric visualization. Integrates seamlessly with Prometheus, Grafana, 
                and cAdvisor for comprehensive monitoring.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={handleGitHubClick}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </button>
                <button className="btn-secondary" onClick={handleWebsiteClick}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  Website
                </button>
              </div>
            </div>
            
            <div className="hero-stats">
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
      <section className="docketeer-features-compact">
        <div className="container">
          <h2>How It Works</h2>
          <div className="workflow-simple">
            <div className="workflow-item">
              <div className="workflow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <rect x="7" y="7" width="3" height="9"/>
                  <rect x="14" y="7" width="3" height="5"/>
                </svg>
              </div>
              <h3>1. Monitor</h3>
              <p>Track container metrics</p>
            </div>
            
            <div className="workflow-item">
              <div className="workflow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M12 1a11 11 0 0 1 0 22 11 11 0 0 1 0-22z"/>
                </svg>
              </div>
              <h3>2. Manage</h3>
              <p>Control containers & networks</p>
            </div>
            
            <div className="workflow-item">
              <div className="workflow-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>3. Visualize</h3>
              <p>Analyze performance data</p>
            </div>
          </div>
          
          <div className="features-grid-compact">
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Container Management</h3>
                <p>Start, stop, and delete Docker containers with an intuitive GUI interface.</p>
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
                <h3>Real-time Metrics</h3>
                <p>Monitor CPU, memory, network I/O, and block I/O with live visualization.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Kubernetes Support</h3>
                <p>Manage Kubernetes clusters and pods with integrated monitoring capabilities.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Vulnerability Scanning</h3>
                <p>Track and analyze security vulnerabilities in Docker images automatically.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Network Management</h3>
                <p>Create, attach, and delete Docker networks with visual configuration tools.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Log Filtering</h3>
                <p>Advanced container log analysis with filtering and search capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="docketeer-quickstart">
        <div className="container">
          <h2>Installation Guide</h2>
          <div className="quickstart-grid">
            <div className="installation-methods">
              {/* Primary Installation Method */}
              <div className="install-card primary">
                <div className="install-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.847 4.93h2.118a.186.186 0 00.186-.185v-1.888a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185v-1.888a.185.185 0 00-.184-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185v-1.888a.185.185 0 00-.185-.185H5.136a.185.185 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185v-1.888a.185.185 0 00-.184-.185H2.216a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
                  </svg>
                  <h3>Docker Desktop Extension</h3>
                  <span className="badge">Recommended</span>
                </div>
                <div className="install-steps">
                  <div className="step">
                    <div className="step-content">
                      <strong>Prerequisites</strong>
                      <p>Install Docker Desktop v4.40 or later</p>
                      <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer" className="link-button">
                        Download Docker Desktop →
                      </a>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-content">
                      <strong>Open Docker Desktop</strong>
                      <p>Launch the Docker Desktop application</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-content">
                      <strong>Navigate to Extensions</strong>
                      <p>Click on the Extensions tab in the left sidebar</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-content">
                      <strong>Search & Install</strong>
                      <p>Search for "Docketeer" and click Install</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Installation Methods */}
              <div className="install-alternatives">
                <div className="install-card">
                  <div className="install-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    <h4>Browser Mode</h4>
                  </div>
                  <p className="install-description">For local development and testing</p>
                  <div className="command-box">
                    <code>make browser-new</code>
                  </div>
                  <div className="access-points">
                    <p><strong>Access Points:</strong></p>
                    <ul>
                      <li>Docketeer: <code>localhost:4000</code></li>
                      <li>Grafana: <code>localhost:49155</code></li>
                      <li>Prometheus: <code>localhost:49156</code></li>
                    </ul>
                  </div>
                </div>

                <div className="install-card">
                  <div className="install-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                    <h4>Developer Extension</h4>
                  </div>
                  <p className="install-description">For contributors and advanced users</p>
                  <div className="command-box">
                    <code>make extension-dev</code>
                  </div>
                  <p className="install-note">Enable developer mode in Docker Desktop settings first</p>
                </div>
              </div>
            </div>
            
            <div className="info-section">
              <h3>Key Capabilities</h3>
              <ul className="capabilities-list">
                <li>Official Docker Desktop Extension</li>
                <li>Single interface for all Docker resources</li>
                <li>Prometheus metrics collection</li>
                <li>Grafana dashboard integration</li>
                <li>cAdvisor container monitoring</li>
                <li>Real-time performance visualization</li>
                <li>Network topology management</li>
                <li>Container log filtering & analysis</li>
                <li>Image vulnerability scanning</li>
                <li>Historical snapshot comparison</li>
              </ul>
              
              <h3>System Requirements</h3>
              <ul className="dependencies-list">
                <li>Docker Desktop v4.40+</li>
                <li>Windows/Mac/Linux support</li>
                <li>2GB RAM minimum</li>
                <li>Modern web browser</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Features */}
      <section className="docketeer-visuals">
        <div className="container">
          <h2>Powerful Visual Interface</h2>
          <div className="visuals-grid">
            <div className="visual-item">
              <h3>Navigation & Interface</h3>
              <div className="visual-content">
                <img 
                  src="https://raw.githubusercontent.com/open-source-labs/Docketeer-extension/master/assets/Navigation_v20.gif"
                  alt="Docketeer navigation interface demonstration"
                  loading="lazy"
                  className="visual-gif"
                />
              </div>
              <p>Intuitive navigation through all Docker resources with a clean, modern interface.</p>
            </div>
            
            <div className="visual-item">
              <h3>Container Metrics</h3>
              <div className="visual-content">
                <img 
                  src="https://raw.githubusercontent.com/open-source-labs/Docketeer-extension/master/assets/ContainersMetrics_v20.gif"
                  alt="Real-time container metrics visualization"
                  loading="lazy"
                  className="visual-gif"
                />
              </div>
              <p>Monitor CPU, memory, network I/O, and disk usage with real-time performance graphs.</p>
            </div>
            
            <div className="visual-item">
              <h3>Container Filtering</h3>
              <div className="visual-content">
                <img 
                  src="https://raw.githubusercontent.com/open-source-labs/Docketeer-extension/master/assets/ContainersFilters_v20.gif"
                  alt="Container filtering and search capabilities"
                  loading="lazy"
                  className="visual-gif"
                />
              </div>
              <p>Advanced filtering and search to quickly find and manage specific containers.</p>
            </div>
            
            <div className="visual-item">
              <h3>Process Logs</h3>
              <div className="visual-content">
                <img 
                  src="https://raw.githubusercontent.com/open-source-labs/Docketeer-extension/master/assets/ProcessLogs_v20.gif"
                  alt="Container log processing and filtering"
                  loading="lazy"
                  className="visual-gif"
                />
              </div>
              <p>Stream and filter container logs with powerful search and analysis tools.</p>
            </div>
            
            <div className="visual-item">
              <h3>Image Management</h3>
              <div className="visual-content">
                <img 
                  src="https://raw.githubusercontent.com/open-source-labs/Docketeer-extension/master/assets/Images_v20.gif"
                  alt="Docker image management interface"
                  loading="lazy"
                  className="visual-gif"
                />
              </div>
              <p>Manage Docker images with vulnerability scanning and size optimization insights.</p>
            </div>
            
            <div className="visual-item">
              <h3>Kubernetes Monitoring</h3>
              <div className="visual-content">
                <img 
                  src="https://raw.githubusercontent.com/open-source-labs/Docketeer-extension/master/assets/KubernetesClusterHealthMetrics_v20.gif"
                  alt="Kubernetes cluster health monitoring"
                  loading="lazy"
                  className="visual-gif"
                />
              </div>
              <p>Monitor Kubernetes cluster health with pod status and resource utilization metrics.</p>
            </div>
            
            <div className="visual-item">
              <h3>Snapshot Metrics</h3>
              <div className="visual-content">
                <img 
                  src="https://raw.githubusercontent.com/open-source-labs/Docketeer-extension/master/assets/SnapshotMetrics_v20.gif"
                  alt="Historical metrics snapshots and comparison"
                  loading="lazy"
                  className="visual-gif"
                />
              </div>
              <p>Compare historical performance snapshots to track changes and identify trends.</p>
            </div>
          </div>
          
          {/* Get Started CTA */}
          <div className="visuals-cta">
            <h3>Ready to streamline your Docker workflow?</h3>
            <button 
              className="btn-cta-large"
              onClick={() => window.open('https://docketeer.io/', '_blank')}
            >
              Get Started Here →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="docketeer-footer-compact">
        <div className="container">
          <div className="footer-content-split">
            <div className="footer-section footer-left">
              <h4>Links</h4>
              <div className="footer-links">
                <a href="https://github.com/open-source-labs/Docketeer-Extension" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://github.com/open-source-labs/Docketeer-Extension/issues" target="_blank" rel="noopener noreferrer">Issues</a>
                <a href="https://docketeer.io/" target="_blank" rel="noopener noreferrer">Website</a>
                <a href="https://hub.docker.com/extensions/docketeer/docketeer-extension" target="_blank" rel="noopener noreferrer">Docker Hub</a>
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