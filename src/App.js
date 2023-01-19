import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@tremor/react/dist/esm/tremor.css';
import Login from './pages/Login/Login';
import UnderGroupLogin from './pages/UnderGroupLogin/UnderGroupLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/under-group-admin" element={<UnderGroupLogin />} />
      </Routes>
    </div>
  );
}

export default App;
