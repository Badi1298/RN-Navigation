import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Platform } from 'react-native';

import MealDetails from './MealDetails';

export default function MealItem({ meal, onPress }) {
	return (
		<Pressable
			android_ripple={{ color: '#ccc' }}
			style={({ pressed }) => [{ opacity: pressed && Platform.OS === 'ios' ? 0.7 : 1 }, styles.rootContainer]}
			onPress={() => onPress(meal.id)}
		>
			<Image
				source={{ uri: meal.imageUrl }}
				style={styles.image}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{meal.title}</Text>
				<MealDetails
					duration={meal.duration}
					complexity={meal.complexity}
					affordability={meal.affordability}
				/>
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
		overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
	},

	image: {
		width: '100%',
		height: 200,
		objectFit: 'cover',
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
