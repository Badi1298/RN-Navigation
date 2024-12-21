import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import { Ionicons } from '@expo/vector-icons';

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
