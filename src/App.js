import "./App.css";
import axios from "axios";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import DrawerAppBar from "./components/shared/DrawerAppBar";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
