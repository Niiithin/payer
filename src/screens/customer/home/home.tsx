import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ShopCard from '../../../components/ShopCard/ShopCard'
import {
	backgroundColorMain,
	bgColorSecondary,
	blackColor,
	whiteColor,
} from '../../../static/colors'
import { RootStackParamList } from '../../../models/navigation'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

const Home: React.FC = () => {
	const navigation = useNavigation<HomeScreenNavigationProp>()

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.accountPopover}
						onPress={() => navigation.navigate('Profile')}>
						<MaterialCommunityIcons
							name="account"
							size={24}
							color={whiteColor}
						/>
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Dashboard</Text>
					<View style={styles.iconContainer}>
						<TouchableOpacity style={styles.iconButton}>
							<MaterialCommunityIcons
								name="qrcode-scan"
								size={22}
								color={whiteColor}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.iconButton}>
							<MaterialCommunityIcons
								name="bell-outline"
								size={22}
								color={whiteColor}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.transactionBox}>
					<Text style={styles.transactionHeading}>Total Balance</Text>
					<Text style={styles.transactionAmount}>₹27,444</Text>
					<TouchableOpacity
						style={styles.viewDetailsButton}
						onPress={() => navigation.navigate('Transactions')}>
						<Text style={styles.viewDetailsText}>View Transactions</Text>
						<MaterialCommunityIcons
							name="chevron-right"
							size={20}
							color={bgColorSecondary}
						/>
					</TouchableOpacity>
				</View>

				<Text style={styles.sectionTitle}>Your Shops</Text>

				<ShopCard />
				<ShopCard />
				<ShopCard />
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColorMain,
	},
	scrollContent: {
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 25,
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: '700',
		color: '#2C3E50',
	},
	accountPopover: {
		backgroundColor: bgColorSecondary,
		padding: 10,
		borderRadius: 12,
	},
	iconContainer: {
		flexDirection: 'row',
	},
	iconButton: {
		backgroundColor: bgColorSecondary,
		padding: 10,
		borderRadius: 12,
		marginLeft: 10,
	},
	transactionBox: {
		backgroundColor: whiteColor,
		borderRadius: 16,
		padding: 20,
		marginBottom: 25,
		shadowColor: blackColor,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 3,
	},
	transactionHeading: {
		fontSize: 16,
		color: '#7F8C8D',
		marginBottom: 5,
	},
	transactionAmount: {
		fontSize: 36,
		fontWeight: 'bold',
		color: '#2C3E50',
		marginBottom: 15,
	},
	viewDetailsButton: {
		backgroundColor: '#ECF0F1',
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'flex-start',
	},
	viewDetailsText: {
		color: '#1E88E5',
		fontWeight: '600',
		fontSize: 14,
		marginRight: 5,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: '#2C3E50',
		marginBottom: 15,
	},
})
