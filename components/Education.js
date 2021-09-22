import EducationCard from "./EducationCard"



function Education({educationInfo}) {
    return (
        <div className="grid p-5 justify-center">
          <h1 className="border-t-4 self-center text-center text-5xl p-10 font-bold tracking-tight text-purple-900 mb-5">Education</h1>
              {educationInfo.schools.map((school, index) => (
                    <EducationCard key={index} school={school} />
                  ))}
                  </div>
        )
}

export default Education
