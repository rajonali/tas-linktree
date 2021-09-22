import {Fade} from "react-reveal";
import ExperienceCard from "./ExperienceCard";



function WorkExperience({workExperiences}) {
    return (
        <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">

          <h1 className="border-t-4 self-center text-center text-5xl p-10 font-bold tracking-tight text-purple-900 mb-5">Experiences</h1>

              <div className="experience-cards-div px-5 my-10 sm:grid w-auto gap-10 md:grid-cols-2 xl:grid-cols-3 w-0.6 3xl: flex flex-wrap justify-center" >
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                        className=""
                      key={i}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
          </div>
        </Fade>
      </div>

    )
}

export default WorkExperience
