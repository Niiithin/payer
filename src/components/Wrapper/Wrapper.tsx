/* Imports */
import React from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import { backgroundColorMain } from '../../static/colors'

/* Local Imports */

// -----------------------------------------------------------------------------

/* Output */
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<View style={{ backgroundColor: backgroundColorMain, flex: 5 }}>
			<StatusBar backgroundColor={'#0D0B22'} barStyle="light-content" />
			<SafeAreaView style={{ flex: 3 }}>{children}</SafeAreaView>
		</View>
	)
}

export default Wrapper
