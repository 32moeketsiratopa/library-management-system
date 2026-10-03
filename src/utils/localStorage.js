export function getData(key) {
  const data = localStorage.getItem(key);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}