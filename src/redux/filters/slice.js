import { createSlice } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';
import { selectStatusFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';


const  filtersSlice  = createSlice({
  name: 'filters',
  initialState: {
    name: ""
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectFilteredContacts = createSelector(
    [selectContacts, selectStatusFilter],
    (contacts, filterSelect) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterSelect.toLowerCase()) ||
      contact.number.includes(filterSelect)
  )
})
export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } =  filtersSlice.actions;
export default filtersSlice.reducer;