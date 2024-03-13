import React, { useState } from "react";
import Footer from "../../include/Footer";
import Sidebar from "../../include/Sidebar";
import Topbar from "../../include/Topbar";
import { NavLink } from "react-router-dom";
import "../../../src/App.css";

export default function Order() {
  let [array, setArray] = useState([]);
  let [inputdata, setInputdata] = useState({ name: "", date: "", status: "" });
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { name, date, status } = inputdata;

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  // to generate random order Id
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function addinputdata() {
    if (name === "" || date === "" || status === "") {
      alert("Enter Customer Name and Order date and status");
    } else {
      setArray([...array, { id: getRandomInt(10000), name, date, status }]);
      setInputdata({ name: "", date: "", status: "" });
    }
  }

  // deleting row
  function deletedata(i) {
    console.log(i, "this index row want to be delete");
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  // updatedata
  function updatedata(i) {
    let { id, name, date, status } = array[i]; //this perticular index no row data shoud be update so we get this index no row data in name or number
    setInputdata({ id, name, date, status });
    setBolin(true);
    setIndex(i);
  }

  //know add data at perticular index means update it on that index
  function updateinfo() {
    let total = [...array];
    let initialId = total[index].id;
    total.splice(index, 1, { id: initialId, name, date, status });
    setArray(total);
    setBolin(false);
    setInputdata({ name: "", date: "", status: "" });
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
                <h1 className="h3 mb-0 text-gray-800">Order List </h1>
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
                  <input
                    type="text"
                    value={inputdata.name}
                    name="name"
                    placeholder="Enter Customer Name"
                    onChange={data}
                  />
                  <input
                    type="date"
                    value={inputdata.date || ""}
                    name="date"
                    placeholder="Enter Order Date"
                    onChange={data}
                  />
                  <select className="s" name="status" onChange={data}>
                    <option value={inputdata.status || ""}>
                      Enter Order Status
                    </option>
                    <option value={"Order placed"}>Order placed</option>
                    <option value={"Processing"}>Processing</option>
                    <option value={"Shipped"}>Shipped</option>
                    <option value={"Delivered"}>Delivered</option>
                  </select>
                  <button
                    className="b5"
                    onClick={!bolin ? addinputdata : updateinfo}
                  >
                    {!bolin ? `Add data` : `Update data`}
                  </button>

                  <br />
                </div>
                <div class="container-fluid">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>Order Id</th>
                        <th>Customer Name</th>
                        <th>Order date</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                      </tr>
                      {array &&
                        array.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.date}</td>
                              <td>{item.status}</td>
                              <td>
                                <button
                                  className="b2"
                                  onClick={() => updatedata(i)}
                                >
                                  update
                                </button>
                              </td>
                              <td>
                                <button
                                  className="b3"
                                  onClick={() => deletedata(i)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
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
        
      </div>
    </div>
  );
}
