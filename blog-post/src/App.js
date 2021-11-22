import './App.css';
import {Route, Routes} from 'react-router-dom';
import SinglePost from './components/SinglePost';
import FetchingData from './components/FetchingData';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import FoundError from './components/FoundError';
import BarHeader from './components/BarHeader';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  return (
    <div className="App">
      <BarHeader />
      <Routes>
        <Route path="/post/:id" element={<SinglePost />} />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <FetchingData />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<FoundError />} />
      </Routes>
    </div>
  );
}

export default App;
