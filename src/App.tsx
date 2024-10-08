import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/results/*" element={<ResultsPage />} />

        <Route path="/error" element={<ErrorPage />} />
        <Route path="/*" element={<NotFoundPage />} />

      </Routes>
    </>
  )
}

export default App
