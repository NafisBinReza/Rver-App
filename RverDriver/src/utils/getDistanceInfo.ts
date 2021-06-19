import { LocPoint } from '../types';

// Get the distance and duration info from google's distance matrix api using the current and destination coordinates
export const getDistanceInfo = (
	origin: LocPoint,
	destination: LocPoint
): Promise<{ duration: number; distance: number }> => {
	return new Promise((resolve) => {
		fetch(
			`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.latitude},${origin.longitude}&destinations=${destination.latitude},${destination.longitude}&key=GOOGLE_DISTANCEMATRIX_API_KEY`
		)
			.then((data) => data.json())
			.then((distance_info: any) => {
				resolve({
					duration: distance_info.rows[0].elements[0].duration.value,
					distance: distance_info.rows[0].elements[0].distance.value
				});
			});
	});
};
