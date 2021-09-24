import {DatabaseIcon,PencilIcon, AcademicCapIcon, LightningBoltIcon} from '@heroicons/react/outline'


function Skills() {
    return (

<div className="m-5">
        <h1 className="text-start text-5xl pb-1 leading-tight font-bold tracking-tight text-black-500 mb-5 border-l-8 mb-10 h-5.5 border-yellow-200 px-5">Skills Overview</h1>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
            
            
            
            


            <div className="rounded-md shadow-lg border-dashed border-4 border-light-blue-500 mx-5 ">

<div className="flex justify-center items-center">
<LightningBoltIcon className="h-36 mb-1 pl-5"/>

<div className="flex-col px-5">
<h2 className="text-2xl font-bold">Frontend Development</h2>

<p>Efficient deployable responsive development using the latest and the greatest</p>
</div>
</div>


            </div> 


            <div className="rounded-md shadow-lg border-dashed border-4 border-light-blue-500 mx-5 ">

<div className="flex justify-center items-center">
<DatabaseIcon className="h-36 mb-1 pl-5"/>

<div className="flex-col px-5">
<h2 className="text-2xl font-bold">Backend Development</h2>

<p>Efficient deployable responsive development using the latest and the greatest</p>
</div>
</div>


            </div> 
            <div className="rounded-md shadow-lg border-dashed border-4 border-light-blue-500 mx-5 ">

<div className="flex justify-center items-center">
<AcademicCapIcon className="h-36 mb-1 pl-5"/>

<div className="flex-col px-5">
<h2 className="text-2xl font-bold">ComptiA+ Approved</h2>

<p>Efficient deployable responsive development using the latest and the greatest</p>
</div>
</div>


            </div>
            
            

            <div className="rounded-md shadow-lg border-dashed border-4 border-light-blue-500 mx-5 ">

<div className="flex justify-center items-center">
<PencilIcon className="h-36 mb-1 pl-5"/>

<div className="flex-col px-5">
<h2 className="text-2xl font-bold">UI/UX Design</h2>

<p>Efficient deployable responsive development using the latest and the greatest</p>
</div>
</div>


            </div>
            
            
                    </div>
                    </div>
    )
}

export default Skills
