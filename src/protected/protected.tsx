import { Navigate } from "react-router-dom";
// import { User } from "../interfaces/apiTypes"


// const userAuth = (): boolean => {
//   const userJson = localStorage.getItem("userToken");
//   if (!userJson) {
//     return false;
//   }
//   const user: User = JSON.parse(userJson);
//   if (user.user.isAdmin === false) {
//     return false;
//   }
    
//   return true;
// };


export const PrivateRoute = ({children}: any) => {
    const admin = true;
    return admin ? children : <Navigate to="/login" />
}