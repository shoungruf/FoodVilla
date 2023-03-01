import React from "react";
import ProfileClass from "./ProfileClass";
import ProfileFunc from "./ProfileFunc";
import AboutSection from "../utils/AboutSection";
import { AboutSectionData } from "../utils/config";
import { useState } from "react";

const About = () => {
  const [visibleSection, setVisibleSection] = useState("About");

  return (
    <>
      {/***
       * For chapter 8 - class based component and functional component 
       * 
       * /* <div>
        <h1> About us </h1>
        <p> This is POC - Farm Villa </p>
        <ProfileClass />
        <ProfileFunc />
      </div> */}
      {/**
       * lifting the state up
       */}
      <div className="p-3 m-3 grid grid-flow-row border border-slate-100">
        {AboutSectionData.map((data) => {
          return (
            <AboutSection
              title={data?.title}
              description={data?.description}
              key={data?.id}
              visibleSection={visibleSection}
              setVisibleSection={setVisibleSection}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
