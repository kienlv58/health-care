import { Routes, Route } from "react-router-dom";

import "./App.css";
import RouterMap from "./utils/route-map";
import Layout from "./components/UI/Layout";
import SuspenseWrapper from "./components/navigations/SuspenseWrapper";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const authContext = useContext(AuthContext);
  const homePagePath = authContext.isLogin
    ? "pages/TopPage"
    : "pages/ColumnPage";

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path={RouterMap.HOME}
          element={<SuspenseWrapper path={homePagePath} />}
        />
        <Route
          index
          path={RouterMap.TOP}
          element={<SuspenseWrapper isProtected path="pages/TopPage" />}
        />
        <Route
          path={RouterMap.RECORD}
          element={<SuspenseWrapper isProtected path="pages/MyRecordPage" />}
        />
        <Route
          path={RouterMap.COLUMN}
          element={<SuspenseWrapper path="pages/ColumnPage" />}
        />
        <Route
          path={RouterMap.LOGIN}
          element={<SuspenseWrapper path="pages/LoginPage" />}
        />
        <Route
          path={RouterMap.NOT_FOUND}
          element={<SuspenseWrapper path="pages/NotFoundPage" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
