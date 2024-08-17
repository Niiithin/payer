import { NativeStackScreenProps } from '@react-navigation/native-stack'

//AppStackNavigation
export type RootStackParamList = {
	BottomTab: undefined
	Home: undefined
	Profile: undefined
	Transactions: undefined
	Scanner: undefined
}

export type PropsEditProfile = NativeStackScreenProps<RootStackParamList>
