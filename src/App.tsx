import { Routes, Route } from "react-router-dom";

import "./App.css";
import RouterMap from "./utils/route-map";
import Layout from "./components/UI/Layout";
import SuspenseWrapper from "./components/navigations/SuspenseWrapper";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import React from "react";

const TopPage = React.lazy(() => import("./pages/TopPage"));
const MyRecordPage = React.lazy(() => import("./pages/MyRecordPage"));
const ColumnPage = React.lazy(() => import("./pages/ColumnPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  const authContext = useContext(AuthContext);
  const HomePage = authContext.isLogin ? TopPage : ColumnPage;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path={RouterMap.HOME}
          element={
            <SuspenseWrapper>
              <HomePage />
            </SuspenseWrapper>
          }
        />
        <Route
          index
          path={RouterMap.TOP}
          element={
            <SuspenseWrapper isProtected>
              <HomePage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={RouterMap.RECORD}
          element={
            <SuspenseWrapper isProtected>
              <MyRecordPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={RouterMap.COLUMN}
          element={
            <SuspenseWrapper>
              <ColumnPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={RouterMap.LOGIN}
          element={
            <SuspenseWrapper>
              <LoginPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path={RouterMap.NOT_FOUND}
          element={
            <SuspenseWrapper>
              <NotFoundPage />
            </SuspenseWrapper>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
