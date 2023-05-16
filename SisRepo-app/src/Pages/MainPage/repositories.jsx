import React, { useState } from "react";

const Repo = ({ repositories, onDelete, onAdd }) => {
  const [newRepo, setNewRepo] = useState("");

  return (
    <div>
      <div className="repositories">
        <h2 className="title">Repositorios</h2>
        <ul className="list">
          {repositories.map((repository) => (
            <li className="item" key={repository._id}>
              <div className="info">
                <div className="owner">
                  {repository.name.substring(0, repository.name.indexOf("/"))}
                </div>
                <div className="name">
                  {repository.name.substring(repository.name.indexOf("/") + 1)}
                </div>
              </div>
              <button onClick={() => onDelete(repository)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add">
        <label htmlFor="url">Novo Repo:</label>
        <input
          type="url"
          name="url"
          id="url"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button
          onClick={() => {
            onAdd(newRepo);
            setNewRepo("");
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Repo;
