import { useState } from "react";
import "./ExperienceForm.css";

function ExperienceForm({
  experienceDetails,
  setExperienceDetails,
  handleShowWorkList,
}) {
  const handleNewExperienceDetailsOnChange = (e) => {
    setNewExperienceDetails({
      ...newExperienceDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelAddWork = () => {
    setNewExperienceDetails({
      company: "",
      position: "",
      startdate: "",
      enddate: "",
      description: "",
    });
    handleShowWorkList();
  };

  const handleSubmitAddWork = () => {
    setExperienceDetails([...experienceDetails, newExperienceDetails]);
    setNewExperienceDetails({
      company: "",
      position: "",
      startdate: "",
      enddate: "",
      description: "",
    });
    handleShowWorkList();
  };

  const [newExperienceDetails, setNewExperienceDetails] = useState({
    company: "",
    position: "",
    startdate: "",
    enddate: "",
    description: "",
  });

  return (
    <div className="ExperienceForm">
      <div className="input-group">
        <label htmlFor="work">
          <span className="label-text">Company</span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          value={newExperienceDetails.company}
          onChange={handleNewExperienceDetailsOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="position">
          <span className="label-text">Position</span>
        </label>
        <input
          type="text"
          name="position"
          id="position"
          value={newExperienceDetails.position}
          onChange={handleNewExperienceDetailsOnChange}
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
          value={newExperienceDetails.startdate}
          onChange={handleNewExperienceDetailsOnChange}
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
          value={newExperienceDetails.enddate}
          onChange={handleNewExperienceDetailsOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">
          <span className="label-text">Description</span>
        </label>
        <textarea
          name="description"
          id="description"
          cols="300"
          rows="5"
          value={newExperienceDetails.description}
          onChange={handleNewExperienceDetailsOnChange}
        ></textarea>
      </div>
      <div className="buttons-group">
        <button onClick={handleCancelAddWork}>Cancel</button>
        <button onClick={handleSubmitAddWork}>Submit</button>
      </div>
    </div>
  );
}

export default ExperienceForm;
