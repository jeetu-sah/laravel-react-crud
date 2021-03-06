import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";


function CreateEmployee(props) {

    const history = useHistory();
   
    const [employeeDetails, setEmployeeDetails] = useState({
        first_name:'Jitu',
        last_name:'Webkul',
        email:'jitendrasahu17996@gmail.com',
        mobile:'8887603331',
        password:'123',
        accept_agreement:true,
    });

    const [ msgResponse , setMsgResponse] = useState({
        msgStatus:false,
        msg:'',
        msgClass:'',
    });
   
    const handleChange = (e) =>{
        let fieldName = e.target.name;
        let valueName = e.target.value;

        setEmployeeDetails({ ...employeeDetails, [fieldName]: valueName });
    }

    const userSubmit = (e,props) => {
        e.preventDefault();
        let createEmployeeUrl = `${window.api_url}/employee/create`;
    
        window.$axios.post(createEmployeeUrl , employeeDetails)
                            .then( (res) => {
                                if(res.data.status == 200){
                                    var alertClass = 'alert alert-success';
                                }else if(res.data.status == 400){
                                    var alertClass = 'alert alert-danger';
                                }
                                setMsgResponse({ ...msgResponse, msgStatus:res.data.status , 
                                                                msg:res.data.msg, msgClass:alertClass});
                            });
    }

    const showMsg = (props) =>{
        if(msgResponse.msgStatus){
            if(msgResponse.msgStatus == 200){
                setTimeout(function(){ history.push('/'); } , 1000)
            }
            return (
                <div className={msgResponse.msgClass} role="alert">
                    {msgResponse.msg}
                </div>
            );
        }
    }


    return (
        <>
            <div className="container mt-3 mb-3">
                <div className="row">
                    <h2>Create Emplyees</h2>
                </div>
                {showMsg()}
                
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
