import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    //actions
    setUser: (state, action) => {
      state.user = action.type;
    },
  },
});

export const { setUser } = userSlice.actions; // Ensure setUser is properly exported
export default userSlice.reducer;
