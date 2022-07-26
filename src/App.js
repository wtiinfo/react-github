import React, { useState } from 'react';
import './App.css';
import gitImg from './Assets/img/icon.jpg';

function App() {

  const [search, setSearch] = useState("");
  const [userData, setUserDate] = useState();

  const handleSubmit = (event) => {
    event.preventDefault(); //Interrompendo comportamento submit padrão da página
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserDate(userResponse));
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" value={search} onChange={handleChange} className="form-control" required />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img src={!userData ? gitImg : userData.avatar_url} alt="github" height="200px" className="responsive rounded-circle" />
        <h2 className="pt-5">
          <a href="https://github.com/wtiinfo" target="_new" className="text-decoration-none">{!userData ? "Wando Borges" : userData.name}</a>
        </h2>
        <h3>
          {!userData ? "São Paulo" : userData.location}
        </h3>
        <p>
          Repositórios publicos: {!userData ? '0' : userData.public_repos}
        </p>
      </div>

    </div>
  );
}

export default App;
