const AboutUs = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <p className="about-intro">
          A boutique consultancy founded by technical experts who believe in solving complex problems with elegant solutions.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src="/Arthur.jpeg" alt="Arthur Jin - Co-Founder & CTO" loading="lazy" />
            </div>
            <div className="member-content">
              <h3>Arthur Jin</h3>
              <p className="member-title">Co-Founder & CTO</p>
              <p className="member-bio">
                Arthur Jin is the Co-founder and CTO of Rubic Systems, where he leads engineering and product strategy. With a background in enterprise risk management from Columbia University and hands-on experience building data-driven platforms and consumer tech products, he focuses on designing robust, scalable systems that power smarter business decisions.
              </p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-image">
              <img src="/Chris.jpeg" alt="Chris Antico - Co-Founder & CEO" loading="lazy" />
            </div>
            <div className="member-content">
              <h3>Chris Antico</h3>
              <p className="member-title">Co-Founder & CEO</p>
              <p className="member-bio">
                Chris Antico is the Co-founder and CEO of Rubic Systems, where he leads product and business strategy. With a background in operations management and systems integration from Indiana University, he brings a deep understanding of how to build and scale data-driven solutions that drive business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 