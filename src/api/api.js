// api.js
export const fetchUsers = async () => {
  try {
    const response = await fetch("/data/users.json"); // Sesuaikan path dengan lokasi baru di dalam folder public
    const data = await response.json();
    console.log("Data from fetchUsers:", data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
