import React from 'react'
import { StyleSheet, View } from 'react-native'
import Clock from '../components/Clock'

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Clock />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
