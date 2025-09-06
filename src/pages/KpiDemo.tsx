import { useState } from 'react';
import '../styles/kpidemo.css';

export const KpiDemo = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`kpidemo-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="kpidemo-iframe-wrapper">
        <iframe 
          src="https://kpi-analysis-dashboard--kpi-insights-xp6nr.us-central1.hosted.app/"
          className="kpidemo-iframe"
          title="KPI Analysis Dashboard"
          allow="fullscreen"
        />
      </div>
      
      <div className="kpidemo-explainer">
        <button 
          className="kpidemo-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Show information" : "Hide information"}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        
        <div className="kpidemo-content">
          <p>
            This is a demonstration of our web-based KPI analysis platform, showcasing data visualization 
            and analytics capabilities for automotive shop management using sample data.
          </p>
          <div className="kpidemo-features">
            <div className="kpidemo-feature">
              <h3>Sample Data Visualization</h3>
              <p>Interactive dashboard with representative metrics</p>
            </div>
            <div className="kpidemo-feature">
              <h3>Interactive Analytics</h3>
              <p>Dynamic charts and customizable metrics</p>
            </div>
            <div className="kpidemo-feature">
              <h3>Performance Insights</h3>
              <p>Track key business indicators at a glance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};