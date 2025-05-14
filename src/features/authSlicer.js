import { createSlice } from "@reduxjs/toolkit";

// Read from localStorage
const savedUser = localStorage.getItem('user');
const savedName = localStorage.getItem('name');

const initialState = {
  name: savedName || null,
  user: savedUser ? JSON.parse(savedUser) : null,
  isloggin: !!savedUser,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setname: (state, action) => {
      state.name = action.payload;
      localStorage.setItem('name', action.payload);
      console.log("Test")
    },
    setlogin: (state, action) => {
      state.user = action.payload;
      state.isloggin = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('isloggin', 'true');
    },
    setlogout: (state) => {
      state.user = null;
      state.name = null;
      state.isloggin = false;
      localStorage.removeItem('user');
      localStorage.removeItem('name');
      localStorage.removeItem('isloggin');
    },
  },
});

export const { setname, setlogin, setlogout } = authSlicer.actions;
export default authSlicer.reducer;
