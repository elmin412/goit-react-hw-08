import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../contacts/operations';
import { logOut } from '../auth/operations';



const sliceContacts = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false, 
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
  })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload 
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
  })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload)
        state.loading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
  })
      
})



export default sliceContacts.reducer