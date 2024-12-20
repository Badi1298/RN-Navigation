import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, color, onPress }) {
	return (
		<Pressable
			style={({ pressed }) => {
				pressed && styles.pressed;
			}}
			onPress={onPress}
		>
			<Ionicons
				size={24}
				name={icon || 'star'}
				color={color || 'white'}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});
