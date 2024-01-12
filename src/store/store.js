// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import formReducer from "../features/form/formSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});

export default store;
