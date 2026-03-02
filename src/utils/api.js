const baseUrl = "http://localhost:3001";
const handleServerResponse = (res) => {
   if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
}

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

// const api = {
//   getItems,
// };
// export default api;

export const addItem = ({ name, imageUrl, weather }) => {
  return fetch  (`${baseUrl}/items`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name, 
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (itemID) => {
  return fetch (`${baseUrl}/items/${itemID}`, {
    method: "DELETE",
    // headers,
  }).then(handleServerResponse);
};