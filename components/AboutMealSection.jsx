import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutMealSection({ title, list }) {
	return (
		<View style={styles.bottomDetailsContainer}>
			<Text style={styles.detailsTitle}>{title}</Text>
			{list.map((item) => (
				<Text
					key={item}
					style={styles.detailText}
				>
					{item}
				</Text>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
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
