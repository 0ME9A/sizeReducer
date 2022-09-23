import './App.sass'
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom"
import Tp from './components/term&privacy/term&Privacy';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/sizeReducer" element={<Home />} />
        <Route path="/sizeReducer/terms-privacy/" element={<Tp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
