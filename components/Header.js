import Image from 'next/image'
import emoji from "react-easy-emoji";
import { SocialIcon } from 'react-social-icons';


function Header({greetings, socialmedia}) {
console.log(socialmedia);
    return (
        <>
<div className="sm: h-64 w-100 relative px-5 my-8 grid md:grid-cols-2 xl:grid-cols-3 3xl: flex flex-wrap justify-center">
  <Image
  style={{borderStyle:'solid', borderColor:'black', borderWidth: '10px' }}
    src="http://www.tasnimali.com/static/media/myavatar.32be7b68.png"
    alt="Picture of the author"
    layout="fill" // required
    objectFit="contain" // change to suit your needs
    className="rounded-full" // just an example
  />
</div>

<div className="items-center">
    <h2 className="text-center text-7xl font-bold tracking-tight text-purple-900 mb-5">
        {greetings.username}
    </h2>
    <h3 className="p-0 m-0 text-center text-3xl font-bold tracking-tight text-purple-900 mb-5">
        {greetings.title}
    </h3>
    <h4 className="px-10 text-center text-2xl tracking-tight text-purple-900 mb-5">
        {greetings.subTitle}
    </h4>



    <div className="flex justify-center space-x-5">
        <button                   
        className="bg-purple-600 text-white rounded-md p-3 font-bold"><a href={greetings.resumeLink}>My Resume</a></button>
        <button className="bg-purple-600 text-white rounded-md p-3 font-bold"> <a href={`mailto:${socialmedia.gmail}`}>Contact Me</a></button>

    </div>



    <div style={{}} className="flex items-center space-x-5 py-10 justify-center h-auto">
    
    <SocialIcon url={socialmedia.github} />
    <SocialIcon url={socialmedia.linkedin} />
    <SocialIcon url={socialmedia.instagram} />


    </div>
</div>

</>
    )
}

export default Header
