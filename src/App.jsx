import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/styles.css";
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
