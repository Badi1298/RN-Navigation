import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
	ids: [],
	addFavourite: (id) => {},
	removeFavourite: (id) => {},
});

export default function FavouritesContextProvider({ children }) {
	const [favouriteMealIds, setFavouriteMealIds] = useState([]);

	const addFavourite = (id) => {
		setFavouriteMealIds((current) => [...current, id]);
	};

	const removeFavourite = (id) => {
		setFavouriteMealIds((current) => current.filter((mealId) => mealId !== id));
	};

	return (
		<FavouritesContext.Provider
			value={{
				ids: favouriteMealIds,
				addFavourite,
				removeFavourite,
			}}
		>
			{children}
		</FavouritesContext.Provider>
	);
}
