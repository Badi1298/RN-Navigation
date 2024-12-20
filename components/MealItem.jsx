import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function MealItem({ meal }) {
	return (
		<Pressable style={styles.rootContainer}>
			<View style={{ height: 200 }}>
				<Image
					source={{ uri: meal.imageUrl }}
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{meal.title}</Text>
				<View style={styles.mealDetailsContainer}>
					<Text style={styles.mealDetailsText}>{meal.duration}m</Text>
					<Text style={styles.mealDetailsText}>{meal.complexity.toUpperCase()}</Text>
					<Text style={styles.mealDetailsText}>{meal.affordability.toUpperCase()}</Text>
				</View>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		margin: 16,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		backgroundColor: 'white',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		shadowOpacity: 0.26,
		overflow: 'hidden',
	},

	textContainer: {
		flex: 1,
		padding: 10,
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},

	mealDetailsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: 10,
		marginTop: 20,
	},
	mealDetailsText: {
		fontSize: 12,
	},
});
