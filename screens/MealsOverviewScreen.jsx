import React from 'react';
import { StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealsList from '../components/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

	function pressHandler(mealId) {
		navigation.navigate('AboutMeal', { mealId, title: MEALS.find((meal) => meal.id === mealId).title });
	}

	return (
		<MealsList
			onMealPress={pressHandler}
			displayedMeals={displayedMeals}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
