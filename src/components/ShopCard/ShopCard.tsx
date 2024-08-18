import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { backgroundColorMain, bgColorSecondary } from '../../static/colors'

const imgSource = require('../../../assets/shop_example.jpg')

const ShopCard = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={imgSource}
				resizeMode="cover"
				style={styles.imageStyles}
				imageStyle={styles.image}>
				<View style={styles.overlay}>
					<Text style={styles.shopName}>HM Stores</Text>
					<View style={styles.shopAssets}>
						<TouchableOpacity style={styles.iconButton}>
							<MaterialCommunityIcons
								name="map-marker"
								size={22}
								color="#FFFFFF"
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.iconButton}>
							<MaterialCommunityIcons name="phone" size={22} color="#FFFFFF" />
						</TouchableOpacity>
						<TouchableOpacity style={styles.iconButton}>
							<MaterialCommunityIcons
								name="whatsapp"
								size={22}
								color="#FFFFFF"
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}

export default ShopCard

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		borderRadius: 16,
		overflow: 'hidden',
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
	},
	imageStyles: {
		height: 180,
		justifyContent: 'flex-end',
	},
	image: {
		borderRadius: 16,
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 16,
	},
	shopName: {
		fontSize: 24,
		fontWeight: '700',
		color: '#FFFFFF',
		marginBottom: 12,
	},
	shopAssets: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	iconButton: {
		backgroundColor: bgColorSecondary, // Using the primary blue color with some transparency
		borderRadius: 8,
		padding: 8,
		marginRight: 12,
	},
})
