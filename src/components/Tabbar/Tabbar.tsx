import React from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
	backgroundColorMain,
	bgColorSecondary,
	whiteColor,
	blackColor,
	accentColor,
} from '../../static/colors'

const TabBar = ({ state, navigation, descriptors }: BottomTabBarProps) => {
	const focusedOptions = descriptors[state.routes[state.index].key].options

	// @ts-ignore
	if (focusedOptions?.tabBarStyle?.display === 'none') {
		return null
	}

	const getTabBarIcon = (routeName: string, isFocused: boolean) => {
		let iconName: string

		switch (routeName) {
			case 'Home':
				iconName = isFocused ? 'home' : 'home-outline'
				break
			case 'Transactions':
				iconName = isFocused ? 'bank' : 'bank-outline'
				break
			case 'Scanner':
				iconName = 'qrcode-scan'
				break
			case 'Profile':
				iconName = isFocused ? 'account' : 'account-outline'
				break
			default:
				iconName = 'circle'
		}

		return (
			<MaterialCommunityIcons
				name={iconName}
				size={routeName === 'Scanner' ? 32 : 24}
				color={
					isFocused
						? bgColorSecondary
						: routeName === 'Scanner'
						? whiteColor
						: blackColor
				}
			/>
		)
	}

	return (
		<View style={styles.bottomTabContainer}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				if (route.name === 'Scanner') {
					return (
						<Pressable
							key={index}
							onPress={onPress}
							style={styles.scannerButton}>
							{getTabBarIcon(route.name, isFocused)}
						</Pressable>
					)
				}

				return (
					<Pressable key={index} onPress={onPress} style={styles.tabButton}>
						{getTabBarIcon(route.name, isFocused)}
						<Text
							style={[
								styles.tabLabel,
								{ color: isFocused ? bgColorSecondary : blackColor },
							]}>
							{label.toString()}
						</Text>
					</Pressable>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	bottomTabContainer: {
		flexDirection: 'row',
		backgroundColor: whiteColor,
		height: 60,
		borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	tabButton: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	scannerButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: accentColor,
		width: 64,
		height: 64,
		borderRadius: 32,
		marginTop: -20,
		elevation: 4,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	tabLabel: {
		fontSize: 12,
		marginTop: 4,
	},
})

export default TabBar
