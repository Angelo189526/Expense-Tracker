import './App.css'
import {Routes, Route } from 'react-router-dom'
import { SideVar } from "./components/Sidevar";
import { HomePage } from './Pages/HomePage';
import { ExpensesPage } from './Pages/ExpensesPage';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </>
  );
}


export default App
