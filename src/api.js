export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3002";
console.log("API_URL:", API_URL);

export async function fetchBlogs() {
  const res = await fetch(`${API_URL}/blogs`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}

export async function fetchBlogById(id) {
  const res = await fetch(`${API_URL}/blogs/${id}`);
  if (!res.ok) throw new Error("Blog bulunamadı");
  return res.json();
}
