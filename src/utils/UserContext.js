import { createContext } from "react";

const userContext =  createContext({
    loggedUserId : " default user",
});

export default userContext;