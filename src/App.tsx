import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Loading from "./components/UI/Loading";
import RouterMap from "./utils/route-map";
import Layout from "./components/UI/Layout";
import SuspenseWrapper from "./components/UI/SuspenseWrapper";

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path={RouterMap.HOME}
            element={<SuspenseWrapper path="pages/TopPage" />}
          />
          <Route
            path={RouterMap.RECORD}
            element={<SuspenseWrapper path="pages/MyRecordPage" />}
          />
          <Route
            path={RouterMap.COLUMN}
            element={<SuspenseWrapper path="pages/ColumnPage" />}
          />
          <Route
            path={RouterMap.NOT_FOUND}
            element={<SuspenseWrapper path="pages/NotFoundPage" />}
          />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
