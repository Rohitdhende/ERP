import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@tremor/react/dist/esm/tremor.css';
import Login from './pages/Login/Login';
import UnderGroupLogin from './pages/UnderGroupLogin/UnderGroupLogin';
import FormWrapper from './pages/FormWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
          element={<FormWrapper />}
        />
      </Routes>
    </div>
  );
}

export default App;
