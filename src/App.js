import React from 'react';
import './App.css';
import gitImg from './Assets/img/icon.jpg';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault(); //Interrompendo comportamento submit padrão da página
  }


  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" required />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img src={gitImg} alt="github" height="200px" className="responsive rounded-circle" />

        <h2 className="pt-5">
          <a href="https://github.com/wtiinfo" target="_new" className="text-decoration-none">Wando Borges</a>
        </h2>
        <h3>
          Ribeirão Pires - SP
        </h3>
        <p>
          <a href="#" target="_new" className="text-info text-decoration-none">www.wtiinfo.com</a>
        </p>
      </div>

    </div>
  );
}

export default App;
