import { Route, Routes } from 'react-router';
import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/register'} element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
