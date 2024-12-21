import { createContext } from 'react';

export const FavouritesContext = createContext({
	ids: [],
	addFavourite: (id) => {},
	removeFavourite: (id) => {},
});

export default function FavouritesContextProvider({ children }) {
	const addFavourite = (id) => {
		// ...
	};

	const removeFavourite = (id) => {
		// ...
	};

	return (
		<FavouritesContext.Provider
			value={{
				ids: [],
				addFavourite,
				removeFavourite,
			}}
		>
			{children}
		</FavouritesContext.Provider>
	);
}
