import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dados">Novo</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
            <Route path ="/" Component={LivroLista} />
            <Route path ="/dados" Component={LivroDados} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
