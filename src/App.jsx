import { useState } from "react";
import "./App.css";
import PersonalDetails from "./Sidebar/PersonalDetails/PersonalDetails";
import EducationalDetails from "./Sidebar/EducationDetails/EducationalDetails";
import ExperienceDetails from "./Sidebar/Experience/ExperienceDetails";
import Header from "./ResumeTemplate/Header/Header";
import Education from "./ResumeTemplate/Education/Education";
import Experience from "./ResumeTemplate/Experience/Experience";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "Juan Brujo",
    email: "juanBrujo@email.com",
    phone: "(555) 555-5555",
    address: "Springfield, US",
  });
  const [educationDetails, setEducationDetails] = useState([
    {
      school: "Berkeley College",
      degree: "Mathematics",
      startdate: "8/2013",
      enddate: "5/2017",
    },
    {
      school: "California State University, Los Angeles",
      degree: "Computer Science",
      startdate: "8/2017",
      enddate: "8/2022",
    },
  ]);

  const [experienceDetails, setExperienceDetails] = useState([
    {
      company: "NASA JPL",
      position: "Software Engineering Intern",
      startdate: "8/2021",
      enddate: "5/2022",
      description:
        "Collaborated with JPL engineers and liaisons to operationalize networked collaborative features for Moon Trek enhancing the user experience Networked Collaboration Features for Moon Trek. Developed a secure Java backend to manage users’ session and data, ensuring reliable system performance. Leveraged APIs and JSON parsing techniques to retrieve crucial online information, optimizing data processing capabilities. Assisted in creating detailed system requirements specifications, ensuring alignment with project scope.",
    },
    {
      company: "University Student Union",
      position: "Operations Associate",
      startdate: "8/2021",
      enddate: "5/2022",
      description:
        "Maintained cleanliness and functionality of Student Union building. Provided excellent assistance to office spaces, affirming productivity and organization. Served as a reliable point of contact for clubs and organizations, efficiently facilitating necessary tasks.",
    },
  ]);

  return (
    <div className="App">
      <div className="forms-container">
        <PersonalDetails
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationalDetails
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
        <ExperienceDetails
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      </div>
      <div className="resume-container">
        <Header personalDetails={personalDetails} />
        <Education educationDetails={educationDetails} />
        <Experience experienceDetails={experienceDetails} />
      </div>
    </div>
  );
}

export default App;
