import { LocPoint } from '../types';

// Check to see if the coordinate of the previous and current location changed significantly by comparing its latitude and longitudes
export const didLocationChangeSignificantly = (previous_location: LocPoint, current_location: LocPoint) => {
	let location_changed_significantly = false;
	if (
		!current_location ||
		Math.abs(previous_location.latitude - current_location.latitude) > 0.0005 ||
		Math.abs(previous_location.longitude - current_location.longitude) > 0.0005
	)
		location_changed_significantly = true;
	return location_changed_significantly;
};
