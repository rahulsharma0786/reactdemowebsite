import React, { useState } from "react";
import Data from "./Data";


const Gallery=()=>{
const[item,setItems]=useState(Data)

const filterItem=(cateItem)=>{
const udatedItem=Data.filter((curElem)=>{
return curElem.category===cateItem

})
setItems(udatedItem)

}


return(
<>
<h1 className="mt-5 text-center main-heading ">Order Your Favourite Dish</h1>
<hr/>
<div className="menu-tabs container  min ">
<div className="menu-tab d-flex justify-content-around ">
  <button className="btn btn-warning bmar" onClick={()=>filterItem('breakfast')}>Breakfast</button>  
  <button className="btn btn-warning" onClick={()=>filterItem('Lunch')}>Lunch</button>  
  <button className="btn btn-warning" onClick={()=>filterItem('Evening')}>Evening</button>  
  <button className="btn btn-warning" onClick={()=>filterItem('Dinner')}>Dinner</button> 
  <button className="btn btn-warning" onClick={()=>setItems(Data)}>All</button>  
    </div>    
</div>

<div className="container-fluid mb-5">
<div className="row text-center pt-5">

{
  item.map((curElem)=>{
return(
<>
<div className="col-lg-4 col-md-4 col-12 my-3 mb-5">
<div class="card">
  <img src={curElem.image} style={{width:"307px", height:"162px"}} class="card-img-top" className="img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" class="text-primary">{curElem.name}</h5>
    
    <h5 class="card-text, text-danger">{curElem.price}</h5>
    
  </div>
</div>

</div>

  

</>

)
  })


  }

  <footer class="page-footer bg-dark">
<div class="bg-dark">
<div class="container-fluid">
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










export default Gallery;
