import React, { useContext } from 'react';

import { FavouritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data';

import MealsList from '../components/MealsList';
import { StyleSheet, Text, View } from 'react-native';

export default function FavouritesScreen({ navigation }) {
	const { ids } = useContext(FavouritesContext);

	const displayedMeals = MEALS.filter((meal) => ids.indexOf(meal.id) >= 0);

	const onMealPress = (mealId) => {
		navigation.navigate('AboutMeal', { mealId, title: MEALS.find((meal) => meal.id === mealId).title });
	};

	return (
		<>
			{ids.length === 0 ? (
				<View style={styles.container}>
					<Text style={styles.text}>No favourite meals found. Start adding some!</Text>
				</View>
			) : (
				<MealsList
					onMealPress={onMealPress}
					displayedMeals={displayedMeals}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},

	text: {
		fontSize: 16,
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
	},
});
