import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTask from "./pages/CreateTask";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UpdateTask from './pages/UpdateTask'
import ListTasks from './pages/ListTasks'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/createTask' element={<CreateTask />} />
        {/* <Route path='/updateTask' element={<UpdateTask />} /> */}
        <Route path='/listTasks' element={<ListTasks />} />
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
