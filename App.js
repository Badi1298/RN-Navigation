import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
    return (
        <SafeAreaView>
            <CategoriesScreen />
            <StatusBar style="light" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
