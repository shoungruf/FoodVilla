import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () =>{

    const err = useRouteError();
    const {status , statusText} = err;
    console.log(err);
    return (
        <>
        <div>
            <h1> Oops!</h1>
            <p> Something went wrong</p>
            <h2> {status + " : " + statusText}</h2>
            <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
            </div></>
    )
};

export default Error;