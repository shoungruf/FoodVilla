import { useEffect, useState } from "react"

const useOnlineUser = ({isOnline}) =>{
    const [isUserOnline, setUserOnline] = useState({isOnline});

    useEffect(()=>{
        const handleOnline = () =>{ setUserOnline(true);};
        const handleOffline = () =>{ setUserOnline(false);};
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    },[]);

    return isUserOnline;

};

export default useOnlineUser;