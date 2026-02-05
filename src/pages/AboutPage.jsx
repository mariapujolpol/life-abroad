function AboutPage() {
    return (
        <div className="about-page" style={{backgroundColor: "#86ad9a", padding: "20px", width: "100%"}}>
            <h1>About the Project</h1>

            <h2>Project Description:</h2>
            <p> 
                This is a Journal App created as part of my Web Development
                Bootcamp. The goal is to practice React, components, and routing.
            </p>
            <h2>Project Goals</h2>
            <div>
                <p>Work with structured JSON data</p>
                <p>Implement list and detail views</p>
                <p>Apply basic layout and styling concepts</p>
                <p>Practice building reusable React components</p>
            </div>

            <h2>Project Link</h2>
            <a  href="https://github.com/mariapujolpol/life-abroad" >
                <p>GitHub Repository</p>
            </a>
            <h2>Team Members</h2>

         <div>
          <div>
            <h3>Ben Joe Mathews</h3>
            <p>Front-end Developer</p>
            <div>
              <a
                href="https://www.linkedin.com/in/benjoemathews"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3>Maria Pol </h3>
            <p>Front-end Developer</p>
            <div>
              <a
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
    )
}




export default AboutPage;