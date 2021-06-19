import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

export interface ISavedDestinationInput extends LocPoint {
	name: string;
}

export interface IFare extends IFareDetails {
	id: string;
	orderId: string;
	order: IOrder;
}

export interface IFareDetails {
	f_d: number;
	m_s: number;
	f_t: number;
	base: number;
	m_w: number;
}

export interface IVehicle {
	id: string;
	type: string;
	heading: number;
	latitude: number;
	longitude: number;
	isActive: boolean;
	userId: string;
	user: IUser;
	licensePlate: string;
}

export interface IVehicleType {
	id: string;
	type: string;
	price: number;
	duration: number;
}

export interface IDistanceInfo {
	distance: number;
	duration: number;
}

export interface IWeatherInfo {
	temperature: number;
	weather: string;
}

export interface IOrder {
	completedAt: string;
	id: string;
	createdAt: string;
	vehicleType: string;
	originAddress: string;
	destinationAddress: string;
	originLatitude: number;
	originLongitude: number;
	destinationLatitude: number;
	destinationLongitude: number;
	userId: string;
	vehicleId: string;
	vehicle: IVehicle;
	user: IUser;
	fare: IFare;
	status: 'idle' | 'picking_up' | 'dropping_off' | 'completed' | 'cancelled' | 'payment_due';
}

export interface IUser {
	id: string;
	username: string;
	email: string;
	telephone: string;
	lastName: string;
	firstName: string;
	orders: IOrder[];
	bookmarks: IDestination[];
}
export interface IDestination {
	latitude: number;
	longitude: number;
	name: string;
	id: string;
	address: string;
	userId: string;
}

export interface LocPoint {
	latitude: number;
	longitude: number;
}

export interface RouteParams {
	originPlace: {
		details: GooglePlaceDetail;
	};
	destinationPlace: {
		details: GooglePlaceDetail;
	};
}
