import React, { useEffect, useState } from "react";
import "./EmployeeDetailPage.sass";
import { useTranslation } from "react-i18next";

export default function EmployeeDetailPage() {
  const { t } = useTranslation();

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const selectedEmployeeFromStorage = JSON.parse(
      localStorage.getItem("selectedEmployee")
    );

    setSelectedEmployee(selectedEmployeeFromStorage);
  }, []);

  return (
    <div className="employee-detail-container">
      <div className="employee-detail-area">
        <div>
          <img
            className="employee-image"
            src={selectedEmployee?.imageUrl}
            alt="img"
          />
        </div>
        <div className="employee-info-container">
          <div>
            <span className="employee-info-title">{t("TotalVotes")}: </span>
            {selectedEmployee?.votes}
          </div>
          <div>
            <span className="employee-info-title">{t("EmployeeId")}: </span>
            {selectedEmployee?.id}
          </div>
          <div>
            <span className="employee-info-title">{t("Name")}: </span>
            {selectedEmployee?.firstName + " " + selectedEmployee?.lastName}
          </div>
          <div>
            <span className="employee-info-title">{t("Age")}: </span>
            {selectedEmployee?.age}
          </div>
          <div>
            <span className="employee-info-title">{t("DateOfBirth")}: </span>
            {selectedEmployee?.dob}
          </div>
          <div>
            <span className="employee-info-title">{t("Email")}: </span>
            {selectedEmployee?.email}
          </div>
          <div>
            <span className="employee-info-title">{t("Contact")}: </span>
            {selectedEmployee?.contactNumber}
          </div>
          <div>
            <span className="employee-info-title">{t("Address")}: </span>
            {selectedEmployee?.address}
          </div>
          <div>
            <span className="employee-info-title">{t("Salary")}: </span>
            {selectedEmployee?.salary}
          </div>
        </div>
      </div>
    </div>
  );
}
