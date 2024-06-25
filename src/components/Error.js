import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
        <h1>Error {err.status}:</h1>
        <h1>{err.data}</h1>
        <h2>something went wrong</h2>
        </div>
    )
}

export default Error