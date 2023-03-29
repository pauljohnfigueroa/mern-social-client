import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/home/HomePage";
import LoginPage from "pages/login/LoginPage";
import ProfilePage from "pages/profile/ProfilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
