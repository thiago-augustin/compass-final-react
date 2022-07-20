import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import { GlobalStyle } from "./components/GlobalStyle";
import { UsuarioProvider } from 'common/context/Usuario';

export default function AppRouter() {
    return (
        <Router>
            <GlobalStyle />
            <UsuarioProvider>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </UsuarioProvider>
        </Router>
    );
}