// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/api.js"; // Impor fungsi fetchUsers

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

// Async action creator untuk mengambil data dari file JSON
// userSlice.js

// ...

export const fetchUsersAsync = () => async (dispatch) => {
  try {
    const users = await fetchUsers();
    dispatch(setUsers(users));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
