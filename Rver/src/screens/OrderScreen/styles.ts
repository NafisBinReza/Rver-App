import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	orderItemContainer: {
		alignItems: 'center',
		padding: 10,
		backgroundColor: 'white',
		margin: 5
	},
	orderItemText: {
		alignItems: 'center',
		fontSize: 18,
		fontWeight: 'bold'
	},
	driverInfoRowsContainer: {
		margin: 5
	},
	driverInfoRowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		margin: 2.5,
		borderRadius: 5,
		elevation: 1
	},
	driverInfoRowText: {
		fontWeight: 'bold',
		padding: 10
	},
	cancelOrderButton: {
		padding: 10,
		borderRadius: 3,
		backgroundColor: '#f35555',
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cancelOrderButtonText: {
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		fontSize: 16
	}
});
