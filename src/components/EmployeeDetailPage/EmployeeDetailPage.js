import React, { useEffect, useState } from "react";
import "./EmployeeDetailPage.sass";

export default function EmployeeDetailPage() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const selectedEmployeeFromStorage = JSON.parse(
      localStorage.getItem("selectedEmployee")
    );

    setSelectedEmployee(selectedEmployeeFromStorage);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "50px",
          width: "20%",
          border: "1px solid black",
        }}
      >
        <div>
          <img src={selectedEmployee?.imageUrl} alt="img" />
        </div>
        <div
          style={{
            marginTop: "25px",
            lineHeight: "1.8",
          }}
        >
          <div>
            <span className="employee-info-title">Total Votes: </span>
            {selectedEmployee?.votes}
          </div>
          <div>
            <span className="employee-info-title">Employee Id: </span>
            {selectedEmployee?.id}
          </div>
          <div>
            <span className="employee-info-title">Name: </span>
            {selectedEmployee?.firstName + " " + selectedEmployee?.lastName}
          </div>
          <div>
            <span className="employee-info-title">Age: </span>
            {selectedEmployee?.age}
          </div>
          <div>
            <span className="employee-info-title">Date of Birth: </span>
            {selectedEmployee?.dob}
          </div>
          <div>
            <span className="employee-info-title">Email: </span>
            {selectedEmployee?.email}
          </div>
          <div>
            <span className="employee-info-title">Contact Number: </span>
            {selectedEmployee?.contactNumber}
          </div>
          <div>
            <span className="employee-info-title">Address: </span>
            {selectedEmployee?.address}
          </div>
          <div>
            <span className="employee-info-title">Salary: </span>
            {selectedEmployee?.salary}
          </div>
        </div>
      </div>
    </div>
  );
}
