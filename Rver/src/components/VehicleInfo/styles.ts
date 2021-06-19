import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		alignItems: 'center',
		margin: 5
	},
	infoContainer: {
		flex: 1,
		justifyContent: 'space-between',
		marginLeft: 10
	},
	infoContainerVehicleName: {
		fontWeight: 'bold',
		fontSize: 16
	},
	infoContainerVehiclePassenger: {
		marginLeft: 5,
		fontSize: 12
	},
	infoContainerVehicleDropoff: {
		fontSize: 12
	},
	priceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: 100
	},
	priceContainerAmount: {
		fontWeight: 'bold',
		fontSize: 16,
		marginLeft: 5
	},
	image: {
		width: 75,
		height: 50,
		resizeMode: 'contain'
	}
});
