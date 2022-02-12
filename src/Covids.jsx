import React, { useEffect, useState } from "react";

const Covid=()=>{
  const[users,setData]=useState([])  

const getCovid=async()=>{
try{
const res=await fetch("https://api.covid19api.com/summary")
const actualData=await res.json();
console.log(actualData.Countries)
setData(actualData.Countries)
}catch(err){
console.log(err)

}

}

useEffect(()=>{

getCovid();


},[]);

return(
<>
<h1>Covid19App</h1>
{
users.map((curElem)=>{
return(
<>
<div style={{textAlign:"justify",color:"blue"}}>
<h4>Country death:{curElem.Country}</h4>
<h4>total Newdeath:{curElem.NewDeaths}</h4>
<h4>My CountryCode:{curElem.CountryCode}</h4>
<h4>confirmed Date:{curElem.Date}</h4>
<h4>confirmedCasesForeign:{curElem.TotalConfirmed}</h4>
</div>
</>
)


})

}
</>

)
}
export default Covid;