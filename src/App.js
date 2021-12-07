import './App.css';
import QuizBoard from './components/board/board';
import StartBoard from './components/board/startBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResultBoard from './components/board/resultBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartBoard />} />
        <Route path="/quiz" element={<QuizBoard />} />
        <Route path="/result" element={<ResultBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
