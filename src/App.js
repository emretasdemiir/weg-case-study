import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import EmployeeDetailPage from "./components/EmployeeDetailPage/EmployeeDetailPage";

// Localization Imports
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationsEn } from "./localization/en";
import { translationsTr } from "./localization/tr";

// Localization Setup
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    tr: { translation: translationsTr },
  },
  lng: i18n.language,
  fallbackLng: "tr",
  interpolation: { escapeValue: false },
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="employee-detail/:index"
          element={<EmployeeDetailPage />}
        ></Route>
        {/* <Route path="create-request" element={<CreateRequestPage />}></Route>
                <Route path="requests-list" element={<RequestsListPage />}>
                  <Route index={true} element={<RequestsList />}></Route>
                  <Route path="request-detail/:index" element={<RequestDetailPage />}></Route>
                </Route>
                <Route path="provided-requests" element={<ProvidedRequestsPage />}></Route> */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
