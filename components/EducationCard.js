import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import Image from 'next/image'


export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  return (
    <div className="">
      <Fade left duration={1000}>
        <div className="education-card bg-purple-400 rounded-md ">
        <div className="relative flex m-5 w-100 rounded-full justify-center bg-transparent z-10 shadow-none hover:shadow-xl transition">


<Image
      width="150px"
      height="150px"

  crossOrigin={"anonymous"}
  ref={imgRef}
  className="experience-roundedimg"
  src={school.logo}
  alt={school.alt}
/>


</div>

          <div className="education-card-right ">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className="education-text-subHeader"
              >
                {school.subHeader}
              </h5>
              <p
                className="education-text-duration"
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
