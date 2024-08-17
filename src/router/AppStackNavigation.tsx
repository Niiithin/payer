import React from 'react'
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack'
import { RootStackParamList } from '../models/navigation'
import BottomTabNavigation from './BottomTabNavigator'
import Home from '../screens/customer/home/home'
import Transactions from '../screens/customer/transactions/Transactions'
import Profile from '../screens/customer/profile/Profile'
import Scanner from '../screens/customer/scanner/Scanner'

const AppStackNavigator = createStackNavigator<RootStackParamList>()

const AppStackNavigation = () => {
	return (
		<AppStackNavigator.Navigator initialRouteName="Home">
			<AppStackNavigator.Screen
				options={{ headerShown: false }}
				name="BottomTab"
				component={BottomTabNavigation}
			/>
		</AppStackNavigator.Navigator>
	)
}

export default AppStackNavigation
