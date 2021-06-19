import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	rowContainer: {
		width: '100%'
	},
	rowItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		margin: 2.5,
		borderRadius: 5,
		elevation: 3
	},
	rowItemText: {
		fontWeight: 'bold',
		padding: 10
	}
});
