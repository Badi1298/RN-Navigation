import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: 'white',
				sceneStyle: { backgroundColor: '#3f2f25' },
				drawerContentStyle: { backgroundColor: '#351401' },
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#351401',
				drawerActiveBackgroundColor: '#C4A484',
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons
							name="fast-food"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					drawerIcon: ({ size }) => (
						<Ionicons
							name="star"
							size={size}
							color="yellow"
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
