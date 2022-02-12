import React , {useState} from "react"


const TodoApp=()=>{
const[inputData,setInputData]=useState()
const[items,setItems]=useState([])

const addItem=()=>{
    setItems([...items,inputData]);
    setInputData()

}

return(

<div style={{textAlign:"center" ,marginTop:"5%"}}>
<div className="addItems">
<input type="Item" placeholder="Enter your Items"
value={inputData}
onChange={(e)=>setInputData(e.target.value)}

/>
<i className="fa fa-plus add-btn" title="Add items" onClick={addItem}></i>

</div>
<div className="addItems">
<h3>Apple</h3>
<i className="far fa-trash-alt add-btn" title="Del items"></i>
</div>
<div>
<button className="btn effect04">Check List</button>


</div>
</div>   



)
}


export default TodoApp;