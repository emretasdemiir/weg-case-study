import React from "react";
import "./ErrorPage.sass";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="error-page-container">
      <h1 className="title">{t("ErrorPageTitle")}</h1>
      <h2 className="navigate-link" onClick={() => navigate("/")}>
        {t("GoToHomepage")}
      </h2>
    </div>
  );
}
