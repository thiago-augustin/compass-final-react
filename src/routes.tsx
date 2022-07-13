import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { GlobalStyle } from "./components/GlobalStyle";

export default function AppRouter() {
  return (
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
  );
}