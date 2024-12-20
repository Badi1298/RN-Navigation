import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
	return (
		<Stack.Navigator
			screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' } }}
		>
			<Stack.Screen
				name="Categories"
				options={{ title: 'Meals Categories' }}
				component={CategoriesScreen}
			/>
			<Stack.Screen
				name="MealsOverview"
				options={({ route }) => ({ title: route.params.title })}
				component={MealsOverviewScreen}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</>
	);
}
