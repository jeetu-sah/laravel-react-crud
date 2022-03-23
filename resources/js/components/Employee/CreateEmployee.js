import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function CreateEmployee() {

    const [employeeDetails, setEmployeeDetails] = useState({
        first_name:'Jitu',
        last_name:'Webkul',
        email:'jitendrasahu17996@gmail.com',
        mobile:'8887603331',
        password:'123',
        accept_agreement:true,
    });
   
    const handleChange = (e) =>{
        const fieldName = e.target.name;
        
        employeeDetails.forEach(function(key , value){
            console.log("Ket" , key);
            console.log("value" , value);
        });

        console.log(employeeDetails)
        //setEmployeeDetails({[fieldName]:e.target.value})
    }

    const userSubmit = (e) => {
        e.preventDefault();
        console.log(window.api_url)
        let createEmployeeUrl = `${window.api_url}/employee/create`;
    
        window.$axios.post(createEmployeeUrl , employeeDetails)
                            .then( (res) => {
                                console.log("Success form submit")
                            });


    }


    return (
        <>
            <div className="container mt-3 mb-3">
                <div className="row">
                    <h2>Create Emplyees</h2>
                </div>
                <form onSubmit={userSubmit}>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="first_name" 
                                    name="first_name"
                                    value={employeeDetails.first_name}
                                    onChange={handleChange}
                                    placeholder="First Name" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="last_name" 
                                    name="last_name"
                                    value={employeeDetails.last_name}
                                    onChange={handleChange}
                                    placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="email" 
                                    name="email"
                                    value={employeeDetails.email}
                                    onChange={handleChange}
                                    placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile Number</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="mobile" 
                                    name="mobile"
                                    value={employeeDetails.mobile}
                                    onChange={handleChange}
                                    placeholder="Mobile" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="password" 
                                    name="password"
                                    value={employeeDetails.password}
                                    onChange={handleChange}
                                    placeholder="Password" />
                                <small id="emailHelp" className="form-text text-muted">Create strong password.</small>
                            </div>
                        </div>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" 
                            checked={employeeDetails.accept_agreement} 
                            onChange={handleChange}
                            className="form-check-input" 
                            id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Accept all Agreement</label>
                    </div>
                    <button type="submit" 
                        className="btn btn-primary mt-2">Submit</button>
                    </form>
            </div>
        </>
    );
}

export default CreateEmployee;
