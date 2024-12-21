import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StatusBar } from 'expo-status-bar';

import AboutMealScreen from './screens/AboutMealScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function RootDrawer() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: 'white',
				sceneStyle: { backgroundColor: '#3f2f25' },
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{ title: 'All Categories' }}
			/>
			<Drawer.Screen
				name="Favourites"
				component={FavouritesScreen}
			/>
		</Drawer.Navigator>
	);
}

function RootStack() {
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

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</>
	);
}
