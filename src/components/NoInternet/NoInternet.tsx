/* Imports */
import React from 'react'
import { Dimensions, PixelRatio, StyleSheet, Text, View } from 'react-native'
import { IPropsNoInternet } from '../../models/model'
import Wrapper from '../Wrapper/Wrapper'
import ShadowButtonWithAnimation from '../Buttons/ShadowButton/ShadowButtonWithAnimation'
import { backgroundColorMain, textColorMain } from '../../static/colors'
import { secondaryFont } from '../../static/font'

/* Relative Imports */

const NoInternet: React.FC<IPropsNoInternet> = ({ onRetryClick }) => {
	/* Output */
	return (
		<Wrapper>
			<View style={styles.wrapper}>
				<View style={styles.container}>
					{/* <SVGIcon.general.NoInternet width={160} height={160} /> */}
					<Text style={styles.noInternetText}>OOPS, NO INTERNET!</Text>
				</View>
				<ShadowButtonWithAnimation
					activeCondition={false}
					width={Dimensions.get('window').width - 80}
					title={'RETRY'}
					onPress={onRetryClick}
					dependencyVariable="asdf"
					initialColor={{
						backgroundFront: '#F2F2F0',
						backgroundBack: backgroundColorMain,
						textColor: backgroundColorMain,
					}}
					finalColor={{
						backgroundFront: '#F2F2F0',
						backgroundBack: backgroundColorMain,
						textColor: backgroundColorMain,
					}}
				/>
			</View>
		</Wrapper>
	)
}

export default NoInternet

/* Styles */
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		padding: 40,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 40,
	},
	noInternetText: {
		fontFamily: secondaryFont,
		fontSize: 24 / PixelRatio.getFontScale(),
		fontWeight: '800',
		color: textColorMain,
		textTransform: 'uppercase',
		marginTop: 24,
	},
})
