import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
	boxLightGrey,
	purpleColor,
	purpleColorLight,
} from '../../static/colors'

const TransactionCard = () => {
	return (
		<View style={styles.container}>
			<Text>TransactionCard</Text>
		</View>
	)
}

export default TransactionCard

const styles = StyleSheet.create({
	container: {
		backgroundColor: purpleColorLight,
	},
})
