import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { FavouritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

export default function FavouritesScreen({ navigation }) {
	const { ids } = useContext(FavouritesContext);

	const displayedMeals = MEALS.filter((meal) => ids.indexOf(meal.id) >= 0);

	const pressHandler = (mealId) => {
		navigation.navigate('AboutMeal', { mealId, title: MEALS.find((meal) => meal.id === mealId).title });
	};

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
