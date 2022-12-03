import "./App.css";
import "./assets/css/style.css";
import axios from "axios";
import AppRoutes from "./routes";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContextProvider";
import { AuthContextProvider } from "./context/AuthContextProvider";
import ErrorPage from "./components/shared/ErrorBoundary/ErrorPage";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";
axios.defaults.withCredentials = true;

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="theme" id={theme}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <AuthContextProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AuthContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
