import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TransactionCard from '../../../components/TransactionCard/TransactionCard'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { purpleColor, purpleColorLight } from '../../../static/colors'

const Transactions = () => {
	return (
		<View style={styles.rootContainer}>
			<View style={styles.container}>
				<Text style={styles.mainHeading}> History</Text>
				<View style={styles.downloadBox}>
					<View style={styles.downloadStatement}>
						<Text style={styles.downloadText}>Download Statement</Text>
						<MaterialCommunityIcons name="download" size={15} color={'grey'} />
					</View>
					<View style={styles.downloadStatement}>
						<Text style={styles.downloadText}>Filter</Text>
						<MaterialCommunityIcons name="filter" size={15} color={'grey'} />
					</View>
				</View>
				<TransactionCard />
			</View>
		</View>
	)
}

export default Transactions

const styles = StyleSheet.create({
	rootContainer: {
		backgroundColor: '#e0ebf1',
	},
	container: {
		margin: 20,
	},
	mainHeading: {
		fontSize: 25,
		fontWeight: '600',
		color: 'black',
		textAlign: 'center',
	},

	downloadBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 5,
		paddingHorizontal: 10,
	},
	downloadText: {
		fontSize: 15,
	},
	downloadStatement: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'black',
		borderRadius: 4,
	},
})
