import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};

export const getRepositories = async (userId, query) => {
  let url = `/users/${userId}/repositories/`;
  if (query !== "") {
    url += `?q=${query}`;
  }
  return api.get(url);
};
export const createRepositorie = async (userId, repositoryUrl) => {
  let url = `/users/${userId}/repositories/`;
  const repositoriesName = getRepositoriesName(repositoryUrl);
  return api.post(url, { name: repositoriesName, url: repositoryUrl });
};
export const destroyRepositorie = async (userId, id) => {
  let url = `/users/${userId}/repositories/${id}`;

  return api.delete(url);
};

const getRepositoriesName = (url) => {
  const regex = /https?:\/\/github\.com\/(.+)\/(.+)/;
  const match = url.match(regex);
  if (match) {
    const [, owner, repo] = match;
    return `${owner}/${repo}`;
  }
  return null;
};
