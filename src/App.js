import "./App.css";
import axios from "axios";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContextProvider";
import ErrorPage from "./components/shared/ErrorBoundary/ErrorPage";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";
axios.defaults.withCredentials = true;

function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <AuthContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

export default App;
