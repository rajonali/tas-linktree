import EducationCard from "../../components/educationCard/EducationCard";


function Linktree({educationInfo}) {
    return (
        <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    )
}

export default Linktree
