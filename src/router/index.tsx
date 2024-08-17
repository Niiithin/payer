/* Imports */
import React from 'react'

/* Relative Imports */
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../util/navigationService'
import AppStackNavigation from './AppStackNavigation'
import BottomTabNavigator from './BottomTabNavigator'

/* Local Imports */

// -----------------------------------------------------------------------------

/* Components */
const Router = () => {
	/* Hooks */

	/* Output */
	return (
		<NavigationContainer>
			<AppStackNavigation />
		</NavigationContainer>
	)
}

export default Router
