import React, { useEffect,useState } from "react";


import Web from "../src/Image/Covid1.jpg"
import Web1 from "../src/Image/Covid2.jpg"
import Web2 from "../src/Image/Covid3.jpg"
import Web3 from "../src/Image/Covid7.jpg"
import Web4 from "../src/Image/Covid5.jpg"
import Web5 from "../src/Image/Covid6.jpg"
import Web10 from "../src/Image/covid10.jpg"
import Web11 from "../src/Image/live.png"

const Covid=()=>{
const[data,setData]=useState([]);



const getCovidData= async()=>{
try{
const res= await fetch("https://data.covid19india.org/data.json");
const actualData= await res.json()
console.log(actualData.statewise[0])
setData(actualData.statewise[0])
}catch(err){
console.log(err)
}

}


useEffect(()=>{

getCovidData();
},[]);

return(
    <>
    <div class="container">
    <div class="row ">
<div class="col-lg-4 col-md-4 col-sm-4 col-12 d-block m-auto ">
<img src={Web10} style={{width:"200px", height:"100px"}} class="card-img-top img " alt="..."/>


</div>
<div class="col-lg-8 col-md-8 col-sm-8 col-12 d-block m-auto pare ">
<h2 class="text-danger bold">COVID-19 LIVE TREACKER</h2>


</div>



</div>

<img src={Web11} style={{width:"200px", height:"100px"}} class="card-img-top rahul myimg"  alt="..."/>

</div>

  <div className="container-fluid">
<div className="row text-center">
  <div className="col-lg-4 col-md-4 col-12 mb-3">
<div class="card cfix">
  <img src={Web} style={{width:"307px", height:"162px"}} class="card-img-top" className="img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" class="text-primary">COUNTRY</h5>
    <h5 class="card-text bold">INDIA</h5>
    
  </div>
</div>

</div>


<div className="col-lg-4 col-md-4 col-12 mb-3">
<div class="card cfix">
  <img src={Web1} style={{width:"307px" , height:"156px"}} class="card-img-top" className="img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" class="text-primary">Active Case</h5>
    <h4 class="card-text bold">{data.active}</h4>
  
  </div>
</div>

</div>

<div className="col-lg-4 col-md-4 col-12 mb-3">
<div class="card cfix" >
  <img src={Web2} style={{width:"290px",height:"160px"}} class="card-img-top" className="img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" class="text-primary">Confirmed</h5>
    <h5 class="card-text bold" >{data.confirmed}</h5>
    
  </div>
</div>

</div>
<div className="col-lg-4 col-md-4 col-12 mb-3">
<div class="card cfix" >
  <img src={Web3} style={{width:"307px", height:"162px"}} class="card-img-top" className="img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" class="text-primary">Deltaconfirmed</h5>
    <h5 class="card-text bold">{data.deltaconfirmed}</h5>
    
  </div>
</div>

</div>
<div className="col-lg-4 col-md-4 col-12 pt-3 mb-3">
<div class="card cfix" >
  <img src={Web4} style={{width:"280px",height:"156px"}} class="card-img-top" className="img-fluid" alt="..."/>
  <div class="card-body ">
  <h5 class="card-title" class="text-primary">Recovered</h5>
    <h5 class="card-title bold">{data.recovered}</h5>
    
    
  </div>
</div>

</div>
<div className="col-lg-4 col-md-4 col-12 pt-3 mb-3">
<div class="card cfix"  >
  <img src={Web5} style={{width:"290px",height:"156px"}} class="card-img-top" className="img-fluid" alt="..."/>
  <div class="card-body">
  <h5 class="card-title" class="text-primary">Death</h5>
    <h5 class="card-title bold">{data.deaths}</h5>

    
  </div>
</div>

</div>
<footer class="page-footer bg-dark ">
<div class="bg-dark">
<div class="container para">
<div class="row py-4 d-flex align-items-center">
<div class="col-md-12 text-center">
<a href="#"><i class="fab fa-facebook-f  text-primary mr-4"></i></a>
<a href="#"><i class="fab fa-twitter text-primary mr-4"></i></a>
<a href="#"><i class="fab fa-google-plus-g text-danger mr-4 "></i></a>
<a href="#"><i class="fab fa-linkedin-in text-primary mr-4"></i></a>
<a href="#"><i class="fab fa-instagram text-danger mr-4"></i></a>

</div>
</div>
</div>
</div>


<div class="container text-center text-md-left mt-5">
<div class="row last">
<div class="col-md-3 mx-auto mb-4">
<h6 class="text-uppercase font-weight-bold text-white">The Providers</h6>
<hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"125px", height:"3px"}}></hr>
<p class="text-white last">Lorem ipsum dolor sit amet consectetur, adipisius,tur repellendus nam enim, exercitationem sed eaque perferendis, nobis voluptate laudantium ea et. Beatae, optio.</p>

</div>
<div class="col-md-2 mx-auto mb-4">
<h6 class="text-uppercase font-weight-bold text-white">product</h6>
<hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"77px", height:"3px"}}></hr>
<ul class="list-unstyled text-white">
<li class="my-2"><a href="" class="text-white">Pizza</a></li>
<li class="my-2"><a href="" class="text-white">Hotdog</a></li>
<li class="my-2"><a href="" class="text-white">Berger</a></li>
<li class="my-2"><a href="" class="text-white">Samosa</a></li>
</ul>

</div>
<div class="col-md-3 mx-auto mb-4 ">
<h6 class="text-uppercase font-weight-bold text-white">CONTACT</h6>
<hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"78px", height:"3px"}}></hr>
<ul class="list-unstyled">
<li class="my-2 text-white"><a class="fa fa-home mr-3 text-white"></a>Freeganj Shujalpur</li>
<li class="my-2 text-white"><a class="fa fa-envelope mr-3 text-danger"></a> rkumar4560@gmail.com</li>
<li class="my-2 text-white"><a class="fas fa-phone mr-3 text-white"></a>+919630169487</li>
<li class="my-2 text-white"><a class="fab fa-facebook-f mr-4 text-primary"></a>Facebook</li>
<li class="my-2 text-white"><a class="fab fa-twitter mr-4 text-primary"></a>Twitter</li>
<li class="my-2 text-white"><a class="fab fa-linkedin-in mr-4 text-primary"></a>Linkedin</li>
<li class="my-2 text-white"><a class="fab fa-instagram mr-4 text-danger"></a>Instagram</li>
</ul>
</div>
<div class="col-md-2 mx-auto mb-4">
<h6 class="text-uppercase font-weight-bold text-white">MENU</h6>
<hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"50px", height:"3px"}}></hr>
<ul class="list-unstyled">
<li class="my-2"><a href="">Home</a></li>
<li class="my-2"><a href="">About</a></li>
<li class="my-2"><a href="">Contact</a></li>
<li class="my-2"><a href="">Gallery</a></li>
<li class="my-2"><a href="">Covidtracker</a></li>

</ul>
</div>



</div>



</div>

<div class="footer-copyright text-center py-3 ">
<p className="text-center bg-dark text-white ">@Copyright Mytest.com 2022</p>




</div>


</footer>


</div>


</div>




</>
)
}


export default Covid;