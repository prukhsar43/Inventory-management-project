import React from "react";
import Header1 from "./Header1";
import { Outlet } from "react-router-dom";
const All=()=>{
    return(
        <>
        <Header1/>
        <Outlet/>
        </>
    )

} 
export default All;