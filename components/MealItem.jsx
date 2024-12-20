import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function MealItem({ meal }) {
	return (
		<Pressable style={styles.rootContainer}>
			<Image
				source={{ uri: meal.imageUrl }}
				style={{ width: '100%', height: '60%', objectFit: 'cover' }}
			/>
			<View style={styles.textContainer}>
				<Text>{meal.title}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		height: 200,
		marginBottom: 16,
		elevation: 4,
		borderRadius: 8,
		overflow: 'hidden',
	},

	textContainer: {
		flex: 1,
		backgroundColor: 'white',
		padding: 16,
		borderBottomRightRadius: 8,
		borderBottomLeftRadius: 8,
	},
});
