import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./base.scss";
import TabSwitcher from "./components/TabSwitcher/TabSwitcher";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

// Import lazy components outside the component
const DummyList = lazy(() => import("./pages/DummyList/DummyList"));
const DummyChart = lazy(() => import("./pages/DummyChart/DummyChart"));
const DummyTable = lazy(() => import("./pages/DummyTable/DummyTable"));

const MainApp = () => {
  return (
    <>
      <TabSwitcher />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="dummyList" element={<DummyList />} />
          <Route path="dummyTable" element={<DummyTable />} />
          <Route path="dummyChart" element={<DummyChart />} />
          <Route path="/" element={<Navigate to="dummyList" />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MainApp;
