import { IOrder, LocPoint } from '../types';

// Calculate the destination location coordinates based on the current and accepted order status
export const calculateDestinationLocation = (
	destination_location: LocPoint,
	order: {
		current: IOrder[];
		accepted: IOrder | null;
	}
) => {
	if (order.current.length !== 0 && order.accepted === null) {
		destination_location.latitude = order.current[0].originLatitude;
		destination_location.longitude = order.current[0].originLongitude;
	} else if (order.accepted) {
		switch (order.accepted.status) {
			case 'dropping_off': {
				destination_location.latitude = order.accepted.destinationLatitude;
				destination_location.longitude = order.accepted.destinationLongitude;
				break;
			}
			case 'picking_up': {
				destination_location.latitude = order.accepted.originLatitude;
				destination_location.longitude = order.accepted.originLongitude;
				break;
			}
		}
	}
};
