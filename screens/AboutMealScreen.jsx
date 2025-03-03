import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// import { FavouritesContext } from '../store/context/favorites-context';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/redux/favourites';

import { MEALS } from '../data/dummy-data';

import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import AboutMealSection from '../components/AboutMealSection';

export default function AboutMealScreen({ route, navigation }) {
	// const { ids, toggleFavourite } = useContext(FavouritesContext);
	const { favourites: ids } = useSelector((state) => state.favourites);

	const dispatch = useDispatch();

	const { mealId } = route.params;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const starColor = ids.includes(selectedMeal.id) ? 'yellow' : 'white';

	function headerRightButtonHandler() {
		// toggleFavourite(selectedMeal.id);
		dispatch(toggleFavourite(selectedMeal.id));
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			title: selectedMeal.title,
			headerRight: () => (
				<IconButton
					icon="star"
					color={starColor}
					onPress={headerRightButtonHandler}
				/>
			),
		});
	}, [navigation, headerRightButtonHandler]);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={{ uri: selectedMeal.imageUrl }}
					style={styles.image}
				/>
				<Text style={styles.title}>{selectedMeal.title}</Text>
				<MealDetails
					textStyle={{ color: 'white' }}
					duration={selectedMeal.duration}
					complexity={selectedMeal.complexity}
					affordability={selectedMeal.affordability}
				/>
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
		textAlign: 'center',
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
