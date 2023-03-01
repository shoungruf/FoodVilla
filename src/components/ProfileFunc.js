import { useEffect } from "react";
import { useState } from "react";

const ProfileFunc  = () =>{
    const [count, setCount] = useState();

    useEffect(() => {
        console.log("useEffect");
       

        const timer = () =>{
            setInterval(()=>{
                console.log("in profile func ")
            }, 1000);
        };

        return () => {
            clearInterval(timer);
        }
    
    });

    return (
        
        <>
       
        {
        console.log("Return in functional comp")}
        <div className="grid grid-flow-col">
        <h1>Profile functionAL</h1>
        <button className="rounded-md border-orange-200"
            onClick= {()=>{
            setCount({
                count : count +1
            })
        }}>Add counter </button>
        <h2> {count}</h2>
        </div>

        </>
    );
};

export default ProfileFunc;