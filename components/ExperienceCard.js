import React, {useState, createRef} from "react";
import ColorThief from "colorthief";
import Image from 'next/image'


export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className="subTitle"
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className="experience-card relative w-auto h-auto bg-purple-400 rounded-md pt-20 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
      <div style={{background: rgb(colorArrays)}} className="experience-banner ">




        <div className="relative flex rounded-full justify-center bg-gray-100 p-2 z-10 shadow-lg hover:shadow-xl transition">


        <Image
              width="150px"
              height="150px"

          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />


        </div>

        <div className="experience-div-company">
          <h5 className="experience-text-company p-0 pt-5 m-0 text-center text-4xl font-bold tracking-tight text-black mb-5">{cardInfo.company}</h5>
        </div>


      </div>
      <div className="experience-text-details">
        <h5
          className="experience-text-role text-3xl font-semibold text-center"
        >
          {cardInfo.role}
        </h5>
        <h5
          className="experience-text-date text-2xl font-semibold text-center"
        >
          {cardInfo.date}
        </h5>
        <p
          className="subTitle experience-text-desc text-1xl pt-10 font-semibold"
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
