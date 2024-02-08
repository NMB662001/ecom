import React from "react";
import { useSelector } from "react-redux";
const Contact=()=>{
    const {firstname}=useSelector(state=>state.userslice)

    return(
        <><div>{firstname}</div></>
    )
}
export default Contact