function AboutPage() {
    return (
    <div className="about-page">
      <div className="about-card">
        <h1>About the Project</h1>

        <div className="about-section">
          <h2>Project Description</h2>
          <p>
            This is a Journal App created as part of my Web Development
            Bootcamp. The goal is to practice React, components, and routing.
          </p>
        </div>

        <div className="about-section">
          <h2>Project Goals</h2>
          <div className="about-goals">
            <p>Work with structured JSON data</p>
            <p>Implement list and detail views</p>
            <p>Apply basic layout and styling concepts</p>
            <p>Practice building reusable React components</p>
          </div>
        </div>

        <div className="about-section">
          <h2>Project Link</h2>
          <a className="about-link" href="https://github.com/mariapujolpol/life-abroad">
            GitHub Repository
          </a>
        </div>

        <div className="about-section">
          <h2>Team Members</h2>
          <div className="about-team">
            <div className="about-member">
              <h3>Ben Joe Mathews</h3>
              <p>Front-end Developer</p>
              <a
                className="about-link"
                href="https://www.linkedin.com/in/benjoemathews"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="about-member">
              <h3>Maria Pol</h3>
              <p>Front-end Developer</p>
              <a
                className="about-link"
                href="https://www.linkedin.com/in/mariapol"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}




export default AboutPage;