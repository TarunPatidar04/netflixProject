import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    //actions
    setUser: (state, action) => {
      state.user = action.type;
    },
    setloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setloading } = userSlice.actions; // Ensure setUser is properly exported
export default userSlice.reducer;
