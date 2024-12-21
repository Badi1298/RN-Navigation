import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
	ids: [],
	toggleFavourite: (id) => {},
});

export default function FavouritesContextProvider({ children }) {
	const [favouriteMealIds, setFavouriteMealIds] = useState([]);

	const addFavourite = (id) => {
		setFavouriteMealIds((current) => [...current, id]);
	};

	const removeFavourite = (id) => {
		setFavouriteMealIds((current) => current.filter((mealId) => mealId !== id));
	};

	const toggleFavourite = (id) => {
		if (favouriteMealIds.includes(id)) {
			removeFavourite(id);
		} else {
			addFavourite(id);
		}
	};

	return (
		<FavouritesContext.Provider
			value={{
				ids: favouriteMealIds,
				toggleFavourite,
			}}
		>
			{children}
		</FavouritesContext.Provider>
	);
}
