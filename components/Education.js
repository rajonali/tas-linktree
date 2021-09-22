import EducationCard from "./EducationCard"



function Education({educationInfo}) {
    return (
        <div className="grid p-5">
          <h1 className="self-center text-start text-5xl py-10 font-bold tracking-tight text-black-500 mb-5 border-l-8 h-5.5 border-yellow-200 px-5">Education</h1>
             <div className="py-10">
              {educationInfo.schools.map((school, index) => (
                    <EducationCard key={index} school={school} />
                  ))}
                  </div>
                  </div>
        )
}

export default Education
