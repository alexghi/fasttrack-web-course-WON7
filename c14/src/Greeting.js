import React from "react";
import GreetingLoggedOutUser from "./GreetingLoggedOutUser";
import GreetingLoggedUser from "./GreetingLoggedUser";

function Greeting(props) {
    if (props.isLoggedIn) {
        return <GreetingLoggedUser />;
    }
    return <GreetingLoggedOutUser />;
}

export default Greeting;
