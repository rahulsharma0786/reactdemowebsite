import React, { useEffect, useState } from "react";

const FetchApi=()=>{
const[data,setdata]=useState([])


const getData=async()=>{

try{

const myApi=await fetch("https://api.covid19api.com/summary")
const res=await myApi.json()
console.log(res.Countries[76])
setdata(res.Countries)

}catch(err){
console.log(err)

}


}



useEffect(()=>{

getData();


},[])
return(
<>
{

data.map((curElem)=>{
return(
<>
<h3>total={curElem.Country}</h3>



</>
)


})



}

<h1>covid</h1>
<p>country{}</p>

</>

)

}
export default FetchApi;