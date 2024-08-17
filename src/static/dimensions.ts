import { Dimensions } from 'react-native'
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const refWidth = 430
export const refHeight = 932

export const refWidthCalc = windowWidth / refWidth
export const refHeightCalc = windowHeight / refHeight
