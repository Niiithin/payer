import { StyleProp, ViewStyle } from 'react-native'

export interface IPropsNoInternet {
	onRetryClick: () => void
}

export interface IPropsShadowButtonWithAnimation {
	activeCondition: boolean
	width?: number
	paddingVertical?: number
	title: string
	onPress: () => void
	dependencyVariable: any
	initialColor?: {
		backgroundBack: string
		backgroundFront: string
		textColor: string
	}
	finalColor?: {
		backgroundBack: string
		backgroundFront: string
		textColor: string
	}
	styleProp?: StyleProp<ViewStyle>
	customTextComponent?: React.ReactNode
}
