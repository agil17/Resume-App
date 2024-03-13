import "./Education.css";

function Education({ educationDetails }) {
  return (
    <div className="Education">
      <h1>Education</h1>
      {educationDetails.length > 0 ? (
        educationDetails.map((item, index) => (
          <div className="education-info" key={index}>
            <div className="school-info">
              <p className="school">{item.school}</p>
              <p className="degree">{item.degree}</p>
            </div>
            <div className="dates">
              <p className="date">
                {item.startdate} - {item.enddate}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No Schools</p>
      )}
    </div>
  );
}

export default Education;
