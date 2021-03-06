import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import QuizBoard from './components/board/board';
import StartBoard from './components/board/startBoard';
import TableResults from './components/tableResults';
import ResultBoard from './components/board/resultBoard';
import OnePlayerResult from './components/board/onePlayerResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartBoard />} />
        <Route path="/quiz" element={<QuizBoard />} />
        <Route path="/result" element={<ResultBoard />} />
        <Route path="/resultsAll" element={<TableResults />} />
        <Route path="/personalResult" element={<OnePlayerResult />} />
      </Routes>
    </Router>
  );
}

export default App;
