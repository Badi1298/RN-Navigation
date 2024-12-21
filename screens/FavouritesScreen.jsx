import React, { useContext } from 'react';

import { FavouritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data';

import MealsList from '../components/MealsList';

export default function FavouritesScreen({ navigation }) {
	const { ids } = useContext(FavouritesContext);

	const displayedMeals = MEALS.filter((meal) => ids.indexOf(meal.id) >= 0);

	const onMealPress = (mealId) => {
		navigation.navigate('AboutMeal', { mealId, title: MEALS.find((meal) => meal.id === mealId).title });
	};

	return (
		<MealsList
			onMealPress={onMealPress}
			displayedMeals={displayedMeals}
		/>
	);
}
