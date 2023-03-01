import { createContext } from "react";

    const userContext = createContext({
        user : {
            name :"",
            email : ""
        }
    });
  

export default userContext;