import { useContext } from 'react';
import './App.css';
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import DrawerAppBar from "./components/shared/DrawerAppBar";
import { UserContext } from "./context/UserContextProvider";

function App() {
  const { isAuth } = useContext(UserContext);
  return (
    <Router>
      {isAuth ? <DrawerAppBar /> : null}
      <AppRoutes />
    </Router>
  );
}

export default App;
