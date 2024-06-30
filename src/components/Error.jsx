import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (<div>
        <h1>Oops, Error 404</h1>
        <h2>{err.statusText}: {err.status}</h2>

    </div>)
}

export default Error;