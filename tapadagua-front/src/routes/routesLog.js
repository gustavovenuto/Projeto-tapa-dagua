import React from "react";
import {Routes, Route} from "react-router-dom";
import Denunciar from "../containers/denunciar";



function RotasLog(){
    return(
            <Routes>
                <Route path="/user" element={<Denunciar/>}/>
            </Routes>
    )
 }

 export default RotasLog;