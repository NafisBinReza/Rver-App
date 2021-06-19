import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	rowContainer: {
		alignItems: 'center',
		padding: 10,
		backgroundColor: 'white',
		margin: 5,
		borderRadius: 5,
		elevation: 5
	},
	rowText: {
		fontWeight: 'bold',
		fontSize: 16,
		margin: 5,
		textAlign: 'center'
	},
	indexContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
		width: 25,
		height: 25,
		borderRadius: 50,
		margin: 10
	},
	indexContainerText: {
		fontWeight: 'bold',
		fontSize: 18,
		color: 'white'
	},
	sectionText: {
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: 'black',
		fontSize: 18,
		width: '100%',
		padding: 5,
		marginTop: 10,
		marginBottom: 5,
		color: 'white',
		borderRadius: 5
	}
});
