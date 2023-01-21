import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@tremor/react/dist/esm/tremor.css';
import Login from './pages/Login/Login';
import UnderGroupLogin from './pages/UnderGroupLogin/UnderGroupLogin';
import UnderGroupDashboard from './pages/UnderGroupDashboard/UnderGroupDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/under-group-admin-login"
          element={<UnderGroupLogin />}
        />
        <Route
          exact
          path="/under-group-admin-dashboard"
          element={<UnderGroupDashboard />}
        />
      </Routes>
    </div>
  );
}

export default App;
