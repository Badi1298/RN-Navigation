import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	favourites: [],
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		toggleFavourite(state, action) {
			const existingIndex = state.favourites.findIndex((item) => item.id === action.payload);

			if (existingIndex !== -1) {
				// Remove item by creating a new array
				state.favourites = state.favourites.filter((item) => item.id !== action.payload);
			} else {
				// Add item by spreading the array
				state.favourites.push(action.payload);
			}
		},
	},
});

export const { toggleFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
