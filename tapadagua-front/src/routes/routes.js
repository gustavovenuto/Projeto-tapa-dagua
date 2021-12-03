import React from "react";
import {Routes, Route} from "react-router-dom";

import FormLog from "../containers/formLogin";
import About from "../containers/about";
import Registrar from "../containers/registrar";
import Denunciar from "../containers/denunciar";
import Overview from "../containers/overview";


function Rotas(){
    return(
            <Routes>
                <Route path="/" element={<FormLog/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/registrar" element={<Registrar/>}/>
                <Route path="/user" element={<Denunciar/>}/>
                <Route path="/user/overview" element={<Overview/>}/>
            </Routes>
    )
 }

 export default Rotas;