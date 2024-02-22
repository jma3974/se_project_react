import checkServerResponse from "../utils/utils.js";

const baseUrl = "http://localhost:3001";

const deleteItems = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};

const addItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};

const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};

const api = {
  getItems,
  addItems,
  deleteItems,
};

export default api;
