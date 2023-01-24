import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@tremor/react/dist/esm/tremor.css';
import Login from './pages/Login/Login';
import UnderGroupLogin from './pages/UnderGroupLogin/UnderGroupLogin';
import UnderGroupLocation from './pages/UnderGroupLocation/UnderGroupLocation';

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
          path="/under-group-admin-location"
          element={<UnderGroupLocation />}
        />
      </Routes>
    </div>
  );
}

export default App;
