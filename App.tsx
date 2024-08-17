import { SafeAreaView, StyleSheet, View } from 'react-native'
import AppEntry from './src/AppEntry'

function App(): React.JSX.Element {
	return (
		// <SafeAreaView style={styles.container}>
		<AppEntry />
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
})

export default App
