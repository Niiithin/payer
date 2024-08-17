/* Imports */
import React from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'

/* Relative Imports */
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIonicon from 'react-native-vector-icons/Ionicons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

/* Local Imports */
import {
	backgroundColorMain,
	primaryColor,
	purpleColor,
	textColorMain,
} from '../../static/colors'
import { refHeightCalc, refWidthCalc } from '../../static/dimensions'
import { secondaryFont } from '../../static/font'

// -----------------------------------------------------------------------------

/* Component */
const TabBar = ({ state, navigation, descriptors }: BottomTabBarProps) => {
	/* Constants */
	const focusedOptions = descriptors[state.routes[state.index].key].options
	console.log('Rendering TabBar', state.routeNames)
	// @ts-ignore
	if (focusedOptions?.tabBarStyle?.display === 'none') {
		return null
	}

	/* Functions */
	const getTabBarComponent = (item: string, index: number) => {
		if (item === 'Home') {
			return (
				<IconAntDesign
					size={32 * refWidthCalc}
					color={index === state.index ? purpleColor : '#939185'}
					name="home"
				/>
			)
		} else if (item === 'Transactions') {
			return (
				<IconMaterial
					size={32 * refWidthCalc}
					color={index === state.index ? purpleColor : '#939185'}
					name="newspaper-variant-outline"
				/>
			)
		} else if (item === 'Profile') {
			return (
				<IconMaterial
					size={32 * refWidthCalc}
					color={index === state.index ? purpleColor : '#939185'}
					name="whatsapp"
				/>
			)
		} else if (item === 'Scanner') {
			return (
				<IconMaterial
					size={32 * refWidthCalc}
					color={index === state.index ? purpleColor : '#939185'}
					name="wallet-outline"
				/>
			)
		} else {
			return (
				<IconIonicon
					size={30 * refWidthCalc}
					color={index === state.index ? purpleColor : '#939185'}
					name="trophy-outline"
				/>
			)
		}
	}

	/* Output */

	return (
		<>
			<View style={[styles.bottomTabContainer]}>
				<View style={styles.mainContainer}>
					{state?.routeNames?.map((item: string, index: number) => (
						<Pressable
							onPress={() => {
								navigation.navigate(item)
							}}
							style={styles.icons}
							key={index}>
							{getTabBarComponent(item, index)}
							<Text
								style={[
									styles.textStyle,
									{
										color: index === state.index ? primaryColor : '#939185',
									},
								]}>
								{item.toUpperCase()}
							</Text>
						</Pressable>
					))}
				</View>
			</View>
		</>
	)
}

/* Styles */
const styles = StyleSheet.create({
	bottomTabContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 60, // Fixed height
	},
	mainContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: '100%',
		backgroundColor: backgroundColorMain, // Another noticeable color
	},
	icons: {
		alignItems: 'center',
	},
	textStyle: {
		color: 'white', // Ensure text is visible
		fontSize: 12,
	},
})

export default TabBar
