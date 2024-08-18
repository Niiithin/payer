import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Modal,
	Alert,
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import {
	backgroundColorMain,
	bgColorSecondary,
	textColorPrimary,
	whiteColor,
	accentColor,
} from '../../../static/colors'

const Scanner = () => {
	const [isScannerOpen, setIsScannerOpen] = useState(false)

	const handleOpenScanner = () => {
		setIsScannerOpen(true)
	}

	const handleCloseScanner = () => {
		setIsScannerOpen(false)
	}

	const handleBarCodeScanned = ({ type, data }: any) => {
		setIsScannerOpen(false)
		Alert.alert(
			'Scan Result',
			`Bar code with type ${type} and data ${data} has been scanned!`,
		)
	}

	const handleAddManually = () => {
		Alert.alert(
			'Add Manually',
			'Implement your logic to add items manually here.',
		)
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={handleOpenScanner}>
				<Text style={styles.buttonText}>Open Scanner</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={handleAddManually}>
				<Text style={styles.buttonText}>Add Manually</Text>
			</TouchableOpacity>

			<Modal
				visible={isScannerOpen}
				animationType="slide"
				onRequestClose={handleCloseScanner}>
				<View style={styles.cameraContainer}>
					<RNCamera
						style={styles.camera}
						type={RNCamera.Constants.Type.back}
						onBarCodeRead={handleBarCodeScanned}
						captureAudio={false}>
						<View style={styles.overlay}>
							<Text style={styles.overlayText}>
								Align the barcode within the frame to scan
							</Text>
						</View>
					</RNCamera>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={handleCloseScanner}>
						<Text style={styles.closeButtonText}>Close</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: backgroundColorMain,
		padding: 20,
	},
	button: {
		backgroundColor: bgColorSecondary,
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 10,
		marginVertical: 10,
		width: '80%',
		alignItems: 'center',
	},
	buttonText: {
		color: whiteColor,
		fontSize: 18,
		fontWeight: 'bold',
	},
	cameraContainer: {
		flex: 1,
	},
	camera: {
		flex: 1,
	},
	overlay: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
	overlayText: {
		color: whiteColor,
		fontSize: 16,
		textAlign: 'center',
		padding: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	},
	closeButton: {
		position: 'absolute',
		top: 40,
		right: 20,
		backgroundColor: accentColor,
		padding: 10,
		borderRadius: 5,
	},
	closeButtonText: {
		color: whiteColor,
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default Scanner
