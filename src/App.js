import React from 'react'; 
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from './pages/Resume/Resume';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/resume' component={Resume} />
      <Route path='/blog' component={Blog} />
    </BrowserRouter>
    </div>
  );
}

export default App;
