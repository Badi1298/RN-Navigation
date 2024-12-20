import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

	function pressHandler(mealId) {
		navigation.navigate('AboutMeal', { mealId, title: MEALS.find((meal) => meal.id === mealId).title });
	}

	function renderMealItem(itemData) {
		return (
			<MealItem
				onPress={pressHandler}
				meal={itemData.item}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
