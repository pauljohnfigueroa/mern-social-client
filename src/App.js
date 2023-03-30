import { useMemo } from "react";

import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

import HomePage from "pages/home/HomePage";
import LoginPage from "pages/login/LoginPage";
import ProfilePage from "pages/profile/ProfilePage";


function App() {
  // get the mode from the global state
  const mode = useSelector(state => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  const isAuth = Boolean(useSelector(state => state.token))

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to='/' />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
