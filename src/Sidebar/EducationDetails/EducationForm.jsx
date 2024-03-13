import { useState } from "react";
import "./EducationForm.css";

function EducationForm({
  educationDetails,
  setEducationDetails,
  handleShowSchoolList,
}) {
  const handleNewEducationDetailsOnChange = (e) => {
    setNewEducationDetails({
      ...newEducationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelAddSchool = () => {
    setNewEducationDetails({});
    handleShowSchoolList();
  };

  const handleSubmitAddSchool = () => {
    setEducationDetails([...educationDetails, newEducationDetails]);
    setNewEducationDetails({});
    handleShowSchoolList();
  };

  const [newEducationDetails, setNewEducationDetails] = useState({});

  return (
    <div className="EducationForm">
      <div className="input-group">
        <label htmlFor="school">
          <span className="label-text">School</span>
        </label>
        <input
          type="text"
          name="school"
          id="school"
          value={newEducationDetails.school}
          onChange={handleNewEducationDetailsOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="degree">
          <span className="label-text">Degree</span>
        </label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={newEducationDetails.degree}
          onChange={handleNewEducationDetailsOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="startdate">
          <span className="label-text">Start Date</span>
        </label>
        <input
          type="text"
          name="startdate"
          id="startdate"
          value={newEducationDetails.startdate}
          onChange={handleNewEducationDetailsOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="enddate">
          <span className="label-text">End Date</span>
        </label>
        <input
          type="text"
          name="enddate"
          id="enddate"
          value={newEducationDetails.enddate}
          onChange={handleNewEducationDetailsOnChange}
        />
      </div>
      <div className="buttons-group">
        <button onClick={handleCancelAddSchool}>Cancel</button>
        <button onClick={handleSubmitAddSchool}>Submit</button>
      </div>
    </div>
  );
}

export default EducationForm;
