import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';

export default function MealsList({ displayedMeals, onMealPress }) {
	function pressHandler(mealId) {
		onMealPress(mealId);
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
