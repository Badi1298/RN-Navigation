import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { MEALS } from '../data/dummy-data';
import AboutMealSection from '../components/AboutMealSection';

export default function AboutMealScreen({ route }) {
	const { mealId } = route.params;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={{ uri: selectedMeal.imageUrl }}
					style={styles.image}
				/>
				<Text style={styles.title}>{selectedMeal.title}</Text>
				<View style={styles.detailsContainer}>
					<Text style={styles.topDetailsText}>{selectedMeal.duration}m</Text>
					<Text style={styles.topDetailsText}>{selectedMeal.complexity.toUpperCase()}</Text>
					<Text style={styles.topDetailsText}>{selectedMeal.affordability.toUpperCase()}</Text>
				</View>

				<AboutMealSection
					title="Ingredients"
					list={selectedMeal.ingredients}
				/>
				<AboutMealSection
					title="Steps"
					list={selectedMeal.steps}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},

	image: {
		width: '100%',
		height: 300,
		objectFit: 'cover',
	},

	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'white',
		marginTop: 12,
	},

	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		columnGap: 12,
		width: '100%',
		padding: 12,
	},
	topDetailsText: {
		fontSize: 12,
		color: 'white',
	},

	bottomDetailsContainer: {
		width: '100%',
		paddingHorizontal: 40,
		marginBottom: 20,
	},
	detailsTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#C4A484',
		borderBottomWidth: 2,
		borderColor: '#C4A484',
		paddingBottom: 6,
		textAlign: 'center',
	},
	detailText: {
		color: '#3f2f25',
		fontSize: 12,
		marginTop: 8,
		padding: 6,
		borderRadius: 6,
		textAlign: 'center',
		backgroundColor: '#C4A484',
	},
});
