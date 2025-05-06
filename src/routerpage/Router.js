import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Register/Login";
import Signup from "../Register/Signup";
import Research from "../research/Research";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact = {true} element = {<Login />} />
            <Route path="/research" exact = {true} element ={<Research/>} />
            <Route path="/signup" exact = {true} element = {<Signup />} />
            
            {/* <Route path='/home' exact ={true} element={<Home/>} /> */}
        </Routes>
        </BrowserRouter>
    )
}
export default Router;