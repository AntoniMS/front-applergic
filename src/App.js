import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DiaryPage from "./pages/DiaryPage/DiaryPage";
import ScanPage from "./pages/ScanPage/ScanPage";
import ScanDetailPage from "./pages/ScanPage/ScanDetailPage/ScanDetailPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        
          <Route path="scan" element={<ScanPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;