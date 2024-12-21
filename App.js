import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import RootStack from './navigation/RootStack';
import FavouritesContextProvider from './store/context/favorites-context';

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<FavouritesContextProvider>
				<NavigationContainer>
					<RootStack />
				</NavigationContainer>
			</FavouritesContextProvider>
		</>
	);
}
