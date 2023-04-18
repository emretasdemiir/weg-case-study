import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import EmployeeDetailPage from "./components/EmployeeDetailPage/EmployeeDetailPage";

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
