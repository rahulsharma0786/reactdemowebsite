import React from "react";
import web2 from "../src/Image/pizza20.jpg"
import web3 from "../src/Image/pizza19.jpg"
import web4 from "../src/Image/burger.jpg"
import web5 from "../src/Image/hotdog.jpg"
import web6 from "../src/Image/maggi.jpg"
import web7 from "../src/Image/samosa.jpg"
import web8 from "../src/Image/khaman1.jpg"
import web9 from "../src/Image/pizza5.jpg"
import web10 from "../src/Image/food.jpg"
import web11 from "../src/Image/pizza6.jpg"
import web12 from "../src/Image/khaman1.jpg"



const Home=()=>{

return(
<>

<div class="img-jmbo ">

<div class="container-fluid mb-5">
<div class="text">
<h1 class="text-white ">WELCOME TO KHANA KHAJANA</h1>
<p class="text-white">Do You Love Eating</p>
<div class="btn btn-warning">yas</div>
<div class="btn btn-warning">No</div>
</div>
</div>



<section class="container-fluid text-center pt-5 para ">
<h1 class="text-center para" >SERVICES</h1>
<p class="text-muted para">Give You Better Services Exprience</p>

<hr class="w-25 mx-auto text-danger"/>

<div class="row para ">
<div class="col-lg-4 col-md-4 col-sm-4 col-12 d-block m-auto ">
<div class="imgsetting d-block m-auto bg-warning text-center"><i class="fas fa-baby-carriage fa-3x text-white"></i> 
</div>
<h2>Food Serving</h2>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio aperiam asperiores iure dolor expedita ducimus iste vero, corporis tempore animi? Repudiandae magnam eveniet fugit atque. Nesciunt sequi provident asperiores.</p>
</div>

<div class="col-lg-4 col-md-4 col-sm-4 col-12 d-block m-auto ">
<div class="imgsetting d-block m-auto bg-warning"><i class="fas fa-glass-martini-alt fa-3x text-white"></i>
</div>
<h2>Soft Drink</h2>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio aperiam asperiores iure dolor expedita ducimus iste vero, corporis tempore animi? Repudiandae magnam eveniet fugit atque. Nesciunt sequi provident asperiores.</p>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-12 d-block m-auto ">
<div class="imgsetting d-block m-auto bg-warning"><i class="far fa-burger-soda fa-3x text-white"></i>
</div>
<h2>Fast Food</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio aperiam asperiores iure dolor expedita ducimus iste vero, corporis tempore animi? Repudiandae magnam eveniet fugit atque. Nesciunt sequi provident asperiores.</p>
</div>

</div>

</section>

<div class="container-fluid pt-4 test last para">
<h1 class="text-center text-capitalize para ">ABOUT US</h1>
<p class="text-muted text-center para">Do You Know My Website</p>
<hr class="w-25 mx-auto text-danger para"/>

<div class="row pt-3 para ">

<div class="col-lg-6 col-md-6 col-12 ">
<h1 class="text-dark">Why Wist My Website</h1>

<p class="last text-dark">Hotel Recovery Strategy: rategy: Your COVID-19 Marketing Plan Preparing for a “new normal” during COVID means having a defined hotel recovery strategy. Understand when and how travel demand will pick up, how to engage potential guests, and maximize conversions directly on your hotel website.“new normal” during COVID means having a defined hotel recovery strategy. Understand when and how travel demand will pick up, how to engage potential guests, and maximize conversions directly on your hotel website.</p>
<a href="#" class="btn btn-warning">More</a>
</div>

<div className="col-lg-6 col-md-6 col-12 para">
<img src={web3} style={{width:"490px", height:"250px"}} className="img-fluid" />

</div>
</div>
</div>



<div class="container-fluid pt-3 test para ">
<h1 className="text-center text-capitalize para ">DELEVERY</h1>
<p class="text-muted text-center para">On Time Delevery</p>
<hr className="w-25 mx-auto text-danger para"/>

<div className="row pt-2 para ">
<div className="col-lg-6 col-md-6 col-12">
<img src={web2} style={{width:"490px", height:"250px"}} className="img-fluid"/>

</div>
<div className="col-lg-6 col-md-6 col-12 last">
<h1 class="text-dark">Why Choice Me</h1>

<p class="last text-dark">Hotel Recovery Hotel Recovery Strategy: Your COVID-19 Marketing Plan Preparing for a “new normal” during COVID means having a defined hotel recovery strategy. Understand when and how travel demand will pick up, how to engage potential guests, and maxiStrategy: Your COVID-19 Marketing Plan Preparing for a “new normal” during COVID means having a defined hotel recovery strategy. Understand when and how travel demand will pick up, how to engage potential guests, and maximize conversions directly on your hotel website.</p>
<a href="#" class="btn btn-warning">More</a>
</div>
</div>
</div>

<section >
<div class="container-fluid pt-5 test">
<h1 class="text-center text-capitalize para ">GALLERY</h1>
<p class="text-muted text-center para">Please Choice One</p>

<hr class="w-25 mx-auto text-danger para"/>

<div class="row container pt-3 card1 para">
<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto mb-5 text-center ">
<div class="card para ">
<img class="card-img-top " src={web4} style={{width:"300px", height:"200px"}} className="img-fluid" />
<div class="card-body ">
<h5 class="card-title text-center">Hotdog</h5>
<a href="#" class="btn btn-primary ">See More</a>
</div>
</div>    
</div>

<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto mb-5 text-center">
<div class="card para" >
<img class="card-img-top" src={web5} style={{width:"300px", height:"200px"}} class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Berger</h4>
<a href="#" class="btn btn-primary">see More</a>
</div>
</div>    
</div>
<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto mb-5 text-center">
<div class="card para" >
<img class="card-img-top" src={web6} style={{width:"300px", height:"200px"}} class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Maggi</h4>
<a href="#" class="btn btn-primary">see More</a>
</div>
</div>    
</div>

<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto mb-5 text-center">
<div class="card para">
<img class="card-img-top" src={web7} style={{width:"300px", height:"200px"}} class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Samosa</h4>
<a href="#" class="btn btn-primary">see More</a>
</div>
</div>    
</div>

<div class="col-lg-4 col-md-4 col-sm- col-10 d-block m-auto mb-5 text-center">
<div class="card para" >
<img class="card-img-top" src={web8} style={{width:"300px", height:"200px"}}  class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Khaman</h4>
<a href="#" class="btn btn-primary">See More</a>
</div>
</div>    
</div>
<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto mb-5 text-center">
<div class="card para" >
<img class="card-img-top" src={web9} style={{width:"300px", height:"200px"}} class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Pizza</h4>
<a href="#" class="btn btn-primary">See More</a>
</div>
</div>    
</div>
<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto mb-5 text-center">
<div class="card para">
<img class="card-img-top" src={web10} style={{width:"300px", height:"200px"}} class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Mix Dish</h4>
<a href="#" class="btn btn-primary">See More</a>
</div>
</div>    
</div>

<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto mb-5 text-center">
<div class="card para" >
<img class="card-img-top" src={web11} style={{width:"300px", height:"200px"}} class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Chiness Pizza</h4>
<a href="#" class="btn btn-primary">See More</a>
</div>
</div>    
</div>
<div class="col-lg-4 col-md-4 col-sm-12  col-10 d-block m-auto mb-5 text-center">
<div class="card para " >
<img class="card-img-top" src={web12} style={{width:"300px", height:"200px"}} class="img-fluid"/>
<div class="card-body">
<h4 class="card-title text-center">Khaman</h4>
<a href="#" class="btn btn-primary">See More</a>
</div>
</div>    
</div>


</div>
</div>
</section>


<section className="bg-primary mb-4 pt-5 container-fluid ">
<article className="py-5">
<div className="text-center text-white para">
  <h3 className="display-5">Want to Join</h3>
  <p>Be a part of our Family</p>
  <button className="btn btn-warning" data-toggle="modal" data-target="#myModal">Join Now</button>
</div>

  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
     
        <div class="modal-header">
          <h4 class="modal-title">Singup</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
      
        <div class="modal-body">
        <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        
       
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  


</article>

</section>
<div className="container mt-1 mb-4 para">
<div className="container-fluid pt-1 para">
<h1 className="text-center text-capitalize para">CONTACT</h1>
<hr className="w-25 mx-auto para"/>
<div className="w-50 mx-auto para">
<form action="/action_page.php para">
  <div class="form-group para ">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group para">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div className="form-group para">
  <label>Textarea</label>
  <textarea className="form-control mb-2"></textarea>

  </div>
    
      
  <button type="submit" className="btn btn-primary pt-2">Submit</button>
</form>
</div>
</div>
</div>

<section class="container  text-center mb-5">
<h1 class=" para">SOCIAL MEDIA</h1>
<p class="para">Follow Me</p>



<div class="row  para">
<div class="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto para ">
<div class="imgsetting d-block m-auto bg-primary "><i class="fab fa-facebook-f fa-3x text-white "></i> 
</div>
<h2>Facebook</h2>
<p>Please Wiste My Page</p>
<a class="btn btn-sm btn-primary mb-2" id="fire" href="https://www.facebook.com/profile.php?id=100002165622906">CLICK</a>



</div>



<div class="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto  ">
<div class="imgsetting d-block m-auto bg-danger"><i class="fab fa-instagram fa-3x text-white"></i>
</div>
<h2>Instagaram</h2>
<p>Check My Real</p>
<a class="btn btn-sm btn-primary mb-2" id="fire" href="https://www.google.com/">CLICK</a>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto ">
<div class="imgsetting d-block m-auto bg-primary"><i class="fab fa-twitter fa-3x text-white"></i>
</div>
<h2>Twitter</h2>
<p>Tweet Me</p>
<a class="btn btn-sm btn-primary mb-2" id="fire" href="https://www.google.com/">CLICK</a>
</div>

</div>

</section>

<footer class="page-footer bg-dark para">
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
<h6 class="text-uppercase font-weight-bold text-white ">The Providers</h6>
<hr class="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"125px", height:"3px"}}></hr>
<p class="text-white last ">Lorem ipsum dolor sit amet consectetur,adipisius,tur repellendus nam enim,exercitationem sed eaque perferendis, nobis voluptate laudantium ea et.Beatae, options.</p>

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
<li class="my-2"><a href="/">Home</a></li>
<li class="my-2"><a href="/About">About</a></li>
<li class="my-2"><a href="/contact">Contact</a></li>
<li class="my-2"><a href="">Gallery</a></li>
<li class="my-2"><a href="">Covidtracker</a></li>

</ul>
</div>



</div>



</div>

<div class="footer-copyright text-center py-3 ">
<p className="text-center bg-dark text-white ">@Copyright MYtest.com 2022</p>




</div>


</footer>


</div>








</>



)


}
export default Home;