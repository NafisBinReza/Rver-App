import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		position: 'absolute',
		height: '100%',
		bottom: 0,
		width: '100%',
		padding: 20,
		elevation: 10,
		backgroundColor: '#00000099',
		justifyContent: 'center',
		alignItems: 'center'
	},
	popupContainer: {
		borderRadius: 5,
		zIndex: 5,
		alignItems: 'center',
		width: '100%'
	},
	driverInfo: {
		alignItems: 'center',
		flexDirection: 'row',
		padding: 10
	},
	durationInfo: {
		fontWeight: 'bold',
		fontSize: 30,
		color: 'lightgrey'
	},
	distanceInfo: {
		fontSize: 20,
		color: 'lightgrey'
	},
	userIcon: {
		margin: 5,
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		borderWidth: 3,
		borderColor: 'white',
		backgroundColor: '#2887e0'
	},
	declineButton: {
		width: 75,
		height: 40,
		borderRadius: 5,
		backgroundColor: '#f33333',
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	declineText: {
		fontWeight: 'bold',
		color: 'white'
	},
	orderAmountContainer: {
		width: 50,
		height: 25,
		borderRadius: 5,
		backgroundColor: 'black',
		marginBottom: 10,
		alignItems: 'center'
	},
	orderAmountText: {
		color: '#fff',
		fontWeight: 'bold'
	}
});
