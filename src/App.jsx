import './App.css'
import {Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { ExpensesPage } from './Pages/ExpensesPage'
import { TripsPage } from './Pages/TripssPage'
import { Layout } from './Layout/Layout'

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout/>}>

   
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="trips" element={<TripsPage />} />

        </Route>

      </Routes>
    </>
  );
}

export default App
