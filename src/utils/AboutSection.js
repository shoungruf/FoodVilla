import {useState} from "react";
const AboutSection = ({ title, description, visibleSection, setVisibleSection }) => {
    let isVisible = (title === visibleSection);
  return (
    <>
      <div className="p-2 m-2 w-56 border-b-2 border-b-slate-200">
        <div className="font-bold">
          <h1>{title}</h1>
        </div>
    <div >
        {!isVisible ? (
          <>
            <button className="underline" onClick={()=>{
            setVisibleSection(title);
                
            }}>Show</button>
             {isVisible && <p className="font-thin">{description}</p> }
         
          </>
        ) : (
          <>
            <button className="underline" onClick={()=>{
                setVisibleSection("");
               
            }}>Hide</button>
               {isVisible && <p className="font-thin">{description}</p> }
          </>
        )}
     
        </div>
      </div>
    </>
  );
};

export default AboutSection;
