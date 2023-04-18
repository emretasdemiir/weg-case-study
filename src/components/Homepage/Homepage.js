import React, { useEffect } from "react";
import fetchEmployees from "../../api/fetchEmployees";
import { useNavigate } from "react-router-dom";

import "./Homepage.sass";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { setEmployeeDatas } from "../../redux/homepageSlice";
import { setSelectedEmployee } from "../../redux/employeeDetailSlice";

export default function Homepage() {
  const navigate = useNavigate();

  const employeeDatas = useSelector((state) => state.homepage.employeeDatas);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleRowClick = (employee, index) => {
    store.dispatch(setSelectedEmployee(employee));
    localStorage.setItem("selectedEmployee", JSON.stringify(employee));
    navigate(`/employee-detail/${index}`);
  };

  const handleOnChange = (value, employee, index) => {
    const copyOfEmployee = Object.assign({}, employee);
    const copyOfEmployeeDatas = Object.assign([], employeeDatas);
    copyOfEmployee.votes = value;
    copyOfEmployeeDatas.splice(index, 1, copyOfEmployee);

    const sortedCopyOfEmployeeDatas = copyOfEmployeeDatas.sort(
      (a, b) => b.votes - a.votes
    );
    store.dispatch(setEmployeeDatas(sortedCopyOfEmployeeDatas));
  };

  return (
    <div>
      <table>
        <tr>
          <th>Profile Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Vote</th>
        </tr>
        {employeeDatas?.length > 0 &&
          employeeDatas?.map((employee, index) => (
            <tr key={index} onClick={(e) => handleRowClick(employee, index)}>
              <td>
                <img src={employee.imageUrl} alt="img" />
              </td>
              <td>{employee.firstName + " " + employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.contactNumber}</td>
              <td style={{ textAlign: "center" }}>
                <input
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) =>
                    handleOnChange(Number(e.target.value), employee, index)
                  }
                  type="number"
                  min={0}
                  value={employee.votes}
                />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
