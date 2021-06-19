import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	payButton: {
		height: 50,
		borderRadius: 5,
		backgroundColor: '#f53333',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
		elevation: 3
	},
	payButtonText: { fontSize: 20, fontWeight: 'bold', color: 'white' },
	container: {
		justifyContent: 'center',
		height: '100%',
		margin: 20
	},
	fareBreakdownContainer: {
		alignItems: 'center',
		marginVertical: 10,
		padding: 20,
		backgroundColor: 'black',
		borderRadius: 5,
		elevation: 3
	},
	fareBreakdownText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	}
});
