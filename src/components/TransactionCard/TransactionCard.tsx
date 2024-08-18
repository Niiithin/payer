import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
	backgroundColorMain,
	bgColorSecondary,
	whiteColor,
	blackColor,
} from '../../static/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface TransactionCardProps {
	amount: number
	date: string
}

const TransactionCard = ({
	amount,
	date,
}: TransactionCardProps): JSX.Element => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<MaterialCommunityIcons
					name="credit-card-outline"
					size={24}
					color={bgColorSecondary}
				/>
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.amountStyles}>₹ {amount.toFixed(2)}</Text>
				<Text style={styles.dateStyles}>{date}</Text>
			</View>
		</View>
	)
}

export default TransactionCard

const styles = StyleSheet.create({
	container: {
		backgroundColor: whiteColor,
		borderRadius: 12,
		padding: 15,
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
		shadowColor: blackColor,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	iconContainer: {
		backgroundColor: backgroundColorMain,
		borderRadius: 8,
		padding: 10,
		marginRight: 15,
	},
	detailsContainer: {
		flex: 1,
	},
	amountStyles: {
		color: blackColor,
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 4,
	},
	dateStyles: {
		color: '#7F8C8D',
		fontSize: 14,
	},
})
