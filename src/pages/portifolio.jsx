function Portfolio() {
    return (
      <div className="portfolio-container">
        <div className="heading">
          <h2>My Skills</h2>
        </div>
        <div className="skills">
          <Skill name="JAVA" level="80%" />
          <Skill name="HTML" level="95%" />
          <Skill name="CSS" level="90%" />
          <Skill name="PYTHON" level="75%" />
          <Skill name="ML PROCESSING" level="70%" />
          <Skill name="SOLIDITY" level="60%" />
        </div>
      
      </div>
      
    );
  }
  
  function Skill({ name, level }) {
    return (
      <div className="skill-bar">
        <label>{name}</label>
        <div className="bar">
          <div className="filled" style={{ width: level }}></div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;
  