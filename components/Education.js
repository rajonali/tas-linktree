import EducationCard from "./EducationCard"



function Education({educationInfo}) {
    return (
        <div className="grid w-screen pt-10 justify-center">
        <h1 className="self-center text-center text-5xl p-10 font-bold tracking-tight text-purple-900 mb-5">Education</h1>
        <div>
              {educationInfo.schools.map((school, index) => (
                    <EducationCard key={index} school={school} />
                  ))}
                  </div>
        </div>
    )
}

export default Education
