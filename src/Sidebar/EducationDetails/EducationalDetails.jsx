import { useState } from "react";
import "./EducationalDetails.css";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";
import { FaGraduationCap } from "react-icons/fa6";

function EducationalDetails({ educationDetails, setEducationDetails }) {
  const [isShowSchoolList, setIsShowSchoolList] = useState(false);

  const handleShowSchoolList = () => {
    setIsShowSchoolList((prev) => !prev);
  };

  return (
    <div className="EducationalDetails">
      <div className="header">
        <FaGraduationCap id="faCap" />
        <h1>Educational Details</h1>
      </div>
      {!isShowSchoolList ? (
        <EducationList
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          handleShowSchoolList={handleShowSchoolList}
        />
      ) : (
        <EducationForm
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          isShowSchoolList={isShowSchoolList}
          handleShowSchoolList={handleShowSchoolList}
        />
      )}
    </div>
  );
}

export default EducationalDetails;
