import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    expanded: false,
  },
  reducers: {
    sidebarExpand: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { sidebarExpand } = sidebarSlice.actions;
export default sidebarSlice.reducer;