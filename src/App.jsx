import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import HistoryPage from './Pages/HistoryPage';
import NotFoundPage from './Pages/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div><br />
      <br />
      <div style={{ marginLeft: "2rem" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;