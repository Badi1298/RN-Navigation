import React from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen() {
    const { width } = useWindowDimensions();

    return (
        <ScrollView style={{ flex: 1, marginTop: 20 }}>
            <View style={{ flex: 1 }}>
                {CATEGORIES.map((category) => (
                    <CategoryGridTile
                        key={category.id}
                        title={category.title}
                        color={category.color}
                    />
                ))}
            </View>
        </ScrollView>
    );
}
