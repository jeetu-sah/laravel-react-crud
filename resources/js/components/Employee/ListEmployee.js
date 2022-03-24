import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ListEmployee() {

    const [employeeList, setEmployeeList] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        console.log("Working mounting")
    });

    return (
        <>
            <div className="container mt-3 mb-3">
                <div className="row">
                    <h2>List Emplyee</h2>
                </div>
                <div className="mt-3">
                    <table class="table">
                        <thead className="table-light">
                            <tr>
                                <th scope="row">#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListEmployee;
