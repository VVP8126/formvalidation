import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Simple from './pages/Simple';
import Hooked from './pages/Hooked';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={ <Home /> } />
          <Route path='simple' element={ <Simple /> } />
          <Route path='hooked' element={ <Hooked /> }/>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
