export async function fetchData(endpoint) {
  const res = await fetch(`http://localhost:3000${endpoint}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.json();
}
