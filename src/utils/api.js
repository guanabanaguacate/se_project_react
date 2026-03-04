const baseUrl = "http://localhost:3001";
export const handleServerResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
};

export const addItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    // headers,
  }).then(handleServerResponse);
};
