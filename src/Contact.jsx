import React from "react";


const Contact=()=>{
return(
<>
<div className="container mb-3">
<div className="container-fluid pt-3">
<h1 className="text-center text-capitalize ">Contact</h1>
<hr className="w-25 mx-auto"/>
<div className="w-50 mx-auto">
<form action="/action_page.php">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" placeholder="Enter your name" id="name"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Contact:</label>
    <input type="password" class="form-control" placeholder="Enter Contact" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="password" class="form-control" placeholder="Enter email" id="pwd"/>
  </div>


  <div className="form-group mb-2">
  <label>Textarea</label>
  <textarea className="form-control"></textarea>

  </div>
    
      
  <button type="submit" className="btn btn-primary ">Submit</button>
</form>
</div>
</div>
</div>
<section className="bg-primary mb-5 para ">
<article class="py-5 text-center text-white">
<div>
  <h5 className="display-8">May i hellp you:9630169487</h5>
  <p>If you want Email me: rkumar45650@gmail.com</p>
  <button className="btn btn-warning">Contact Now</button>
</div>

</article>

</section>

<footer class="page-footer bg-dark ">
<div class="bg-dark">
<div class="container">
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

</>
)



}
export default Contact;