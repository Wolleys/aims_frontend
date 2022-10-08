import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import DrawerAppBar from "./components/shared/DrawerAppBar";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
