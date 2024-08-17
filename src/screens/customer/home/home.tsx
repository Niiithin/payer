import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
	backgroundColorMain,
	greyColor,
	primaryColor,
	primaryColorLight,
	purpleColorLight,
	textColorBlack,
} from '../../../static/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Home = () => {
	return (
		<View>
			<View>
				<Text>Account</Text>
			</View>

			<View style={styles.accountStack}>
				<View style={styles.accountPopover}>
					<MaterialCommunityIcons name="account" size={35} color={'grey'} />
				</View>
				<MaterialCommunityIcons name="scanner" size={25} color={'grey'} />

				<View style={styles.notifyPopover}>
					<MaterialCommunityIcons name="bell" size={25} color={'grey'} />
				</View>
			</View>

			<View style={styles.transactionBox}>
				<Text style={styles.transactionHeading}>Your Transactions</Text>
				<Text style={styles.transactionAmount}>$27444</Text>
			</View>
			<Text style={styles.text}>Home</Text>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		color: 'black',
	},
	transactionBox: {
		marginTop: 20,
		marginHorizontal: 20,
		borderRadius: 12,
		paddingVertical: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 20,
		fontWeight: '200',
		backgroundColor: primaryColor,
	},
	transactionHeading: {
		fontSize: 15,
		color: backgroundColorMain,
	},
	transactionAmount: {
		fontSize: 40,
		fontWeight: '600',
	},
	accountStack: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20,
	},
	accountPopover: {
		backgroundColor: purpleColorLight,
		padding: 5,
		borderRadius: 50,
	},
	notifyPopover: {
		backgroundColor: purpleColorLight,
		padding: 5,
		borderRadius: 50,
	},
})
