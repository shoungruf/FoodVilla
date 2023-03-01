import { Link } from "react-router-dom";
const Footer =() => {
    return (
        <div className="grid grid-flow-row p-10 m-2 shadow-sm shadow-slate-700 bg-slate-50 "> 
       
            <Link to ="/" className="p-1 m-1 cursor-pointer col-span-1 ">
                Home 
            </Link>
            <Link to ="/About" className="p-1 m-1 cursor-pointer col-start-1 ">
                About 
            </Link>
            <Link to ="/Contact" className="p-1 m-1 cursor-pointer col-start-1">
                Contact 
            </Link>
            <Link to ="/Cart" className="p-1 m-1 cursor-pointer col-start-1 ">
                Cart 
            </Link>
       
        </div>
    )
};
export default Footer;