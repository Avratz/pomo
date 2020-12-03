import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Svg, { Circle, Rect } from 'react-native-svg';

const Clock = () => {
	return (
		<View
			style={styles.clock}
			onMoveShouldSetResponder={(evt) => {
				return true
			}}
			onResponderMove={(evt) => console.log(evt.nativeEvent)}
		/>
	)
}

const styles = StyleSheet.create({
	clock: {
		backgroundColor: 'red',
		height: 300,
		width: 300,
		borderRadius: 300,
	},
})

export default Clock
