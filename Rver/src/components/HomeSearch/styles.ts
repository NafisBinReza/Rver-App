import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	inputContainer: {
		backgroundColor: '#eee',
		padding: 5,
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 5
	},
	inputText: {
		fontWeight: 'bold',
		color: '#444',
		fontSize: 16,
		padding: 5
	},
	timeContainer: {
		flexDirection: 'row',
		margin: 5,
		width: 90,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		borderRadius: 50,
		padding: 5
	},
	row: {
		padding: 10,
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 2,
		borderColor: '#ddd'
	},
	rowText: {
		fontWeight: '700',
		marginLeft: 10,
		fontSize: 14,
		flex: 1
	},
	rowIconCancel: {
		marginRight: 10,
		backgroundColor: '#ddd',
		width: 25,
		height: 25,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	rowIcon: {
		backgroundColor: '#ddd',
		borderRadius: 50,
		padding: 7.5
	}
});
