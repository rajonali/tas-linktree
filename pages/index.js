import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import {greeting, socialMediaLinks, educationInfo, workExperiences} from "../portfolio";
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white-400 to-transparent h-auto">
      <Head>
        <title>{greeting.username}</title>
      </Head>      
      <Nav />
      <Header greetings={greeting} socialmedia={socialMediaLinks} />

<WorkExperience workExperiences={workExperiences}/>
   
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
