import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route }) {
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

	function renderMealItem(itemData) {
		return <MealItem meal={itemData.item} />;
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
		padding: 16,
	},
});
