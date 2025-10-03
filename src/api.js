export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3002";
console.log("API_URL:", API_URL);

const getCurrentLanguage = () => {
  return localStorage.getItem("lng") || "en";
};

const getHeaders = () => {
  return {
    "Accept-Language": getCurrentLanguage(),
  };
};

export async function fetchBlogs() {
  const headers = getHeaders();
  const res = await fetch(`${API_URL}/blogs`, { headers });

  if (!res.ok) throw new Error("API error");
  return res.json();
}

export async function fetchBlogById(id) {
  const headers = getHeaders();
  const res = await fetch(`${API_URL}/blogs/${id}`, { headers });

  if (!res.ok) throw new Error("Blog bulunamadı");
  return res.json();
}
