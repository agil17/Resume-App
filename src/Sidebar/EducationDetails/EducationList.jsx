import "./EducationList.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

function EducationList({
  educationDetails,
  setEducationDetails,
  handleShowSchoolList,
}) {
  const handleDeleteSchool = (school) => {
    setEducationDetails(
      educationDetails.filter((item) => item.school !== school)
    );
  };

  return (
    <div className="EducationList">
      {educationDetails.map((item, index) => (
        <>
          <div className="school-info" key={index}>
            <p className="school-name">{item.school}</p>
            <button
              id="faMinus"
              onClick={() => handleDeleteSchool(item.school)}
            >
              <FaMinus />
            </button>
          </div>
          <hr />
        </>
      ))}
      <button onClick={handleShowSchoolList} className="faPlus">
        <FaPlus />
        &nbsp;Add School
      </button>
    </div>
  );
}

export default EducationList;
