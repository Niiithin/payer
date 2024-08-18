import React, { useState } from 'react'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Alert,
	SafeAreaView,
	ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import {
	accentColor,
	backgroundColorMain,
	bgColorSecondary,
	textColorPrimary,
	textColorSecondary,
	whiteColor,
} from '../../../static/colors'

const Profile = () => {
	const [userName, setUserName] = useState('John Doe')
	const phoneNumber = '+1 123 456 7890'
	const navigation = useNavigation()

	const handleEditName = () => {
		Alert.alert('Edit Name', 'Implement your logic to edit the name here.')
	}

	const handleCallSupport = () => {
		Alert.alert('Call Support', 'Implement your logic to call support here.')
	}

	const handleReportBug = () => {
		Alert.alert('Report Bug', 'Implement your logic to report a bug here.')
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={styles.backButton}>
						<Icon name="arrow-back" size={24} color={textColorPrimary} />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Profile</Text>
				</View>

				<View style={styles.userContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={{ uri: 'https://i.pravatar.cc/300' }}
							style={styles.userPicture}
						/>
						<TouchableOpacity
							onPress={handleEditName}
							style={styles.editButton}>
							<Icon name="edit" size={20} color={whiteColor} />
						</TouchableOpacity>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userName}>{userName}</Text>
						<Text style={styles.userNumber}>{phoneNumber}</Text>
					</View>
				</View>

				<View style={styles.actionSection}>
					<Text style={styles.sectionTitle}>Support</Text>
					<TouchableOpacity
						onPress={handleCallSupport}
						style={styles.actionButton}>
						<Icon name="phone" size={24} color={accentColor} />
						<Text style={styles.actionText}>Call Support</Text>
						<Icon
							name="chevron-right"
							size={24}
							color={textColorSecondary}
							style={styles.actionArrow}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={handleReportBug}
						style={styles.actionButton}>
						<Icon name="bug-report" size={24} color={accentColor} />
						<Text style={styles.actionText}>Report a Bug</Text>
						<Icon
							name="chevron-right"
							size={24}
							color={textColorSecondary}
							style={styles.actionArrow}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

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
		alignItems: 'center',
		marginBottom: 20,
	},
	backButton: {
		padding: 10,
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: textColorPrimary,
		marginLeft: 10,
	},
	userContainer: {
		alignItems: 'center',
		marginBottom: 40,
	},
	imageContainer: {
		position: 'relative',
		marginBottom: 20,
	},
	userPicture: {
		width: 150,
		height: 150,
		borderRadius: 75,
		borderWidth: 3,
		borderColor: accentColor,
	},
	editButton: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		backgroundColor: bgColorSecondary,
		borderRadius: 20,
		padding: 10,
	},
	userInfo: {
		alignItems: 'center',
	},
	userName: {
		fontSize: 28,
		fontWeight: 'bold',
		color: textColorPrimary,
		marginBottom: 10,
	},
	userNumber: {
		fontSize: 18,
		color: textColorSecondary,
	},
	actionSection: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: textColorPrimary,
		marginBottom: 15,
	},
	actionButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: whiteColor,
		borderRadius: 12,
		padding: 20,
		marginBottom: 15,
	},
	actionText: {
		flex: 1,
		color: textColorPrimary,
		marginLeft: 15,
		fontSize: 18,
	},
	actionArrow: {
		marginLeft: 'auto',
	},
})

export default Profile
