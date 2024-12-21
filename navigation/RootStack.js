import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootDrawer from './RootDrawer';
import AboutMealScreen from '../screens/AboutMealScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function RootStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: 'white',
				contentStyle: { backgroundColor: '#3f2f25' },
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen
				name="Drawer"
				component={RootDrawer}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="MealsOverview"
				options={({ route }) => ({ title: route.params.title })}
				component={MealsOverviewScreen}
			/>
			<Stack.Screen
				name="AboutMeal"
				component={AboutMealScreen}
			/>
		</Stack.Navigator>
	);
}
