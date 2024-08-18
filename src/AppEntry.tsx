/* Imports */
import React from 'react'
import Router from './router'
import { StyleSheet, Text, View } from 'react-native'

const AppEntry = () => {
	return <Router />
}

export default AppEntry

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
