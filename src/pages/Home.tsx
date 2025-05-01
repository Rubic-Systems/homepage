import AboutUs from '../components/AboutUs';

export const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Democratizing High-Performance Analytics</h1>
          <p>
            Transform your data into instant insights with Rubic's multidimensional analytics platform.
            No SQL required, no data team needed.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Instant OLAP Cubes</h3>
              <p>
                Automatically generate multidimensional cubes from your structured data.
                Support for categorical, temporal, and geospatial slicing.
              </p>
            </div>

            <div className="feature-card">
              <h3>AI-Powered Insights</h3>
              <p>
                Embedded AI agents detect anomalies, score correlations, and surface
                hidden patterns across your data dimensions.
              </p>
            </div>

            <div className="feature-card">
              <h3>Flexible Access</h3>
              <p>
                Interact with your data through an intuitive GUI or programmatic API.
                Real-time querying with pre-aggregated results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}; 