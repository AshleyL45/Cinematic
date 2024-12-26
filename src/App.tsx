import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Navigate, replace, Route, Routes, useNavigate} from "react-router";
import Dashboard from "./pages/B_body/Dashboard";
import Favorite from "./pages/B_body/Favorite";
import Error from "./pages/B_body/Error";
import MovieDetails from "./pages/B_body/MovieDetails";
import PeopleDetails from "./pages/B_body/PeopleDetails";
import Research from "./pages/B_body/Research";
import SeenMovie from "./pages/B_body/SeenMovie";
import Setting from "./pages/B_body/Setting";
import LayoutWithBar from "./layout/LayoutWithBar";
import LayoutWithoutBar from "./layout/LayoutWithoutBar";
import {HelmetProvider} from "react-helmet-async";
import {Button} from "@mui/material";
import {AuthContext} from './contexts/AuthContext';
import Home from "./pages/B_body/Home";

function App() {
  return (
      <BrowserRouter>
        <MainApp/>
      </BrowserRouter>
  );
}

function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/home");
  };


  return (
      <>
        <Button onClick={handleButtonClick}>
          {isLoggedIn ? "Se déconnecter" : "Se connecter"}
        </Button>
        <HelmetProvider>
          <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>

            {isLoggedIn ? (
                <Routes>
                  <Route path="/" element={<LayoutWithBar/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="favorite" element={<Favorite/>}/>
                    <Route path="home" element={<Navigate to={"/Dashboard"} replace/>}/>
                    <Route path="moviedetails" element={<MovieDetails/>}/>
                    <Route path="peopledetails" element={<PeopleDetails/>}/>
                    <Route path="research" element={<Research/>}/>
                    <Route path="seenmovie" element={<SeenMovie/>}/>
                    <Route path="setting" element={<Setting/>}/>
                  </Route>
                </Routes>
            ) : (
                <Routes>
                  <Route path="/" element={<LayoutWithoutBar/>}>
                    <Route path="error" element={<Error/>}/>
                    <Route path="home" element={<Home/>}/>
                  </Route>
                </Routes>
            )}
          </AuthContext.Provider>
        </HelmetProvider>
      </>
  );
}

export default App;
