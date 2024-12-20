import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MealDetails({ duration, complexity, affordability, textStyle }) {
	return (
		<View style={styles.detailsContainer}>
			<Text style={[styles.detailsText, textStyle]}>{duration}m</Text>
			<Text style={[styles.detailsText, textStyle]}>{complexity.toUpperCase()}</Text>
			<Text style={[styles.detailsText, textStyle]}>{affordability.toUpperCase()}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		columnGap: 12,
		width: '100%',
		padding: 12,
	},

	detailsText: {
		fontSize: 12,
	},
});
