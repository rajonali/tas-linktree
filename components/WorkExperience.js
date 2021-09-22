import {Fade} from "react-reveal";
import ExperienceCard from "./ExperienceCard";



function WorkExperience({workExperiences}) {
    return (
        <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container p-5" id="workExperience">

          <h1 className="flex text-5xl py-5 font-bold tracking-tight text-black-500 mb-5 border-l-8 h-5.5 border-yellow-200 px-5">Experience</h1>

              <div className="experience-cards-div py-10 px-5 my-10 sm:grid w-auto gap-10 md:grid-cols-2 xl:grid-cols-3 w-0.6 3xl: flex flex-wrap justify-center" >
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
