import './App.css';
import {LangProvider} from './context/LangContext'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import PokeSPA from './pages/PokeSPA';
import MarketsCenter from './pages/MarketsCenter';
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Thanks from './pages/Thanks'

function App() {
  return (
    <LangProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/poke-spa' element={<PokeSPA />} />
        <Route path='/markets-center' element={<MarketsCenter />} />
        <Route path='/thankyou' element={<Thanks />} />
      </Routes>
    </LangProvider>
  );
}

export default App;
