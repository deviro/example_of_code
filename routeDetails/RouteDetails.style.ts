import { StyleService } from '@ui-kitten/components'
import theme from '../../theme/themeProps'

const themedStyles = StyleService.create({
	pageBox: {
		backgroundColor: 'color-basic-100'
	},
	roadDetailsBox: {
		width: theme.DEFAULT_BOX_SIZE,
		alignSelf: 'center',
	},
	roadBox: {
		width: '100%',
		alignSelf: 'center',
		marginTop: 50,
		display: 'flex',
		alignItems: 'center',
		marginBottom: 20
	},
	beginButton: {
		marginTop: 15,
		marginBottom: 15
	},
	beginSpinner: {
		marginTop: 15,
		marginBottom: 15,
		alignItems: 'center'
	},
	roadImage: {
		width: '100%',
		height: 200,
		borderRadius: theme.BORDER_RADIUS,
		backgroundColor: 'color-basic-100'
	},
	descriptionBox: {
		width: '100%',
		marginTop: 20,
		paddingLeft: 17,
		paddingRight: 17,
		// backgroundColor: 'red'
	},
	description: {
		fontWeight: '500',
		// textAlign: 'center'
	},
	tabBar: {
		alignSelf: 'center',
		backgroundColor: 'color-basic-100',
	},
	tabIndicator: {
		height: 2
	},
	roadInfo: {
		alignSelf: 'flex-start',
		justifyContent: 'space-around',
		// paddingLeft: 20
	},
	infoSlide: {
		// backgroundColor: 'color-basic-300',
		// height: 600,
		// paddingBottom: 100,
		display: 'flex',
		alignItems: 'center',
		// paddingLeft: '7,5%',
		// paddingRight: '7,5%'
	},
	slideContainer: {
		width: '85%',
		// backgroundColor: 'color-basic-100',
		// borderRadius: theme.BORDER_RADIUS,
		padding: theme.BORDER_RADIUS / 2,
		marginBottom: 100
	}
})

export default themedStyles
