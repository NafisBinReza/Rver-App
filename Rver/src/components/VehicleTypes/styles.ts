import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	vehicleInfoContainer: {},
	buttonContainer: {
		backgroundColor: '#000',
		height: 50,
		margin: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainerText: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#fff'
	}
});
