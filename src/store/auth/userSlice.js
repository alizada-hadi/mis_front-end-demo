import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  avatar: "",
  userName: "",
  email: "",
  authority: [] /* in our case we pass the roles or name of groups */,
};

export const userSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
    userLoggedOut: () => initialState,
  },
});

export const { setUser, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
