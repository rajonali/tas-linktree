import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import {greeting, socialMediaLinks, educationInfo} from "../portfolio";
import EducationCard from '../components/EducationCard';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white-400 to-transparent h-auto">
      <Head>
        <title>{greeting.username}</title>
      </Head>      
      <Nav />
      <Header greetings={greeting} socialmedia={socialMediaLinks} />
     
     <div className="grid w-screen pt-10 justify-center">
<h1 className="self-center text-center text-5xl p-10 font-bold tracking-tight text-purple-900 mb-5">Education</h1>
<div>
      {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
          </div>
</div>
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
