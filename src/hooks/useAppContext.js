import { useContext } from "react";
import { AppContext } from "../Contexts";

const UserAppContext = () => {
   
   return useContext(AppContext); 
};
export { UserAppContext };
