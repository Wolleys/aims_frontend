import "./App.css";
import axios from "axios";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
