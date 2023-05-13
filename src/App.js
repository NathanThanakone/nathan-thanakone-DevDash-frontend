import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnalyticsPage from "./pages/AnalyticsPage";
import GoalsPage from "./pages/GoalsPage";
import TasksPage from './pages/TasksPage';

const GoalsURL = "http://localhost:8080/goals";

function App() {
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${GoalsURL}`)
      .then(response => {
        setGoalsList(response.data);
      }) 
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnalyticsPage />} />
          <Route path="/goals" element={<GoalsPage goalsList={goalsList} />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
