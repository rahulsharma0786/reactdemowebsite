import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import Covid from "./Covid";
import Navbar from "./Navbar";


const App=()=>{
return(
<>
<Navbar/>
<Switch>

<Route exact path="/" component={Home}/>
<Route exact path="/About" component={About}/>
<Route exact path="/Contact" component={Contact}/>
<Route exact path="/gallery" component={Gallery}/>
<Route exact path="/Covid" component={Covid}/>


</Switch>



</>
)





}
export default App;