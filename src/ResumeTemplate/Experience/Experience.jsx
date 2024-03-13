import "./Experience.css";

function Experience({ experienceDetails }) {
  return (
    <div className="Experience">
      <h1>Professional Experience</h1>
      {experienceDetails.length > 0 ? (
        experienceDetails.map((item, index) => (
          <div className="experience-info" key={index}>
            <div className="company-info">
              <div className="company-position">
                <p className="company">{item.company}</p>
                <p className="position">{item.position}</p>
              </div>
              <div className="company-dates">
                <p className="dates">
                  {item.startdate} - {item.enddate}
                </p>
              </div>
            </div>
            <div className="company-description">
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>No Experience</h1>
      )}
    </div>
  );
}

export default Experience;
