import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

// import FavouritesContextProvider from './store/context/favorites-context';

import { StatusBar } from 'expo-status-bar';

import RootStack from './navigation/RootStack';

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<Provider store={store}>
				<NavigationContainer>
					<RootStack />
				</NavigationContainer>
			</Provider>
		</>
	);
}
