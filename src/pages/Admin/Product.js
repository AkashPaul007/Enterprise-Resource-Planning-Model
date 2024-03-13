import React, { useState } from 'react'
import Footer from "../../include/Footer";
import Sidebar from "../../include/Sidebar";
import Topbar from "../../include/Topbar";
import { NavLink } from "react-router-dom";
import "../../../src/App.css"

export default function Product() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({name:"",category:"",price:"",stock:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)
    let {name,category,price,stock}=inputdata;




    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

 
    function addinputdata(){

        if(name==="" && category==="" && price==="" && stock===""){
            alert("Enter Product Name , category ,price & stock")
        }
        else{
        setArray([...array,{name,category,price,stock}])
        // console.log(inputdata)
        setInputdata({name:"",category:"",price:"",stock:""})
    }
    }



// deleting row 
function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}

// updatedata
function updatedata(i){

    let {name,category,price,stock}=array[i]//this particular index no row data shoud be update so we get this index no row data in name or number 
    setInputdata({name,category,price,stock})
    setBolin(true)
    setIndex(i)

}

//know add data at perticular index means update it on that index
function updateinfo(){
    let total=[...array]
    total.splice(index,1,{name,category,price,stock})
    setArray(total)
     setBolin(false)
     setInputdata({name:"",category:"",price:"",stock:""})
}
  return (
    <div>
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <Topbar />

          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Product List </h1>
              <NavLink
                className=" d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
                to="/"
              >
                <i className="fa fa-dashboard" />
                <span>Dashbord</span>
              </NavLink>
              {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a> */}
            </div>
    <div>
        <div className="App">
            <input type="text" value={inputdata.name || ""} name='name'  placeholder='Enter Product Name' onChange={data}  />
            <input type="text" value={inputdata.category || ""} name='category'  placeholder='Enter Category' onChange={data}  />
            <input type="text" value={inputdata.price || ""} name="price" placeholder='Enter Product Price' onChange={data} />
            <input type="number" value={inputdata.stock || ""} name='stock'  placeholder='Enter stock quantity' onChange={data}  />
            <button className='b5' onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add data`:`Update data`}</button>

            <br />
        </div>
        <div class="container-fluid">
            <table class="table" >
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                {

array && array.map(
(item,i)=>{
    return(
        <tr key={i}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td><button className='b2' onClick={()=>updatedata(i)}>update</button></td>
            <td><button className='b3' onClick={()=>deletedata(i)}>Delete</button></td>
        </tr>
    )
}
)
                }
                </tbody>
            </table>
            </div>
    </div>
    
    </div>
    
              {/* /.container-fluid */}
            </div>

            {/* End of Main Content */}
            {/* Footer */}
            <Footer />
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
      </div>
  )
}
