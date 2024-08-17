/* Imports */
import React, { useEffect, useRef, useState } from 'react'
import {
	View,
	Text,
	Animated,
	Easing,
	Pressable,
	PixelRatio,
	Dimensions,
	StyleSheet,
} from 'react-native'
import { IPropsShadowButtonWithAnimation } from '../../../models/model'
import { secondaryFont } from '../../../static/font'

/* Relative Imports */

// -----------------------------------------------------------------------------

/* Constants */
const win = Dimensions.get('window')

/* Component */
const ShadowButtonWithAnimation: React.FC<IPropsShadowButtonWithAnimation> = ({
	activeCondition,
	title,
	onPress,
	dependencyVariable,
	initialColor,
	styleProp,
	finalColor,
	width,
	paddingVertical,
	customTextComponent,
}) => {
	/* Constants */
	const backgroundColorOutside = useRef(new Animated.Value(0))?.current

	const textColorStyle = {
		color: backgroundColorOutside.interpolate({
			inputRange: [0, 1],
			outputRange: [
				initialColor ? initialColor.textColor : 'rgba(13, 11, 34, 0.5)',
				finalColor ? finalColor.textColor : '#fff',
			],
		}),
	}
	const backgroundColorShadow = {
		backgroundColor: backgroundColorOutside.interpolate({
			inputRange: [0, 1],
			outputRange: [
				initialColor ? initialColor.backgroundBack : '#696C7B',
				finalColor ? finalColor.backgroundBack : '#FFCCB7',
			],
		}),
	}
	const backgroundColorStyle = {
		backgroundColor: backgroundColorOutside.interpolate({
			inputRange: [0, 1],
			outputRange: [
				initialColor ? initialColor.backgroundFront : 'white',
				finalColor ? finalColor.backgroundFront : 'rgba(71, 84, 240, 1)',
			],
		}),
	}

	const scaleButton = useRef(new Animated.Value(1))?.current
	/* States */
	const [hovering, setHovering] = useState(false)
	/* Side - Effects */
	useEffect(() => {
		if (!activeCondition) {
			Animated.timing(backgroundColorOutside, {
				toValue: 1,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start()
		} else {
			Animated.timing(backgroundColorOutside, {
				toValue: 0,
				duration: 200,
				easing: Easing.ease,
				useNativeDriver: false,
			}).start()
		}
	}, [dependencyVariable])

	useEffect(() => {
		Animated.timing(scaleButton, {
			toValue: hovering ? 2 : 1,
			duration: 70,
			easing: Easing.ease,
			useNativeDriver: false,
		}).start()
	}, [hovering, scaleButton])

	/* Output */
	return (
		<Pressable
			onPressIn={() => {
				setHovering(true)
			}}
			onPressOut={() => {
				setHovering(false)
			}}
			onPress={onPress}
			disabled={activeCondition}>
			<View style={[styles.sendOTP]}>
				<Animated.View
					style={[
						styles.otpButton,
						backgroundColorStyle,
						styleProp ? styleProp : {},

						{
							width: width ? width : (win.width / 100) * 80,
							paddingVertical: paddingVertical ? paddingVertical : 12,
							transform: [
								{
									scale: scaleButton.interpolate({
										inputRange: [1, 2],
										outputRange: [1, 0.95],
									}),
								},
							],
						},
					]}>
					{customTextComponent ?? (
						<Animated.Text
							style={[
								styles.send,
								textColorStyle,
								{ fontSize: paddingVertical ? 18 : 24 },
							]}>
							{title}
						</Animated.Text>
					)}
				</Animated.View>
				<Animated.View
					style={[
						styles.otpButton,
						{
							position: 'absolute',
							left: -4,
							top: 4,
							zIndex: -100,
						},
						backgroundColorShadow,
						styleProp ? styleProp : {},
						{
							width: width ? width : (win.width / 100) * 80,
							paddingVertical: paddingVertical ? paddingVertical : 12,
							transform: [
								{
									scale: scaleButton.interpolate({
										inputRange: [1, 2],
										outputRange: [1, 0.95],
									}),
								},
							],
						},
					]}>
					<Text style={[styles.send, { fontSize: paddingVertical ? 18 : 24 }]}>
						Dumy
					</Text>
				</Animated.View>
			</View>
		</Pressable>
	)
}

export default ShadowButtonWithAnimation

/* Styles */
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0D0B22',
		flex: 3,
	},
	safeViewContainer: {
		flex: 2,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	logoAndTextContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: (win.height / 100) * 10,
	},
	logo: {
		width: (win.width / 100) * 80,
		height: (win.width / 100) * 35,
	},
	buildText: {
		fontFamily: secondaryFont,
		color: 'white',
		fontWeight: '400',
		fontSize: 16 / PixelRatio.getFontScale(),
		marginTop: 16,
	},
	phoneNumberContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	loginText: {
		color: 'white',
		fontWeight: '400',
		fontSize: 24 / PixelRatio.getFontScale(),
		fontFamily: 'Roboto-Bold',
		marginBottom: 24,
	},
	numberInput: {
		paddingVertical: 16,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		color: '#000',
		width: (win.width / 100) * 80,
		marginBottom: 24,
	},
	sendOTP: {
		position: 'relative',
	},
	otpButton: {
		paddingVertical: 12,
		paddingHorizontal: 10,
		justifyContent: 'center',
		backgroundColor: 'white',
		width: (win.width / 100) * 80,
	},
	send: {
		fontFamily: 'Lato',
		fontWeight: '700',
		fontSize: 24 / PixelRatio.getFontScale(),
		textAlign: 'center',
	},
})
