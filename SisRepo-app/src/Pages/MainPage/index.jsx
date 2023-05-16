import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Nav from "./nav";
import Search from "./search";
import Repo from "./repositories";
import {
  getRepositories,
  createRepositorie,
  destroyRepositorie,
} from "../../services/api";
import { AuthContext } from "../../contexts/auth";

const MainPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadinError, setLoadingError] = useState(false);
  const loadData = async (query = ` `) => {
    try {
      const response = await getRepositories(user?.id, query);
      setRepositories(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadData();
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
  };
  const handleSearch = (query) => {
    loadData(query);
  };
  const handleDelete = async (repository) => {
    try {
      await destroyRepositorie(user?.id, repository._id);
      await loadData();
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  };
  const handleAdd = async (url) => {
    try {
      await createRepositorie(user?.id, url);
      await loadData();
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  };
  if (loadinError) {
    return (
      <div className="loading">
        Erro ao carregar dados dos repositories.
        <Link to={"/login"}>Voltar</Link>
      </div>
    );
  }
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }
  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repo
        repositories={repositories}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default MainPage;
