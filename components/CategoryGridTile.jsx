import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function CategoryGridTile({ title, color }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({});