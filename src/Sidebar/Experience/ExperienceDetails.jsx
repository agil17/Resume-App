import { useState } from "react";
import { FaHardHat } from "react-icons/fa";
import "./ExperienceDetails.css";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";

function ExperienceDetails({ experienceDetails, setExperienceDetails }) {
  const [isShowWorkList, setIsShowWorkList] = useState(false);

  const handleShowWorkList = () => {
    setIsShowWorkList((prev) => !prev);
  };

  return (
    <div className="ExperienceDetails">
      <div className="header">
        <FaHardHat id="faHat" />
        <h1>Experience Details</h1>
      </div>
      {!isShowWorkList ? (
        <ExperienceList
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
          handleShowWorkList={handleShowWorkList}
        />
      ) : (
        <ExperienceForm
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
          handleShowWorkList={handleShowWorkList}
        />
      )}
    </div>
  );
}

export default ExperienceDetails;
