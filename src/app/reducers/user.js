import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true,
  rights: [],
  roles: [],
  permissions: [],
  modules: [],
  authority: {},
  notifications: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => ({
      isAuth: true,
      notifications: state.notifications,
      ...action.payload,
    }),
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    logout: () => initialState,
  },
});

export const { setAuth, setUser, setNotifications, logout } = userSlice.actions;

export default userSlice.reducer;
