import React,{useEffect, useState} from "react";


const UseEfectApi=()=>{
const[users,setUsers]=useState([])

const getUsers=async()=>{
const response=await fetch("https://api.rootnet.in/covid19-in/stats/latest")
setUsers(await response.json());


}

useEffect(()=>{
getUsers();


},[])

return (
<>
<h2 className="text-center" >My Covid App</h2>
<div className="container-fluid mt-5">
<div className="row text-center">

{
  users.map((curElem)=>{
return(

<div className="col-10 col-md-4 mt-5">
<div className="card p-2">
<div className="d-flex align-items-center">
<div className="image"><img src={curElem.total} className="round" width="155"/></div>
<div className="ml-3 w-100">
<h4 className="mb-0 textLeft">{curElem.discharged}</h4><span className="textLeft">webdevloper</span>
<div className="p-2 mt-0 bg-primary d-flex justify-content-between rounded text-white state">
<div className="d-flex flex-colum"><span className="artical">Artical</span><span className="number1">38</span></div>
<div className="d-flex flex-colum"><span className="followers">followers</span><span className="number1">38</span></div>
<div className="d-flex flex-colum"><span className="Rating">Rating</span><span className="number1">38</span></div>


</div>
</div>
</div>
</div>
</div>

)
  })
}
</div>
</div>
</>
)
}

export default UseEfectApi;