const BASE_URL = "http://localhost:5000";

// Perform a "normal search" using $text
export async function textSearch(query = "") {
  return fetch(`${BASE_URL}/search/${query}`).then(r => r.json()).then(data => {return { data }});
}

export async function getCategories() {
  return fetch(`${BASE_URL}/categories`).then(r => r.json());
}

export async function getByCategory(category) {
  return fetch(`${BASE_URL}/items/category/${category}`).then(r => r.json());
}

export async function getAutocompleteSuggestions(query) {
  return fetch(`${BASE_URL}/autocomplete/${query}`).then(r => r.json());
}