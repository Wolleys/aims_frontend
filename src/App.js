import "./App.css";
import axios from "axios";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContextProvider";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
