import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		elevation: 1,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		margin: 40,
		marginVertical: 20,
		width: Dimensions.get('window').width - 60,
		borderRadius: 5,
	},
	button: {
		fontWeight: 'bold',
		fontSize: 12,
		backgroundColor: 'black',
		padding: 5,
		marginRight: 5,
		borderRadius: 3,
		elevation: 6
	},
	buttonText: {
		color: 'white'
	},
	input: {
		flex: 1,
		padding: 5,
		marginLeft: 5,
    color: 'black'
	}
});
