/* Imports */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

/* Relative Imports */
import Home from '../screens/customer/home/home'
import Transactions from '../screens/customer/transactions/Transactions'
import Profile from '../screens/customer/profile/Profile'
import Scanner from '../screens/customer/scanner/Scanner'
import TabBar from '../components/Tabbar/Tabbar'

type RootStackParamList = {
	Home: {
		refresh?: boolean
		contestId?: string
		afterInitialTeamSubmit?: boolean
	}
	Transactions: undefined
	Profile: undefined
	Scanner: undefined
}
export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>
export type PropsTransactions = NativeStackScreenProps<
	RootStackParamList,
	'Transactions'
>
export type PropsProfile = NativeStackScreenProps<RootStackParamList, 'Profile'>
export type PropsScanner = NativeStackScreenProps<RootStackParamList, 'Scanner'>

const BottomTab = createBottomTabNavigator<RootStackParamList>()

const BottomTabNavigation = () => {
	return (
		<BottomTab.Navigator
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{ headerShown: false }}
			initialRouteName="Home">
			<BottomTab.Screen name="Home" component={Home} />
			<BottomTab.Screen name="Scanner" component={Scanner} />

			<BottomTab.Screen name="Transactions" component={Transactions} />
			{/* <BottomTab.Screen name="Profile" component={Profile} /> */}
		</BottomTab.Navigator>
	)
}

export default BottomTabNavigation
