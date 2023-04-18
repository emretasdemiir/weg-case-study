import React, { useEffect, useRef } from "react";
import fetchEmployees from "../../api/fetchEmployees";
import { useNavigate } from "react-router-dom";

import "./Homepage.sass";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { setEmployeeDatas } from "../../redux/homepageSlice";
import { setSelectedEmployee } from "../../redux/employeeDetailSlice";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Homepage() {
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const { t } = useTranslation();

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

    const findIndexOfCurrentInputToFocus = sortedCopyOfEmployeeDatas?.findIndex(
      (data) => data.votes === value
    );
    inputRef.current[findIndexOfCurrentInputToFocus].focus();
  };

  const handleLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="language-change-container">
        <span className="fw-bold">{t("SwitchLanguage")}:</span>
        <button className="ml-10" onClick={handleLanguage} value={"en"}>
          en
        </button>
        <button className="ml-10" onClick={handleLanguage} value={"tr"}>
          tr
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>{t("ProfileImage")}</th>
            <th>{t("EmployeeId")}</th>
            <th>{t("Name")}</th>
            <th>{t("Age")}</th>
            <th>{t("Vote")}</th>
          </tr>
        </thead>
        <tbody>
          {employeeDatas?.length > 0 &&
            employeeDatas?.map((employee, index) => (
              <tr key={index} onClick={(e) => handleRowClick(employee, index)}>
                <td className="employee-photo">
                  <img src={employee.imageUrl} alt="img" />
                </td>
                <td className="fw-bold">{employee.id}</td>
                <td>{employee.firstName + " " + employee.lastName}</td>
                <td>{employee.age}</td>
                <td style={{ textAlign: "center" }}>
                  <input
                    className="input-style"
                    ref={(el) => (inputRef.current[index] = el)}
                    style={{}}
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
        </tbody>
      </table>
    </div>
  );
}
