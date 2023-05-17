import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import TimerPage from './pages/TimerPage/TimerPage';

const URL = "http://localhost:8080";

function App() {

  // state variables
  const [wakaProjects, setWakaProjects] = useState([]);   // list of projects worked on over last 7 days, data coming from /dashboard/stats axios call, contains time spent on each project
  const [wakaCodingActivity, setWakaCodingActivity] = useState([]);   // time spent coding per day over the past 7 days
  const [wakaLanguages, setWakaLanguages] = useState([]);   // percentage of coding languages used over the past 7 days
  const [wakaStats, setWakaStats] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/dashboard/codingactivity`)
      .then(response => {
        setWakaCodingActivity(response.data);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/dashboard/stats`)
      .then(response => {
        setWakaStats(response.data);
        setWakaLanguages(response.data.languages);
        setWakaProjects(response.data.projects);
      })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <section className='App__container'>
          <section className='App__nav-container'>
            <NavBar />
          </section>
          <section className='App__page-container'>
            <Routes>
              <Route path="/" element={<DashboardPage wakaProjects={wakaProjects} wakaCodingActivity={wakaCodingActivity} wakaLanguages={wakaLanguages} wakaStats={wakaStats} />} />
              <Route path="/dashboard" element={<DashboardPage wakaProjects={wakaProjects} wakaCodingActivity={wakaCodingActivity} wakaLanguages={wakaLanguages} wakaStats={wakaStats} />} />
              <Route path="/timer" element={<TimerPage />} />
            </Routes>
          </section>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
