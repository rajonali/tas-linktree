import { skillsSection } from "../portfolio";


function SkillsSection() {
    return (
<div className="software-skills-main-div flex-1 flex-row flex-wrap bg-gray-200 p-10 my-20 opacity-80 sm:grid-cols-4">

  <h2 className="text-center text-3xl font-bold tracking-tigh">Skills to Pay the Bills</h2>
  <p className="text-center text-md py-2 font-semibold tracking-tight text-gray-700">Told you i knew a couple things.</p>
        <ul className="dev-icons py-5 list-none m-0 text-center">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="group software-skill-inline inline-grid align-top p-3 gap-2"
                name={skills.skillName}
              >
                <i className={`${skills.fontAwesomeClassname} text-5xl group-hover:animate-bounce`}></i>
                <p className="opacity-0 group-hover:opacity-100 ">{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
}

export default SkillsSection
