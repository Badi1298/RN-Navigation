import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {
	function renderGridItem(itemData) {
		function pressHandler() {
			navigation.navigate('MealsOverview', {
				categoryId: itemData.item.id,
			});
		}

		return (
			<CategoryGridTile
				onPress={pressHandler}
				title={itemData.item.title}
				color={itemData.item.color}
			/>
		);
	}

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
}
