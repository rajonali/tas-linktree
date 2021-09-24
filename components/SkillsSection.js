import { skillsSection } from "../portfolio";


function SkillsSection() {
    return (
<div className="software-skills-main-div flex-1 flex-row flex-wrap bg-gray-200 p-20 my-20 opacity-80">
        <ul className="dev-icons list-none m-0 text-center">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline inline-grid align-top mx-5"
                name={skills.skillName}
              >
                <i className={`${skills.fontAwesomeClassname} text-5xl`}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
}

export default SkillsSection
