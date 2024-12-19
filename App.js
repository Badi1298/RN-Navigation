import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <CategoriesScreen />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
