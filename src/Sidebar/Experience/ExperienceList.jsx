import { FaPlus, FaMinus } from "react-icons/fa6";
import "./ExperienceList.css";

function ExperienceList({
  experienceDetails,
  setExperienceDetails,
  handleShowWorkList,
}) {
  const handleDeleteWork = (company) => {
    setExperienceDetails(
      experienceDetails.filter((item) => item.company !== company)
    );
  };

  return (
    <div className="ExperienceList">
      {experienceDetails.map((item, index) => (
        <>
          <div className="work-info" key={index}>
            <p className="work-name">{item.company}</p>
            <button id="faMinus" onClick={() => handleDeleteWork(item.company)}>
              <FaMinus />
            </button>
          </div>
          <hr />
        </>
      ))}
      <button onClick={handleShowWorkList} className="faPlus">
        <FaPlus />
        &nbsp;Add Work
      </button>
    </div>
  );
}

export default ExperienceList;
