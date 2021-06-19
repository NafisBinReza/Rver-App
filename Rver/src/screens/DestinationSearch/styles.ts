import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	textInput: {
		padding: 5,
		paddingLeft: 10,
		marginVertical: 5,
		backgroundColor: '#eee',
		marginLeft: 35,
		borderRadius: 5,
		color: 'black'
	},
	container: {
		backgroundColor: '#fff',
		height: '100%',
		padding: 10,
		display: 'flex'
	},
	circle: {
		width: 8,
		backgroundColor: 'black',
		height: 8,
		position: 'absolute',
		left: 20,
		top: 30,
		borderRadius: 50
	},
	line: {
		width: 2,
		height: 45,
		backgroundColor: '#888',
		zIndex: 0,
		position: 'absolute',
		left: 23,
		top: 35
	},
	square: {
		width: 8,
		backgroundColor: 'black',
		height: 8,
		position: 'absolute',
		left: 20,
		top: 75
	}
});
