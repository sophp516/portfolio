import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Experiences from './pages/Experiences';
import Landing from './pages/Landing';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Background />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/background" element={<Background />}></Route>
        <Route path="/experiences" element={<Experiences />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
