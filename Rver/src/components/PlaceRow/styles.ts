import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		margin: 5,
		padding: 5,
		alignItems: 'center'
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#a2a2a2',
		borderRadius: 50,
		width: 25,
		height: 25
	},
	rowText: {
		marginLeft: 10
	},
	estimateFareContainer: {
		padding: 5,
		alignItems: 'center',
		backgroundColor: '#eee',
		margin: 5
	},
	estimateFareText: {
		fontWeight: 'bold',
		fontSize: 20
	}
});
