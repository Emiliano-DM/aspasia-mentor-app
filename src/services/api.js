const API = "https://idea-de-txabi.onrender.com/api";



export async function fetchData(endpoint) {
  const response = await fetch(`${API}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}